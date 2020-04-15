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
        debugger;

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
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(200)
        guitar.rightInit(e, true, dataFn);
        await delay(200)
        guitar.middleInit(e, true, dataFn);
        await delay(300)
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
        await delay(100)
    
    }
}

export const generate = async(e, dataFn) => {
    //3 2 1
    // await delay(2900)
    // chrous(e, 24, dataFn);
    // await delay(2900)
    attack(e, dataFn)

}