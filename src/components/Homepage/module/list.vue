<template>
	<div class="list">
		<van-tabs>
			<van-tab v-for="index in 8" :title="'标签 ' + index">
			  内容 {{ index }}
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		}
	}
</script>

<style>
	.list{
		margin: 10px;
		overflow: hidden;
	}
</style>