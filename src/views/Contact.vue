<template>
    <div class="contact">
            <form>
                <div>
                    <label for="email">EMAIL:</label>
                    <input id="email" type="email" v-model="email" required>
                </div>
                <div>
                    <label for="cc">cc:</label>
                    <input id="cc" type="text" v-model="cc" required>
                </div>
                <div>
                    <label for="content">Content:</label>
                    <textarea rows="10" id="content" v-model="content" required></textarea>
                </div>
                <button :class="[email && cc && content ? activeClass : '']" >Submit</button>
            </form>
        <topBar/>
    </div>
</template>

<script>
import topBar from '@/components/topBar'
export default {
    components: {
        topBar
    },
    data() {
        return {
            email: '',
            cc: '',
            content: '',
            activeClass: 'active',
        }
    }
}
</script>




<style lang="scss" scoped>


.contact {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(26, 26, 26);
}
    
form {
    position: fixed;
    height: auto;
    padding: 5vh 0;
    width: 80vh;
    top: 20vh;
    left: calc(50vw - 40vh);
    background: rgba(230, 230, 230, 0.849);
    border-radius: 12px;
    color: white;
    display: block;
    align-items: space-between;
    display: inline-flex;
    flex-direction:column;
    align-content: center;
    justify-content: center;
    label {
        text-transform: uppercase;
        font-size: 13px;
        color: black;
        letter-spacing: 0.03em;
        font-weight: bold;
        width: 100%;
        text-align: left;
        margin-left: 10%;
    }
    
    textarea {
        height: 40%;
    }
    input, textarea {
        color: rgb(225, 225, 225);
        resize: none;
        background: rgb(29, 29, 29);
        border: none;
        width: calc(80% - 30px);
        margin-left: 10%;
        border-radius: 4px;
        padding: 8px 15px;
        font-family: 'Work Sans', sans-serif;
        font-weight: 300;
    }
    div {
        margin: 20px 0;
        display: inline-flex;
        flex-direction:column;
        align-content: center;
        justify-content: center;
    }
}

button {
    border-radius: 4px;
    padding: 8px 15px;
    font-family: 'Work Sans', sans-serif;
    width: 30%;
    margin-left: 60%;
    color: white;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: rgb(29, 29, 29);
    cursor: pointer;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    transition: 0.25s all ease;
    &:hover {
        transform: translateY(2px);
    }
}

.active {
    background: rgb(89, 215, 188);;
}

</style>