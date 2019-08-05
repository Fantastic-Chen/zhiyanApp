<template>
	<div class="navbar">
		<form action="/">
			<van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  clearable
			  @search="onSearch"
			  @clear="onCancel"
			/>
		</form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				value:'',
			}
		},
		methods:{
			onSearch:function () {
				console.log('已搜索')
			},
			onCancel:function () {
				console.log('已取消')
			}
		}
	}
</script>

<style scoped>
	
</style>