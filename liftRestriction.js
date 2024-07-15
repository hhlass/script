// ==UserScript==
// @name         解除页面限制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  解除页面上的用户选择和事件限制
// @author       hhlass
// @match        *://pdai.tech/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function t(e) {
        e.stopPropagation();
        e.stopImmediatePropagation && e.stopImmediatePropagation();
    }

    document.querySelectorAll("*").forEach(e => {
        if (window.getComputedStyle(e).getPropertyValue("user-select") === "none") {
            e.style.setProperty("user-select", "text", "important");
        }
    });

    ["copy", "cut", "contextmenu", "selectstart", "mousedown", "mouseup", "mousemove", "keydown", "keypress", "keyup"].forEach(e => {
        document.documentElement.addEventListener(e, t, { capture: true });
    });

    function showCustomAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.innerText = message;
        Object.assign(alertBox.style, {
            position: 'fixed',
            top: '5px',
            right: '50%',
            padding: '10px',
            backgroundColor: '#f44336',
            color: 'white',
            borderRadius: '5px',
            zIndex: '1000',
            transition: 'opacity 0.5s'
        });
        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.style.opacity = '0';
            setTimeout(() => document.body.removeChild(alertBox), 500);
        }, 3000);
    }

    showCustomAlert("解除限制成功啦！");
})();
