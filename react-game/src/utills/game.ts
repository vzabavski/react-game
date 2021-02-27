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
import menu_music from '../assets/sounds/menu_music.mp3'
//@ts-ignore
import asian_music from '../assets/sounds/asian_music.mp3'
//@ts-ignore
import synt_music from '../assets/sounds/synt_music.mp3'
//@ts-ignore
import default_music from '../assets/sounds/default_music.mp3'


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
        case 'synt': return new Audio(synt_music);
        case 'asian': return new Audio(asian_music);
        case 'default': return new Audio(default_music);
        default: return new Audio(menu_music)
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
