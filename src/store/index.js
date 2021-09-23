import { createStore } from 'vuex'

const url = 'https://icanhazdadjoke.com'
const headers = { Accept: 'application/json' }

export default createStore({
	state: {
		currentJoke: 'Waiting for the jokes...',
		arrJokes: []
	},
	mutations: {
		// payload receives the set state
		setCurrentJoke (state, payload) {
			state.currentJoke = payload
			state.arrJokes.push(payload)
		}
	},
	actions: {
		// siempre es asíncrono, aquí queremos mostrar la información obtenida
		async setCurrentJoke (state) {
			const joke = await fetch (url, { headers })
			const j = await joke.json ()
			state.commit('setCurrentJoke', j.joke)
		}
	},
	modules: {
	},
	// los getters cogen la información de cualquier parte y la muestran en todas partes en la app
	getters: {
		getCurrentJoke: state => state.currentJoke,
		getAllJokes: state => state.arrJokes
	}
})
