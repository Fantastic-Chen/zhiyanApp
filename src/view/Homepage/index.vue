<template>
	<div>
		<NavBar></NavBar>
		<carousel></carousel>
		<list></list>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import NavBar from '@/components/Public/NavBar'
	import carousel from '@/view/Homepage/module/carousel'
	import list from '@/view/Homepage/module/list'
	import Tabbar from '@/components/Public/Tabbar'
	export default {
		data () {
			return {

			}
		},
		components:{
			NavBar: NavBar,
			carousel: carousel,
			list: list,
			Tabbar: Tabbar
		}
	}
</script>

<style>
	
</style>