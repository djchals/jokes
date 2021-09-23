<template>
  <div>1234
	{{joke}}
	<button @click="addJoke">add joke</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
// Se podría hacer de estas diferentes maneras y funcionaría igual:

// BEGIN: MANERA 1 con dispatch() y getters()
// 	methods: {
// 		addJoke () {
// 			this.$store.dispatch('setCurrentJoke')
// 		}
// 	},
// 	computed: {
// 		joke () {
// 			return this.$store.getters.getCurrentJoke
// 		}
// 	},
// END: MANERA 1

// BEGIN: MANERA 2 con mapActions(Array) y mapGetters(Array) + 1 método y un 1 computado
// 	methods: {
// 		...mapActions(['setCurrentJoke']),
// 		addJoke () {
// 		console.log('si')
// 			this.setCurrentJoke()
// 		}
// 	},
// 	computed: {
// 		...mapGetters(['getCurrentJoke']),
// 		joke () {
// 			return this.getCurrentJoke
// 		}
// 	}
// END: MANERA 2

// BEGIN: MANERA 3 con mapActions(Objeto) y mapGetters(Objeto) SIMPLICIDAD TOTAL
	methods: {
		...mapActions({ addJoke: 'setCurrentJoke' })
	},
	computed: {
		...mapGetters({ joke: 'getCurrentJoke' })
	}
// END: MANERA 3
}
</script>
