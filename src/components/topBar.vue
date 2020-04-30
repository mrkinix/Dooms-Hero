<template>
    <nav>
        <ul>
            <h2><router-link class="router1" to="/" >Doom's Hero</router-link></h2>
            <li>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

.router1 {
    color: white;
    text-decoration: none; 
}
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
            text-decoration: none;
            cursor: pointer;
            &:hover {
                color: white;
            }
        }
    }
}
</style>