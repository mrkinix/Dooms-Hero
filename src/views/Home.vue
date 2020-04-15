<template>
    <div class="home" ref="container">
        <h2 :class="{color: 'red'}">score: {{score}}</h2>
            <audio ref="audio">
                <source :src="require('@/assets/songs/doom_Rip_and_Tear.mp3')" type="audio/mp3">
            </audio>
        <div v-if="started">
            <img class="background" :src="require('@/assets/background.jpg')">
        </div>
        <div class="toggle_ui" v-bind:style="{ opacity: playing }">
            <topBar/>
            <div class="intro">
                <h1>Welcome to my portfolio</h1>
                <span>Hey, I'm Hedi Chiboub, a 19 year old self-taught programmer and I made a little
                    game for you, click the button below to try it!</span>
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
import topBar from '@/components/topBar';

export default {
    components: {
        topBar
    },
    data() {
        return {
            playing: '1',
            started: false,
            left_pos_board: '0',
            created: 0,
            queue: [],
            leader: 0,
            score: 0
        }
    },
    methods: {
        startGame: async function() {
            guitar.createUi(this);
            generate(this , () => ({
                    leader: this.leader,
                }),
            );
            // await delay(4200);
            this.started = true;
            this.$refs.audio.currentTime = 58.7
            this.$refs.audio.play()
        },
        updatescore: function(param) {
            this.score += param;
        },
        test: function() {
                this.queue.shift();
                this.leader += 1;
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

h2 {
    margin-top: 25vh;
    color: white;
    position: absolute;
    width: 100%;
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
            .router {
                padding: 10px;
                color: rgb(222, 222, 222);
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
