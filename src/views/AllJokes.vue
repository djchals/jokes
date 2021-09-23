<template>
	<div>
		<h1>All jokes:</h1>
		<template v-if="arrJokes.length>0">
			<ul>
				<li v-for="(actJoke, index) of arrJokes" :key="index">
					{{actJoke}}
				</li>
			</ul>
		</template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	// BEGIN: MANERA 1 computado con función
// 	computed: {
// 		arrJokes () {
// 			return this.$store.getters.getAllJokes
// 		}
// 	}
	// END: MANERA 1

	// BEGIN: MANERA 2 mapGetters(Objeto)
	computed: {
		...mapGetters({ arrJokes: 'getAllJokes' })
	}
	// END: MANERA 1
}
</script>
