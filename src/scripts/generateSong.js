import * as delay from 'delay';
import * as guitar from './initGame.js';

const chrous = async(e, repetition, dataFn) => {
    for (let i = 0; i < repetition; i+=1) {
        guitar.leftInit(e, true, dataFn);
        await delay(100)
        guitar.leftInit(e, true, dataFn);

        await delay(400)
        guitar.leftInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);

        await delay(200)
        guitar.leftInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(200)
        guitar.rightInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);

        if (i !== repetition -1) {
            await delay(200)
            guitar.middleInit(e, true, dataFn);  
            await delay(200)
        }
    }
}

const attack = async(e, dataFn) => {
    for (let i = 0; i < 2; i += 1) {

        guitar.leftInit(e, true, dataFn);
        await delay(150)
        guitar.middleInit(e, true, dataFn);
        await delay(150)
        guitar.rightInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(300)
        guitar.middleInit(e, true, dataFn);
        await delay(250)
        
        guitar.leftInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(200)
        guitar.rightInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(200)

        guitar.leftInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(200)
        guitar.rightInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(100)
        guitar.middleInit(e, true, dataFn); 
        await delay(600)
    
    }
}

const secondChorus = async(e, dataFn) => {
    for (let i = 0; i < 2; i += 1) {
        for (let j = 0; j < 3; j += 1) {

            guitar.middleInit(e, true, dataFn);
            await delay(100)
            guitar.middleInit(e, true, dataFn);
            await delay(150)
            guitar.rightInit(e, true, dataFn);
            await delay(200)
            guitar.leftInit(e, true, dataFn);
            await delay(200)
            guitar.middleInit(e, true, dataFn);
            await delay(400)
        }
        guitar.leftInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(200)
        guitar.leftInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(600)
    }
}

const chrous2 = async(e, dataFn) => {
    for (let i = 0; i < 4; i += 1) {
        guitar.leftInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(250)
        guitar.leftInit(e, true, dataFn);
        await delay(400)
    }
    await delay(75)
    for (let i = 0; i < 8; i += 1) {
        guitar.leftInit(e, true, dataFn);
        await delay(250)
        guitar.middleInit(e, true, dataFn);
        await delay(100)
        guitar.rightInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        await delay(200)
        guitar.leftInit(e, true, dataFn);
        await delay(100)
        guitar.middleInit(e, true, dataFn);
        if (i !== 7) await delay(400)
    }
}
const chrous3 = async(e, dataFn) => {
    for (let k = 0; k < 2; k += 1) {
        for (let i = 0; i < 4; i += 1) {
            for (let j = 0; j < 3; j += 1) {
                guitar.leftInit(e, true, dataFn);
                await delay(100)    
            } 
            await delay(100)
            guitar.rightInit(e, true, dataFn);
            await delay(200)
            guitar.middleInit(e, true, dataFn);
            await delay(200)
            guitar.rightInit(e, true, dataFn);
            await delay(200)
        }
        for (let j = 0; j < 3; j += 1) {
            guitar.leftInit(e, true, dataFn);
            await delay(100)    
        }
        guitar.leftInit(e, true, dataFn);
        await delay(100)    
        guitar.middleInit(e, true, dataFn);
        await delay(100)    
        guitar.rightInit(e, true, dataFn);
        await delay(100)    
        guitar.leftInit(e, true, dataFn);
        await delay(100)    
        guitar.middleInit(e, true, dataFn);
        await delay(100)   
    } 
}


export const generate = async(e, dataFn) => {
    //3 2 1
    // await delay(2900)
    // await chrous(e, 24, dataFn);
    // await delay(6900)
    // await attack(e, dataFn)
    // secondChorus(e, dataFn)
    // await chrous2(e, dataFn);
    await chrous3(e, dataFn);

}