<template>
	<div>
		<van-swipe
			@change="onChange"
			:autoplay="3000"
			:loop="true"
			class='carousel'>
			<van-swipe-item v-for='(img,index) in images' :key="index">
				<van-image
					fit="contain"
					:src="img.imgUrl"
				/>
			</van-swipe-item>
			<div class="custom-indicator" slot="indicator">
				{{ current + 1 }}/4
			</div>
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
	.custom-indicator{
		position: absolute;
		right: .5rem;
		bottom: .5rem;
		color: #fff;
	}
</style>