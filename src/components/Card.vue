<template>
    <div class="card" :style="{backgroundColor: randomColor()}">
        <img v-if="pokemon.img" :src="pokemon.img" />
        <span v-else>loading...</span>
        <div class="card--name">{{pokemon.name}}</div>
    </div>
</template>

<script>
    export default {
        name: "card",
        props: ['pokemon'],
        methods: {
            randomColor() {
                const getColor = () => Math.floor(256 * Math.random());
                return `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
            }
        }
    };
</script>

<style lang="scss">
    @import "../theme/_partials.scss";
    
    .card {  
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 14em;
        @include mobile {
            height: 15em;
        }       
        .card-name {
            color: white;
            font-size: 10px;
            margin-top: 0.5em;        
        }
        img {
            width: 50px;
            height: auto;          
        }
    }
</style>
