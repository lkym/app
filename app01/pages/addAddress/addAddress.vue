<template>
	<view class="container">
		<view class="input-content">
			<view class="title">收货人</view>
			<input class="uni-input" focus placeholder="姓名" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.input-content{
			display: flex;
			padding: 10px 10px;
			border-bottom: 1px solid #e7e7e7;
			.title{
				width: 85px;
				color: #999999;
				font-size: 14px;
			}
			.uni-input{
				
				font-size: 14px;
				color: #e7e7e7;
			}
		}
	}
	
</style>
