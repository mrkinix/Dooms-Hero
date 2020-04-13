<template>
    <div class="home" ref="container">
        <div v-if="started">
            <img class="background" :src="require('@/assets/background.jpg')">
            <audio autoplay>
                <source :src="require('@/assets/songs/doom_Rip_and_Tear.mp3')" type="audio/mp3">
            </audio>
        </div>
        <div class="toggle_ui" v-bind:style="{ opacity: playing }">
            <nav>
                <ul>
                    <h2>Chiboub</h2>
                    <li>
                        <a>Gallery</a>
                        <a>About</a>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
            <div class="intro">
                <h1>Welcome to my portfolio</h1>
                <span>Hi, I'm Hedi Ben Chiboub, I'm a 19 year old self-taught programmer.
                    You can find more about me in my <span>About</span> page.</span>
            </div>
            <!-- about this game -->
            <button @click="startGame">Play song</button>
        </div>
        <img class="guitar__board" v-bind:style="{ left: `calc(5% + ${left_pos_board}` }"
        :src="require('@/assets/guitar_board.png')" @click="startGame">
    </div>
</template>

<script>
import * as guitar from '@/scripts/initGame.js';
import { generate } from '@/scripts/generateSong';
import * as delay from 'delay';

export default {
    data() {
        return {
            playing: '1',
            started: false,
            left_pos_board: '0',
            created: 0,
            leader: 0,
            queue: [],
            hittable: false,
            hit: false
        }
    },
    methods: {
        startGame: async function() {
            const KEYS = ['f', 'g', 'h']
            const STRINGS = { f: 'left', g: 'middle', h: 'right'}
            const DIRECTION = ['ArrowUp', 'ArrowDown'];
            guitar.createUi(this);
            generate(this);
            await delay(4200);
            this.started = true;
            window.addEventListener('keydown', async(e) => {
                if (KEYS.includes(e.key)) {
                    if ((this.queue[0] === STRINGS[e.key] && this.hittable) ) {
                        this.queue.shift();
                        this.hit = true;
                        console.log('%c +1', 'color: green');
                        this.hittable = false
                    }
                    else {
                        console.log('%c -1', 'color: red')
                    }
                }
            });
        },
        test: function() {
            if (!this.hit) this.queue.shift();
            else { 
                this.hit = false;
                this.hittable = false
            }
        },
        test1: function() {
            this.hittable = true
        },
    },
    created() {
    },
}
</script>

<style lang="scss" scoped>
.toggle_ui {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.background {
    height: 100%;
    width: auto;
    opacity: .1;
}
    
.home {
    padding: 0;
    height: 100%;
    width: 100%;
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    ul {
        font-size: 22px;
        margin: 0 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(222, 222, 222);
        li {
            list-style-type: none;
            a {
                padding: 10px;
                text-decoration: underline;
                cursor: pointer;
                &:hover {
                    color: white;
                }
            }
        }
    }
    .guitar__board {
        height: 70vh;
        width: auto;
        position: absolute;
        left: 5%;
        bottom: 0;
    }
    .test {
        height: 70vh;
        width: calc(70vh * 1.123 / 4);
        background: rgba(211, 30, 30, 0.5);
        position: fixed;
        left: 25%;
        bottom: 22.25vh;        
    }

    .intro {
        position: absolute;
        color: white;
        right: 5%;
        top: 20%;
        z-index: 2;
        width: 30vw;
        text-align: right;
        padding: 0;
        h1 {
            font-size: 32px;
        }
        span {
            font-size: 22px;
            span {
                text-decoration: underline;
                cursor: pointer;
                color: rgb(51, 143, 255);
                &:hover {
                    color: rgb(67, 150, 252);
                }
            }
        }
    }
    button {
        position: absolute;
        right: 5%;
        bottom: 5%;
        height: 60px;
        border-radius: 4px;
        width: 180px;
        cursor: pointer;
        background: linear-gradient(180deg,#000,#5f1d1d);;
        border: 1px solid #c35454;
        opacity: .9;
        font-size: 30px;
        color: white;
        &:hover {
            box-shadow: 0 0 18px 1px rgb(170, 38, 38);
            opacity: 1;
        }
    }
}
</style>
