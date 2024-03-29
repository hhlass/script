/*

Fileball挂载pikpak

*/


let url = $request.url;
let body = $request.body;
var myResponse = {
    status: 'HTTP/1.1 200 OK',
};
!(async () => {
	let Token = $prefs.valueForKey("pikpak-ck") || await signin();
	let req = {
		url: `https://api-drive.mypikpak.com/drive/v1/files?filters=%7B%22phase%22%3A%7B%22eq%22%3A%22PHASE_TYPE_COMPLETE%22%7D%2C%22trashed%22%3A%7B%22eq%22%3Afalse%7D%7D&parent_id=&thumbnail_size=SIZE_LARGE`,
		headers: { authorization: Token }
	}
	switch (url.match(/(auth|entry)\.cgi$/)?.[0]) {
		case "auth.cgi":
			obj = {
                success: true,
                data: {
                    sid: ''
                }
            };
			// console.log('auth')
			myResponse.body = JSON.stringify(obj);
			$done(myResponse);
			break;
		case "entry.cgi":
			if (body.match("Delete&")) {
				//删除文件
				// console.log('entry - delete')
				myResponse.url = 'https://api-drive.mypikpak.com/drive/v1/files:batchTrash'
				myResponse.body = `{"ids":["${body.match(/path=([^&]+)/)[1]}"]}`
				$done(myResponse)
			} else {
				//加载目录
				// console.log('entry - load dir')
				let path = body.match(/folder_path=([^&]+)/)?.[1];
				let a = path ? ((req.url = req.url.replace(/(parent_id=)/, `$1${path}`)), "files") : "shares";

				items = null
				let try_count = 0
				while (try_count<5 && items == null){
					tmp = await http(req, 'get');
					if (tmp != null  && tmp.files != null){
					items = tmp.files
					}else{
					console.log('tmp is null or files is null')
					req.headers.authorization = await signin()
					try_count += 1
					}
				}
				if(try_count >= 5 && items == null){
					items = []
				}
						let shares = JSON.stringify(
							items.map((item) => {
								return {
									isdir: !item.file_extension,
									path: item.id,
									name: item.name,
									additional: { size: parseInt(item.size) },
								};
							}),
						);
						myResponse.body =  `{"success":true,"data":{"total":0,"offset":0,"${a}":${shares}}}`
						$done(myResponse);
					}
			break;
		default:
			//加载文件
			// console.log('entry - load file')
			let fids = url.match("fbdownload") ? hex2str(url.match(/dlink=%22(.*)%22/)[1]) : url.match(/path=(.*$)/)[1];
			req.url = `https://api-drive.mypikpak.com/drive/v1/files/${fids}?&thumbnail_size=SIZE_LARGE`;
			let link =
				(await http(req)).links["application\/octet-stream"].url.replace(/https/, "http");
			myResponse.headers = { Location: link }
			myResponse.status = 'HTTP/1.1 302 OK'
			$done(myResponse);
	}
})();

function http(req, method = "get") {
	req['method'] = method;
	return new Promise((res) => {
		$task.fetch(req).then(resp => {
			(resp?.status === 401) ?
				res() : res(JSON.parse(resp.body));
		})
	});
}

function hex2str(hex) {
	var trimedStr = hex.trim();
	var rawStr = trimedStr.substr(0, 2).toLowerCase() === "0x" ? trimedStr.substr(2) : trimedStr;
	var len = rawStr.length;
	if (len % 2 !== 0) {
		return "";
	}
	var curCharCode;
	var resultStr = [];
	for (var i = 0; i < len; i = i + 2) {
		curCharCode = parseInt(rawStr.substr(i, 2), 16);
		resultStr.push(String.fromCharCode(curCharCode));
	}
	return resultStr.join("");
}


async function signin() {
	let account = $prefs.valueForKey("pikpak-account") || (body = decodeURIComponent(body), 0);
	let username = account ?
		account.split("-")[0] :
		body.match(/account=([^&]+)/)[1];
	let password = account ?
		account.split("-")[1] :
		body.match(/passwd=([^&]+)/)[1];
	$prefs.setValueForKey(`${username}-${password}`, `pikpak-account`);
	let token = "";
	try {
		token = 'Bearer ' + (await http({
			url: 'https://user.mypikpak.com/v1/auth/signin',
			body: `{"client_id":"YcrttD06T9PIkqAY",
					"username":"${username}",
					"password":"${password}"}`
		}, 'post'))?.["access_token"];
	} catch (error) {
		console.log(error)
	}
	$prefs.setValueForKey(token, `pikpak-ck`)
	return token
}
