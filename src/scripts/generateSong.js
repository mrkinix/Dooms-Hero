// Caution: spaghetti code incoming
// Also, every 25ms does a huge difference.

import * as delay from 'delay';
import * as guitar from './initGame.js';

const chorus = async(e, repetition, dataFn) => {
    for (let i = 0; i < repetition; i += 1) {
        await guitar.leftInit(e, true, dataFn, 100)
        await guitar.leftInit(e, true, dataFn, 350)
        await guitar.leftInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 150)
        await guitar.rightInit(e, true, dataFn, 150)
        await guitar.middleInit(e, true, dataFn, 150)
        await guitar.rightInit(e, true, dataFn, 250)
        await guitar.leftInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 150)
        await guitar.rightInit(e, true, dataFn, 150)
        await guitar.middleInit(e, true, dataFn, 150)
        await guitar.rightInit(e, true, dataFn);

        if (i !== repetition -1) {
            await delay(275)
            await guitar.middleInit(e, true, dataFn, 100)
        }
    }
}

const attack = async(e, dataFn) => {
    for (let i = 0; i < 2; i += 1) {

        await guitar.leftInit(e, true, dataFn, 150)
        await guitar.middleInit(e, true, dataFn, 150)
        await guitar.rightInit(e, true, dataFn, 200)
        await guitar.middleInit(e, true, dataFn, 300)
        await guitar.middleInit(e, true, dataFn, 300)
        
        await guitar.leftInit(e, true, dataFn, 200)
        await guitar.middleInit(e, true, dataFn, 200)
        await guitar.rightInit(e, true, dataFn, 200)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.rightInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 300)

        await guitar.leftInit(e, true, dataFn, 200)
        await guitar.middleInit(e, true, dataFn, 200)
        await guitar.rightInit(e, true, dataFn, 200)
        await guitar.middleInit(e, true, dataFn,  100)
        await guitar.rightInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.rightInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.rightInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 600)
    
    }
}

const secondChorus = async(e, dataFn) => {
    for (let i = 0; i < 2; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            await guitar.middleInit(e, true, dataFn, 100)
            await guitar.middleInit(e, true, dataFn, 150)
            await guitar.rightInit(e, true, dataFn, 200)
            await guitar.leftInit(e, true, dataFn, 200)
            await guitar.middleInit(e, true, dataFn, 350)
        }

        await guitar.leftInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.rightInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 200)
        await guitar.leftInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.rightInit(e, true, dataFn)

        if (i !== 1) await delay(600)
    }
}

const chorus2 = async(e, dataFn) => {
    for (let i = 0; i < 4; i += 1) {
        await guitar.leftInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 250)
        await guitar.leftInit(e, true, dataFn, 0)
        if (i === 3) await delay(700)
        else await delay(350)
    }

    for (let i = 0; i < 8; i += 1) {
        await guitar.leftInit(e, true, dataFn, 300)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.rightInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn, 100)
        await guitar.leftInit(e, true, dataFn, 100)
        await guitar.middleInit(e, true, dataFn)

        if (i !== 7) await delay(400)
    }
}

const chorus3 = async(e, dataFn) => {
    for (let k = 0; k < 2; k += 1) {
        for (let i = 0; i < 3; i += 1) {
            for (let j = 0; j < 3; j += 1) {
                await guitar.leftInit(e, true, dataFn, 100)    
            } 

            await delay(100)
            await guitar.rightInit(e, true, dataFn, 300)
            await guitar.middleInit(e, true, dataFn, 100)
            await guitar.rightInit(e, true, dataFn, 200)
        }

        for (let j = 0; j < 3; j += 1) {
            await guitar.leftInit(e, true, dataFn, 100)    
        }

        await delay(100)    
        await guitar.rightInit(e, true, dataFn, 100)    
        await guitar.middleInit(e, true, dataFn, 100)    
        await guitar.rightInit(e, true, dataFn, 250)    
        await guitar.rightInit(e, true, dataFn, 100)    
        await guitar.middleInit(e, true, dataFn)

        if (k !== 1) await delay(300);
    } 
}

const chorus4 = async(e, dataFn) => {
    for (let j = 0; j < 4; j += 1) {
        if (j === 2) {
            await guitar.rightInit(e, true, dataFn, 300)
            await guitar.rightInit(e, true, dataFn, 300)
            
        }

        for (let i = 0; i < 3; i+= 1) {
            await guitar.middleInit(e, true, dataFn, 75)
            await guitar.leftInit(e, true, dataFn, 75)
        }

        await delay(200)
        await guitar.middleInit(e, true, dataFn, 300)

        if (j < 2) {
            for (let i = 0; i < 2; i+= 1) {
                await guitar.rightInit(e, true, dataFn, 200)
            }
        }
    }
    await delay(1000)
    for (let i= 0; i < 4; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            await guitar.leftInit(e, true, dataFn, 50)    
        } 
        await delay(200)
        await guitar.middleInit(e, true, dataFn, 200)    
        await guitar.middleInit(e, true, dataFn, 150)    
        await guitar.rightInit(e, true, dataFn, 150)    
        await guitar.middleInit(e, true, dataFn, 100)
        await delay(100)

        for (let j = 0; j < 3; j += 1) {
            await guitar.leftInit(e, true, dataFn, 50)    
        } 
        await delay(200)
        await guitar.middleInit(e, true, dataFn, 200)    
        await guitar.middleInit(e, true, dataFn, 150)    
        await guitar.leftInit(e, true, dataFn, 150)    
        await guitar.middleInit(e, true, dataFn, 100)    
        await delay(200)

    }
}

const ending = async(e, dataFn) => {
    for (let i = 0; i < 7; i += 1) {
        await guitar.leftInit(e, true, dataFn, 250)    
    }
    await delay(200)
    await guitar.leftInit(e, true, dataFn, 250)    
    await guitar.leftInit(e, true, dataFn, 250)    
    await guitar.leftInit(e, true, dataFn, 250)    
    await guitar.leftInit(e, true, dataFn, 250)    
    await delay(200)
    await guitar.leftInit(e, true, dataFn, 150)    
    await guitar.middleInit(e, true, dataFn, 150)    
    await guitar.leftInit(e, true, dataFn, 150)    
    await guitar.middleInit(e, true, dataFn, 150)    
    await guitar.rightInit(e, true, dataFn, 150)    
    await guitar.middleInit(e, true, dataFn, 150)    
    await guitar.middleInit(e, true, dataFn, 150)    
}


export const generate = async(e, dataFn) => {
    // 3 2 1
    await delay(3200);
    await chorus(e, 24, dataFn); // 0:01
    await delay(6900);
    await attack(e, dataFn); // 1:01
    await delay(100);
    await secondChorus(e, dataFn); // 1:11
    await delay(900);
    await chorus2(e, dataFn); // 1:22
    await delay(400);
    await chorus3(e, dataFn) //1:31
    await delay(400);
    await chorus4(e, dataFn) //1:40
    await ending(e, dataFn) //1:40

}