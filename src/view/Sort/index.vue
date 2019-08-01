<template>
	<div>
		<NavBar></NavBar>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import NavBar from '@/components/Public/NavBar'
	import Tabbar from '@/components/Public/Tabbar'
	export default {
		data () {
			return {

			}
		},
		components:{
			NavBar: NavBar,
			Tabbar: Tabbar
		}
	}
</script>

<style scoped>
	
</style>