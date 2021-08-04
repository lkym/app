<template>
	<view>
		<commHead :title="title"></commHead>
		<view class="user-info">
			<text>管理我的账户</text>
			<view class="user-card">
				<view class="user-card-info">
					<image src="../../static/avatorImg.png" mode=""></image>
					<view class="user-card-name">
						<text>1111</text>
						<text>222222222222222222222222222222222222222222222222222</text>
					</view>
				</view>
				<view class="user-card-sign">
					<text>当前登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'账户设置'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.user-info{
	width: 95%;
	height: 150px;
	background-color: white;
	font-size: 16px;
	padding: 10px 10px;
	color: #333;
	display: flex;
	flex-direction: column;
	
	.user-card{
		width: 100%;
		height: 90px;
		background-color: blue;
		margin-top: 15px;
		border: 1px solid red;
		background-color: #fff6f8;
		border-radius: 10px;
		display: flex;
		.user-card-info{
			width: 77%;
			height: 90px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 20px;
			uni-image{
				width: 40px;
				height: 40px;
			}
			.user-card-name{
				width: 80%;
				padding-left: 10px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				uni-text:last-child{
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		.user-card-sign{
			width: 20%;
			height: 20px;
			font-size: 12px;
			background-color: #ffd5d7;
			border-radius: 0 10px 0 10px;
			text-align: center;
			line-height: 20px;
			color: #ff272a;
		}
	}
	
}
</style>
