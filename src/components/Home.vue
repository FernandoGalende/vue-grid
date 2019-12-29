
  <template>
  <div>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <div>{{pokemon.name}}</div>
      <img :src="pokemon.img" />
    </div>
  </div>
</template>


<script>
import { FETCH_POKEMONS } from "../store/actionTypes";
export default {
  name: "home",
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

<style>
</style>
