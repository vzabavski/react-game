

const res = JSON.parse(String(localStorage.getItem('score')))
export const options = {
    style: localStorage.getItem('style') ? String(localStorage.getItem('style')) : 'asian',
    size: localStorage.getItem('size') ? Number(localStorage.getItem('size')) : 9,
    sizeClass: localStorage.getItem('sizeClass') ? String(localStorage.getItem('sizeClass')) : 'nine-cells',
    emptyPosition: localStorage.getItem('position') ? localStorage.getItem('position') : 'i',
    visibility: localStorage.getItem('visibility') ? String(localStorage.getItem('visibility')) : '',
    steps: 0,
    time: 0,
    win: false,
    score: localStorage.getItem('score') ? res : [],
    sound_volume: 1,
    music_volume: 0,
    music_authoplay: true,
    sound_authoplay: false
}