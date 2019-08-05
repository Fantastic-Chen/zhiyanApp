<template>
	<div>
		<van-tree-select
			:items="items"
			:main-active-index="mainActiveIndex"
			:active-id="activeId"
			@click-nav="onClickNav"
			@click-item="onClickItem"
		/>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				items:[
					{
					  // 导航名称
					  text: '知识树',
					  // 该导航下所有的可选项
					  children: [
					    {
					      // 名称
					      text: '温州',
					      // id，作为匹配选中状态的标识
					      id: 1
					    },
					    {
					      text: '杭州',
					      id: 2
					    }
					  ]
					},
					{
					  // 导航名称
					  text: '大神小屋',
					  // 该导航下所有的可选项
					  children: [
					    {
					      // 名称
					      text: '温州',
					      // id，作为匹配选中状态的标识
					      id: 1
					    },
					    {
					      text: '杭州',
					      id: 2
					    }
					  ]
					},
					{
					  // 导航名称
					  text: '不正常科普',
					  // 该导航下所有的可选项
					  children: [
					    {
					      // 名称
					      text: '温州',
					      // id，作为匹配选中状态的标识
					      id: 1
					    },
					    {
					      text: '杭州',
					      id: 2
					    }
					  ]
					},
					{
					  // 导航名称
					  text: '疯子课程',
					  // 该导航下所有的可选项
					  children: [
					    {
					      // 名称
					      text: '温州',
					      // id，作为匹配选中状态的标识
					      id: 1,
					      // 禁用选项
					      disabled: true
					    },
					    {
					      text: '杭州',
					      id: 2
					    }
					  ]
					}
				],
				// 左侧高亮元素的index
				mainActiveIndex: 0,
				// 被选中元素的id
				activeId: 1
			}
		},
		methods:{
			onClickNav(index) {
				this.mainActiveIndex = index;
			},
			onClickItem(data) {
				this.activeId = data.id;
			}
		}
	}
</script>

<style scoped>
	
</style>