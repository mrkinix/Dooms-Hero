/* eslint-disable no-plusplus */
/*  
    All the values below were calculated 
    based on the guitar height and width.
    All these functions control the pick
    path.
*/

export const middleTrajectory = (e) => {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            e.y_pos = `${parseInt(e.y_pos, 10) - 0.1}vh`;
        }, i * 60);
    }
};

export const leftTrajectory = (e) => {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            e.y_pos = `${parseInt(e.y_pos, 10) - 0.1}vh`;
            e.x_pos = `calc(50vw - 0.56*70vh + 12.5vh + ${(parseInt(e.y_pos, 10) / 3.98)}vh)`;
        }, i * 60);
    }
};

export const rightTrajectory = (e) => {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            e.y_pos = `${parseInt(e.y_pos, 10) - 0.1}vh`;
            e.x_pos = `calc(50vw - 0.56*70vh + 61.6vh - ${(parseInt(e.y_pos, 10) / 3.63)}vh)`;
        }, i * 60);
    }
};
