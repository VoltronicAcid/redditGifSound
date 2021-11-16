// ==UserScript==
// @name         Reddit RES RedGifs Sound Control
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://github.com/VoltronicAcid/redditGifSound/raw/master/redditGifSound.user.js
// @version      0.0.4
// @description  Unmute content from redgifs.com when browsing Reddit with RES
// @author       VoltronicAcid
// @run-at       document-idle
// @match        https://www.redgifs.com/ifr/*
// @match        https://www.redgifs.com/watch/*
// ==/UserScript==

(() => {
    const unMuteGifs = localStorage.getItem('user_sound') === 'unmuted'
    
    const intrvlId = setInterval(() => {
        const buttonsContainer = document.querySelector('div.options-buttons')

        if (buttonsContainer) {
            if (unMuteGifs) {
                const unmuteBttn = buttonsContainer.querySelector('span.icon.icon-mute')
                unmuteBttn && unmuteBttn.click()
            }

            clearInterval(intrvlId)
        }
    }, 100)    
})();
