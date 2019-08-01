<template>
	<div>
		<van-swipe
			@change="onChange"
			:autoplay="3000"
			:loop="true">
			<van-swipe-item
				v-for='(img,index) in images'
				:key="index">
				<van-image
					fit="fill"
					:src="img.imgUrl"
					width='100%'
				/>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				current: 0,
				images: [
					{
						imgUrl:'http://yshapi.100ysh.com/home/lunbo-1.jpg'
					},
					{
						imgUrl:'http://yshapi.100ysh.com/home/lunbo-2.jpg'
					},
					{
						imgUrl:'http://yshapi.100ysh.com/home/lunbo-3.jpg'
					},
					{
						imgUrl:'http://yshapi.100ysh.com/home/lunbo-4.jpg'
					},
				],
			}
		},
		methods: {
			onChange(index) {
				this.current = index;
			}
		}
	}
</script>

<style scoped>

</style>