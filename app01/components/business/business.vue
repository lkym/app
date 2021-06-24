<template>
	<view class="business" @tap="viewInfo">
		<uni-grid :column="1" :showBorder="false" >
		    <uni-grid-item>
		        <image src="../../static/business.jpg" mode=""></image>
				<view class="business-name">
					1111雅鹿（YALU）冰丝裤子男夏季薄款速干宽松束脚九分裤潮流百搭男士运动休闲长裤 977灰色+977灰色 M
				</view>
				<view class="business-price">
					<view style="font-size: 16px;color: red;font-weight: 500;">
						<text><text style="font-size: 13px;">￥</text>123</text>
					</view>
					<view class="same"><text>看相似</text></view>
				</view>
		    </uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			viewInfo(){
				uni.navigateTo({
					url:"../../pages/businessInfo/businessInfo"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.business{
	width: 46%;
	height: 290px;
	margin-top: 10px;
	margin: 0 7px;
	border-radius: 5px;
	// background-color: #f6f6f6;
	// border-radius: 10px;
	/deep/.uni-grid-item{
		width: 100% !important;
		height: 270px !important;
		background-color: white;
		border-radius: 5px;
		
	}
	uni-image{
		width: 100%;
		height: 180px;
		border-radius: 5px;
	}
	.business-name{
		height: 32px;
		overflow: hidden;
		text-overflow: ellipsis;
		// white-space: nowrap;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 13px;
		line-height: 14px;
		word-break: break-all;
		padding: 5px;
		box-sizing: border-box;
	}
	.business-price{
		width: 100%;
		height: 30px;
		line-height: 30px;
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 0 5px 5px;
		box-sizing: border-box;
		.same{
			width: 50px;
			height: 25px;
			background-color: #eeeeee;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 12px;
			color: #969696;
			border-radius: 50px 0 0 50px;
		}
	}
}
</style>
