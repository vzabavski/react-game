import { options } from "./options";

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
export const setSounOnClick = (type: string) => {
    switch(type) {
        case 'synt': return new Audio('https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/laser-burst_Gyjp5_Ed_NWM.mp3');
        case 'asian': return new Audio('https://www.fesliyanstudios.com/play-mp3/389');
        default: return new Audio('https://www.fesliyanstudios.com/play-mp3/387')
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
}

