<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/jokes">Jokes</router-link>
	</div>
	<router-view/>
	</template>
<script>
import { mapActions } from 'vuex'
export default {
	methods: {
		...mapActions(['setCurrentJoke'])
	},
	mounted () {
		this.setCurrentJoke()
	}
}
</script>
