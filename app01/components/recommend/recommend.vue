<template>
	<view class="recommend-box">
		<image src="../../static/recommend.jpg" mode=""></image>
		<view class="recommend-title">
			<text>欧乐B电动牙刷头 成人精准清洁型4支装 EB20-4 适配成人2D/3D全部型号【不适用iO系列】博朗精工</text>
		</view>
		<view class="recommend-price">
			<text>￥100.0</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"recommend",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.recommend-box{
	width: 50%;
	height: auto;
	background-color: #FFFFFF;
	border-radius: 10px;
	padding: 15px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	uni-image{
		width: 100%;
		height: 180px;
	}
	.recommend-title{
		height: 30px;
		display: -webkit-box;    
		-webkit-box-orient: vertical;    
		-webkit-line-clamp: 2;    
		overflow: hidden;
		font-size: 12px;
	}
	.recommend-price{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 10px;
		color: red;
	}

}
</style>
