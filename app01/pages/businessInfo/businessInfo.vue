<template>
	<view>
		<view class="head">
			<uni-nav-bar v-show="false">
			    <view>
					<view class="">商品</view>
					<view class="">评价</view>
					<view class="">详情</view>
					<view class="">推荐</view>
				</view>
			    <view slot="left">
					<i class="iconfont icon-xiangzuojiantou"></i>
				</view>
			    <view slot="right" style="display: flex;justify-content: center;align-items: center;">
					<view v-for="(item) in 3" style="width: 2px;height: 2px;border-radius: 2px;background-color: #000000;margin: 0 2px;"></view>
				</view>
			</uni-nav-bar>
			<view class="other-head">
				<view class="other-left">
					<view class="other-left-back">
						<i class="iconfont icon-xiangzuojiantou"></i>
					</view>
					
				</view>
				<!-- <view style="width: 90%;background-color: #007AFF;">
					11
				</view> -->
				<view class="other-right">
					<view class="other-right-menu">
						<view v-for="(item) in 3" style="width: 2px;height: 2px;border-radius: 2px;background-color: #ffffff;margin: 0 2px;"></view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="pic">
			<swiper class="swiper" :indicator-dots="true">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/business.jpg" mode="aspectFit"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">C</view>
				</swiper-item>
			</swiper>
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
.head{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
}
/deep/.uni-navbar__header-btns-left{
	padding-left: 15px;
	width: 5%;
}
/deep/.uni-navbar__header-container{
	uni-view{
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
}
/deep/.uni-navbar__header-btns{
	padding-right: 15px;
	width: 5%;
}
.other-head{
	width: 100%;
	height: 44px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	/deep/.other-left{
		width: 10%;
		height: 44px;
		// background-color: rgba($color: #000000, $alpha: 0.1);
		padding-left: 8px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		.other-left-back{
			width: 23px;
			height: 23px;
			border-radius: 50%;
			background-color: rgba($color: #000000, $alpha: 0.3);
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
		}
	}
	/deep/.other-right{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10%;
		height: 44px;
		// background-color: rgba($color: #000000, $alpha: 0.1);
		padding-right: 8px;
		box-sizing: border-box;
		.other-right-menu{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 23px;
			height: 23px;
			border-radius: 50%;
			background-color: rgba($color: #000000, $alpha: 0.3);
		}
	}
}
.pic{
	width: 100%;
	.swiper-item{
		width: 100%;
	}
	
}
</style>
