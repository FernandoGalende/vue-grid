<template>
    <div class="wrap">
        <card id="card"
                v-for="(pokemon, index) in pokemons"
                v-bind:pokemon="pokemon"
                v-bind:index="index"
                v-bind:key="pokemon.name" 
        />
    </div>
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
</style>
