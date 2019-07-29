<template>
	<div class="sort">
		<van-grid :column-num="2">
			<van-grid-item
				v-for="value in 4"
				:key="value"
				icon="photo-o"
				text="文字"
				square="true"
				center
			/>
		</van-grid>
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
	.sort{
		margin: 20px;
	}
</style>