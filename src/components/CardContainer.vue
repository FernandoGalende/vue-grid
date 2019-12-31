<template>
    <div class="wrap" v-if="pokemons.length > 0 ">
        <card id="card"
            v-for="(pokemon, index) in pokemons"
            v-bind:pokemon="pokemon"
            v-bind:index="index"
            v-bind:key="pokemon.name" 
        />
    </div>
    <div class="loading" v-else>loading...</div>
</template>

<script>
    import { FETCH_POKEMONS } from "../store/actionTypes";
    import Card from "./Card"

    export default {
        name: "cardContainer",
        components:{Card},
        beforeMount() {
            this.$store.dispatch(FETCH_POKEMONS);
        },
        computed: {
            pokemons() {
                return this.$store.state.home.pokemons;
            }
        }
    };
</script>

<style lang="scss">
    @import "../theme/_partials.scss";

    .wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        
        @include mobile {
            grid-template-columns:repeat(1, 1fr);             
        }
        @include tablet {
            grid-template-columns: repeat(2, 1fr);             
        }
        @include desktop {
            grid-template-columns: repeat(4, 1fr);             
        }        
    } 
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35em;
    }
</style>
