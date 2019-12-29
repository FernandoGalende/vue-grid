import PokemonService from '../../service/pokemonService';
import { FETCH_POKEMONS } from '../actionTypes';
import { SET_POKEMONS } from '../mutationTypes';

export const state = {
	pokemons: []
};

export const actions = {
	[FETCH_POKEMONS]({ commit }) {
		return PokemonService.get()
			.then(({ data }) => data.results)
			.then((results) => (
                Promise.all(
					results.map((pokemon) => PokemonService.getImg(pokemon.url))
				)).then((results) =>
					results.reduce( (acc, pokemon) => [
                        ...acc,
                        {
                            name: pokemon.data.name,
                            img: pokemon.data.sprites.front_default
                        }
					], [])
				)
			).then((pokemons) => {
				commit(SET_POKEMONS, pokemons);
			}).catch((error) => { throw new Error(error) });
	}
};

export const mutations = {
	[SET_POKEMONS](currentState, pokemons) {
		currentState.pokemons = pokemons;
	}
};

export default {
	state,
	actions,
	mutations
};
