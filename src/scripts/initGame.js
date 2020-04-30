import Vue from 'vue';
import Pick from '../components/pick.vue';
import * as delay from 'delay';

export const generate = (e, _x, _y, pos, reverse, dataFn) => {
    // Here the magic happens, we generate the pick and link
    // it to the Home component so that they can communicate
    // to each other
    const ComponentClass = Vue.extend(Pick);
    const initData = dataFn() || {};
    const data = {};
    const propsData = {
        x: _x,
        y: _y,
        action: pos,
        reverse: reverse,
        id: e.created,
    };
    const propKeys = Object.keys(ComponentClass.options.props || {});

    Object.keys(initData).forEach(key => {
        if (propKeys.includes(key)) {
          propsData[key] = initData[key];
        } else {
          data[key] = initData[key];
        }
    });

    const instance = new ComponentClass({
        data,
        propsData,
        created(){
            this.$on(['destruction'], () => { e.pickdestroyed() })
            this.$on(['score'], (param, index = -1, miss = false) => 
            {e.updatescore(param, index, miss) })
        },
    });

    e.created += 1;
    instance.$mount();
    e.$refs.container.appendChild(instance.$el);

    const dataSetter = data => {
        Object.keys(data).forEach(key => {
            instance[key] = data[key];
            });
        };
    
    const unwatch = e.$watch(dataFn || {}, dataSetter);

    return {
        instance,
        update: () => dataSetter(dataFn ? dataFn() : {}),
        dispose: () => {
            unwatch();
            instance.$destroy();
        }
    };
};

export const createUi = (e) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 20; i++) {
        setTimeout(() => { e.playing -= 0.05; }, i * 60);
    }
    e.left_pos_board = '50vw - 0.56*70vh - 5%';
};

export const leftInit = async (e, reverse, dataFn, tone = 0) => {
    e.queue.push('left')
    const X_POSITION = 'calc(50vw - 0.56*70vh + 30vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION, 'left', reverse, dataFn);
    await delay(tone);
};

export const rightInit = async (e, reverse, dataFn, tone = 0) => {
    e.queue.push('right')
    const X_POSITION = 'calc(50vw - 0.56*70vh  + 42.51vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION, 'right', reverse, dataFn);
    await delay(tone);
};

export const middleInit = async (e, reverse, dataFn, tone = 0) => {
    e.queue.push('middle')
    const X_POSITION = 'calc(50vw - 0.56*70vh + 36.54vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION, 'middle', reverse, dataFn);
    await delay(tone);
};
