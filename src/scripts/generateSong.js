import * as delay from 'delay';
import * as guitar from './initGame.js';

const chrous = async(e, repetition) => {
    for (let i = 0; i < repetition; i+=1) {
        guitar.leftInit(e, true);
        await delay(100)
        guitar.leftInit(e, true);

        await delay(400)
        guitar.leftInit(e, true);
        await delay(100)
        guitar.middleInit(e, true);
        await delay(100)
        guitar.rightInit(e, true);
        await delay(100)
        guitar.middleInit(e, true);
        await delay(100)
        guitar.middleInit(e, true);

        await delay(200)
        guitar.leftInit(e, true);
        await delay(200)
        guitar.middleInit(e, true);
        await delay(200)
        guitar.rightInit(e, true);
        await delay(200)
        guitar.middleInit(e, true);
        await delay(100)
        guitar.middleInit(e, true);

        await delay(200)
        guitar.middleInit(e, true);  
        await delay(200)
    }
} 

export const generate = async(e) => {
    //3 2 1
    await delay(2900)
    chrous(e, 24);

}