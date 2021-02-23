import React from 'react'

const res = JSON.parse(String(localStorage.getItem('score')))
export const options = {
    style: localStorage.getItem('style') ? String(localStorage.getItem('style')) : 'asian',
    size: localStorage.getItem('size') ? Number(localStorage.getItem('size')) : 16,
    sizeClass: localStorage.getItem('sizeClass') ? String(localStorage.getItem('sizeClass')) : 'sixteen-cells',
    emptyPosition: localStorage.getItem('position') ? localStorage.getItem('position') : 'p',
    visibility: localStorage.getItem('visibility') ? String(localStorage.getItem('visibility')) : '',
    steps: 0,
    time: '00:00:00',
    win: false,
   // score: localStorage.getItem('score') ? res : []
}