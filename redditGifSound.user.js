// ==UserScript==
// @name         Reddit Gif Sound
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://raw.githubusercontent.com/VoltronicAcid/redditGifSound/master/redditGifSound.user.js
// @version      0.0.1
// @description  Remember 'mute' setting for gifs on reddit
// @author       VoltronicAcid
// @match        https://www.redgifs.com/ifr/*
// @match        https://redgifs.com/ifr/*
// @match        https://www.redgifs.com/watch/*
// @match        https://*reddit.com/*
// ==/UserScript==

(() => {
    let redgif = curr => {
        const inner = curr.querySelector('div.res-expando-box-inner > div.res-iframe-expando');

        if (inner) {
            console.log('Expanded');
        } else {
            console.log('Collapsed');
        }
    };

    document.addEventListener('keydown', evt => {
        let curr;
        if (evt.key === 'j' || evt.key === 'k' || evt.key === 'x') {
            curr = document.querySelector('div.res-selected.RES-keyNav-activeElement > div.res-expando-box');
            console.log(evt.key, 'pressed');
            console.log(evt);

            if (curr) {
                const host = curr.getAttribute('data-host');        // redgifs vreddit imgur
                console.log(host);

                if (host === 'redgifs') {
                    redgif(curr);
                }

                if (host === 'vreddit') {
                    console.log('Reddit video host');
                }

                if (host === 'imgur') {
                    console.log('Imgur host');
                }
            }
        }
    });
})();
