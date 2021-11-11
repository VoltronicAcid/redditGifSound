// ==UserScript==
// @name         Reddit Gif Sound
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://raw.githubusercontent.com/VoltronicAcid/redditGifSound/master/redditGifSound.user.js
// @version      0.0.1
// @description  Remember 'mute' setting for gifs on reddit
// @author       VoltronicAcid
// @match        https://www.redgifs.com/ifr/*
// @match        https://www.redgifs.com/watch/*
// @match        https://*reddit.com/*
// ==/UserScript==

(() => {
    let redgif = evt => {
        if (evt.key === 'j' || evt.key === 'k'){
            console.log(evt);
        }
    };

    document.addEventListener('keydown', evt => {
        let curr;
        if (evt.key === 'j' || evt.key === 'k') {
            curr = document.querySelector('div.res-selected.RES-keyNav-activeElement > div.res-expando-box');
            console.log(curr);
        }
    });
})();
