<template>
	<div class="tabbar">
		<van-tabbar v-model="active"
					route
					fixed
					safe-area-inset-bottom>
			<van-tabbar-item
				icon="home-o"
				name='Homepage'
				to='/'>
				主页
			</van-tabbar-item>
			<van-tabbar-item
				icon="apps-o"
				name='Sort'
				to='/Sort'>
				分类
			</van-tabbar-item>
			<van-tabbar-item
				icon="comment-o"
				name='Message'
				to='/Message'>
				消息
			</van-tabbar-item>
			<van-tabbar-item
				icon="user-o"
				name='Personal'
				to='/Personal'>
				个人
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				active: 'Homepage',
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	
</style>