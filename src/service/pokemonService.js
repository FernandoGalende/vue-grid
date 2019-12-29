import Vue from 'vue';

export default {
	get() {
		return Vue.axios.get('https://pokeapi.co/api/v2/pokemon/').catch((error) => {
			throw new Error(error);
		});
	},
	getImg(url) {
		return Vue.axios.get(url).catch((error) => {
			throw new Error(error);
		});
	}
};
