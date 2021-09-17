<template>
	<view>
		<commHead :title="title"></commHead>
		<view class="container">
			<addressItem></addressItem>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"收货地址"
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100px;
	}
</style>
