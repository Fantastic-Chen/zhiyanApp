<template>
	<div>
		<NavBar></NavBar>
		<SortSelect></SortSelect>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import NavBar from '@/components/Public/NavBar'
	import SortSelect from '@/view/Sort/module/SortSelect'
	import Tabbar from '@/components/Public/Tabbar'
	export default {
		data () {
			return {

			}
		},
		components:{
			NavBar: NavBar,
			SortSelect: SortSelect,
			Tabbar: Tabbar
		}
	}
</script>

<style scoped>
	
</style>