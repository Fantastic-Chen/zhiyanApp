<template>
	<div>
		<van-tabbar v-model="active">
		  <!-- <van-tabbar-item info="3">
		    <span>自定义</span>
		    <img
		      slot="icon"
		      slot-scope="props"
		      :src="props.active ? icon.active : icon.normal"
		    >
		  </van-tabbar-item> -->
		  <van-tabbar-item icon="home-o">主页</van-tabbar-item>
		  <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
		  <van-tabbar-item icon="user-o">个人</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				active: 0,
				icon: {
				  normal: '//img.yzcdn.cn/icon-normal.png',
				  active: '//img.yzcdn.cn/icon-active.png'
				}
			}
		}
	}
</script>

<style>
	
</style>