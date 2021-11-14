// ==UserScript==
// @name         Reddit Gif Sound
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://raw.githubusercontent.com/VoltronicAcid/redditGifSound/master/redditGifSound.user.js
// @version      0.0.1
// @description  Remember mute setting for gifs on reddit
// @author       VoltronicAcid
// @run-at       document-idle
// @match        https://www.redgifs.com/ifr/*
// ==/UserScript==

(() => {
    const unMuteGifs = localStorage.getItem('user_sound')
    
    const intrvlId = setInterval(() => {
        const buttonsContainer = document.querySelector('div.options-buttons')

        if (buttonsContainer) {
            if (unMuteGifs === 'unmuted') {
                const unmuteBttn = buttonsContainer.querySelector('span.icon.icon-mute')
                unmuteBttn && unmuteBttn.click()
            } else if (unMuteGifs === 'muted') {
                const muteButton = buttonsContainer.querySelector('span.icon.icon-sound')
                muteButton && muteButton.click()
            }

            clearInterval(intrvlId)
        }
    }, 100)    
})();