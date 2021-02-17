
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



export const createArray = (n: number) => {
    const arr = []
    for (let i = 1; i < n; i++) {
        arr.push({[i]: String.fromCharCode(i + 96)});
    }
    return arr
}

