<template>
	<div>
		<NavBar></NavBar>
		<carousel></carousel>
		<sort></sort>
		<list></list>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import NavBar from '@/components/Public/NavBar'
	import carousel from '@/components/Homepage/module/carousel'
	import sort from '@/components/Homepage/module/sort'
	import list from '@/components/Homepage/module/list'
	import Tabbar from '@/components/Public/Tabbar'
	export default {
		data () {
			return {

			}
		},
		components:{
			NavBar: NavBar,
			carousel: carousel,
			sort: sort,
			list: list,
			Tabbar: Tabbar
		}
	}
</script>

<style>
	
</style>