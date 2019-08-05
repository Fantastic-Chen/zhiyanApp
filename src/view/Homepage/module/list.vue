<template>
	<div class="list">
		<van-tabs
			v-model="active"
			swipeable
			color='#1989FA'
			sticky>
			<van-tab title="热榜" name="Hot">
				<van-list
					finished-text="没有更多了">
					<van-cell
						v-for="(item,index) in list"
						:key="index"
						:title="item.title"/>
				</van-list>
			</van-tab>
			<van-tab title="推荐" name="Push">
				<van-list
					finished-text="没有更多了">
					<van-cell
						v-for="(item,index) in listOne"
						:key="index"
						:title="item.title">
					</van-cell>
				</van-list>
			</van-tab>
			<van-tab title="关注" name="Attention">
				<van-list
					finished-text="没有更多了">
					<van-cell
						v-for="(item,index) in listTwo"
						:key="index"
						:title="item.title"/>
				</van-list>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				list: [
					{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'1231'
					},{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'1231'
					}
				],
				listOne: [
					{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'12311231231',
						url:'/Sort'
					},{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'1231'
					},{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'1231'
					}
				],
				listTwo: [
					{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'1dasdasd231'
					},{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'1231'
					},{
						title:'123'
					},{
						title:'1234'
					},{
						title:'1235'
					},{
						title:'1236'
					},{
						title:'1237'
					},{
						title:'1238'
					},{
						title:'1239'
					},{
						title:'1230'
					},{
						title:'1231'
					}
				],
				active: 'Push'
			}
		},
		methods: {
			onLoad() {
				
			}
		}
	}
</script>

<style scoped>
	
</style>