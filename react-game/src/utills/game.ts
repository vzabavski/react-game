import { options } from "./options";
//@ts-ignore
import synt_sound from '../assets/sounds/synt_sound.mp3' 
//@ts-ignore
import asian_sound from '../assets/sounds/asian_sound.mp3' 
//@ts-ignore
import default_sound from '../assets/sounds/default_sound.mp3'
//@ts-ignore
import menu_sound from '../assets/sounds/menu_sound.mp3'
//@ts-ignore
import test from '../assets/sounds/test.mp3' 

export const isAcceptableToSwap = (from: string, to:string,  size:number):Boolean => {
    if(from && to) {
        const fieldSize = Math.sqrt(size);
        const emptyCellBorder = (to.charCodeAt(0) - 96) % fieldSize
        const notemtyCellBorder = (from.charCodeAt(0) - 96) % fieldSize
        const left = to.charCodeAt(0) - 1;
        const right = to.charCodeAt(0) + 1;                    
        const up = to.charCodeAt(0) - fieldSize;
        const down = to.charCodeAt(0) + fieldSize;
        const exapmle = from.charCodeAt(0);
        if(notemtyCellBorder === 0 && emptyCellBorder === 1) {
            return false
        }
        if((notemtyCellBorder === 1 && emptyCellBorder === 0)) {
            return false
        }
        if(exapmle === left || 
            exapmle === right || 
            exapmle === up ||
            exapmle === down) {
            return true
        }
    }
    return false
}

const shuffle = (array:Array<number>) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

export const createCellsOrder = (n: number) => {
    if(localStorage.getItem('cells')) {
        let cells = localStorage.getItem('cells')
        //@ts-ignore
        return JSON.parse(cells)
    }
    let arr = []
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }
    arr = shuffle(arr).map((num, idx) => {
        return {[num]: String.fromCharCode(idx + 97)}
    });
    console.log(String.fromCharCode(options.size + 96))
    return Object.assign({0: options.emptyPosition}, ...arr);
}
export const createArray = (n: number) => {
    const arr = []
    for (let i = 1; i < n; i++) {
        arr.push({[i]: String.fromCharCode(i + 96)});
    }
    return Object.assign({0: options.emptyPosition}, ...arr) 

} 

export const checkForComposure = (currentOrderObject: object, correctOrderObject: object) => {
    const currentOrder = Object.values(currentOrderObject).join();
    const correctOrder = Object.values(correctOrderObject).join();
    if(currentOrder === correctOrder) {
        return true
    }
}
export const setSounOnClick = (type?: string) => {
    switch(type) {
        case 'synt': return new Audio(synt_sound);
        case 'asian': return new Audio(asian_sound);
        case 'default': return new Audio(default_sound);
        default: return new Audio(menu_sound)
    }
}
 
export const setMusicForGame = (type?: string) => {
    switch(type) {
        case 'synt': return new Audio('https://music.xn--41a.ws/public/play_song.php?id=371745466_456290658&hash=f1c642e224be158d3b87590897f5d5cecedda2258fb1ecf50b5cce79ba29dc6c&artist=Kavinsky&title=Nightcall');
        case 'asian': return new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/35/c0/f7/35c0f7ae-a716-5464-b2c0-97553b6c5588/mzaf_17752793769674305613.plus.aac.p.m4a');
        case 'default': return new Audio( 'https://t4.bcbits.com/stream/1cf2461a7b0c74510aad41ae3e382ef3/mp3-128/3656957529?p=0&ts=1614448771&t=41580569cf6e137bb8855fa00c248c4b432aca49&token=1614448771_9313018893a1e1556049d4441e78c078621341fb');
        default: return new Audio('https://cdns-preview-e.dzcdn.net/stream/c-ebb15dde79b75fb3961b3b339722257b-3.mp3')
    }
}
 
export const setSizeStyle = () => {
    let sizeStyle = ''
        if (options.size === 16) {
            sizeStyle = 'sixteen-cells'
        } else {
            sizeStyle = 'nine-cells'
        }
    return sizeStyle
}

export const cleanLocalStorage = () => {
    localStorage.removeItem('steps')
    localStorage.removeItem('cells')
    localStorage.removeItem('time')
}

export  const formatTime = (time: number) => {
    const getSec = `0${time % 60}`.slice(-2)
    const min = Math.floor(time / 60);
    const getMin = `0${min % 60}`.slice(-2)
    const hour = Math.floor(min / 60);
    const getHour = `0${hour % 60}`.slice(-2) 
    return `${getHour}:${getMin}:${getSec}`
}
