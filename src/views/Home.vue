<template>
    <div class="home" ref="container">
        <div class="tuto" v-bind:style="{ opacity: playing }"><h1>HOW TO PLAY</h1><br> 
        [F] LEFT PICK <br> [G] MIDDLE PICK <br> [H] RIGHT PICK</div>
        <audio ref="audio">
            <source :src="require('@/assets/songs/doom_Rip_and_Tear.mp3')" type="audio/mp3">
        </audio>
        <img class="hit" :style="{'left': 'calc(50vw - 0.56*70vh + 18vh)',
        'display': hit[0]}" :src="require('@/assets/hit.png')">
        <img class="hit" :style="{'left': 'calc(50vw - 0.56*70vh + 37vh)',
        'display': hit[1]}" :src="require('@/assets/hit.png')">
        <img class="hit" :style="{'left': 'calc(50vw - 0.56*70vh + 56vh)',
        'display': hit[2]}" :src="require('@/assets/hit.png')">
        <div v-if="started">
            <h2>SCORE: {{percent}}%</h2>
            <img class="background" :src="require('@/assets/background.jpg')">
        </div>
        <div class="toggle_ui" v-bind:style="{ opacity: playing }">
            <topBar/>
        </div>
        <img class="guitar__board" v-bind:style="{ left: `calc(5% + ${left_pos_board}` }"
        :src="require('@/assets/guitar_board.png')">
        <ul v-if="!hideUI" class="menu">
            <li @click="startGame">PLAY</li>
            <router-link class="router" to="/contact">CONTACT</router-link>                
        </ul>
        <div v-if="gameOver" class="result">
            <section>
                <ul>
                    <h1>RESULT</h1>
                    <li>SCORE: {{percent}}%.</li>
                    <li>MISSES: {{misses}}.</li>
                    <li>HITS: {{hits}}.</li>
                </ul>
                <div>
                    <button onclick="location.reload()">HOME</button>
                    <button @click="startGame">PLAY AGAIN</button>
                </div>
            </section>
        </div>
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
            hideUI: false,
            started: false,
            left_pos_board: '0',
            created: 0,
            queue: [],
            leader: 0,
            score: 0,
            misses: 0,
            percent: 100,
            hits: 0,
            hit: ['none', 'none', 'none'],
            gameOver: false
        }
    },
    methods: {
        startGame: async function() {
            this.resetData();
            this.hideUI = true
            guitar.createUi(this);
            generate(this , () => ({
                    leader: this.leader,
                }),
            );
            await delay(4300);
            const player = this.$refs.audio
            this.started = true;
            player.currentTime = 0
            player.play()
            await delay(121000);
            player.pause();
            player.currentTime = 0
            this.gameOver = true
            this.$forceUpdate()
        },
        resetData: function() {
            this.playing = '1'
            this.hideUI = false
            this.started = false
            this.left_pos_board = '0'
            this.created = 0
            this.queue = []     
            this.leader = 0
            this.score = 0
            this.misses = 0
            this.percent = 100
            this.hits = 0
            this.hit = ['none', 'none', 'none']
            this.gameOver = false
        },
        updatescore: function(param, index, miss) {
            if (index !== -1 && param > 0) {
                this.initHitAnimation(index);
                this.hits += 1;
            }
            this.score += param;
            if (miss) this.percent = Math.round((this.percent - 0.158)*100)/100;
            if (miss || param < 0) this.misses += 1
        },
        pickdestroyed: function() {
            this.queue.shift();
            this.leader += 1;
        },
        initHitAnimation : async function(index) {
            this.hit[index] = 'block';
            this.$forceUpdate()
            await delay(10);
            this.hit[index] = 'none'
            this.$forceUpdate()
        }
    }
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

.result {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .692);
    z-index: 999999999;
    section {
        height: 80vh;
        display: block;
        width: 80vh;
        border-radius: 12px;
        margin: 10vh calc(50vw - 40vh);
        filter: drop-shadow(8px 8px 10px rgba(201, 201, 201, .459));
        border: solid 1px white;
        background: rgba(19, 19, 19, .76);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        ul {
            text-align: left;
            padding: 105px;
            list-style-type: none;
            margin: 5px 0px;
            color: white;
        }
        button {
            height: 30px;
            border-radius: 4px;
            margin: 10px;
            margin-bottom: 95px;
            width: 180px;
            cursor: pointer;
            background: linear-gradient(180deg,rgb(235, 235, 235),#323232);;
            border: 1px solid #4d4d4d;
            opacity: .9;
            font-size: 20px;
            color: black;
            &:hover {
                box-shadow: 0 0 18px 1px rgba(80, 68, 54, .445);
                opacity: 1;
            }
        }
    }
}

.router {
    color: white;
    text-decoration: none;
    text-align: left;
    padding-left: 15px;
    display: inline-block;
    width: calc(100% - 15px);
    border-radius: 0 10px 0 0;
    background: rgba(255, 255, 255, .051);
    border: solid 1px white;
    list-style-type: none;
    &:hover {
        color: black;
        cursor: pointer;
        background: linear-gradient(to right, white, white, grey);
    }
}

h2 {
    color: white;
    position: fixed;
    top: 45vh;
    right: 5vw;
    width: 15vw;
    text-align: left;
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: auto;
    opacity: .1;
}

.hit {
    position: fixed;
    bottom: 22.27vh;
    z-index: 999;
    height: 7.5vh;
    width: auto;
    filter: blur(3px) hue-rotate(-150deg);
}


    
.home {
    padding: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(130deg,rgb(108, 70, 0), black, black);
    position: fixed;
    top: 0;
    left: 0;
    .menu {
        z-index: 999;
        margin-left: 5%;
        margin-top: 10vh;
        font-size: 22px;
        display: block;
        width: 30vw;
        color: rgb(222, 222, 222);
        position: fixed;
        li {
            text-align: left;
            padding-left: 15px;
            border-radius: 0 10px 0 0;
            background: rgba(255, 255, 255, .051);
            border: solid 1px white;
            list-style-type: none;
            margin: 5px 0px;
            &:hover {
                cursor: pointer;
                background: linear-gradient(to right, white, white, grey);
                color: black;
            }
        }
    }
    .guitar__board {
        height: 70vh;
        width: auto;
        position: absolute;
        right: 5%;
        bottom: 0;
    }
    .test {
        height: 70vh;
        width: calc(70vh * 1.123 / 4);
        background: rgba(211, 30, 30, .5);
        position: fixed;
        left: 25%;
        bottom: 22.25vh;        
    }
}
.tuto {
    color: white;
    background: linear-gradient(to left, rgb(48, 27, 37), rgb(103, 74, 78));
    padding: 10px;
    width: 30vw;
    margin-left: calc(5% + 40px);
    margin-top: 10%;
    line-height: 20px;
    border-radius: 12px;
    font-size: 20px;
}
</style>
