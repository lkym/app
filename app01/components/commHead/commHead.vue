<template>
	<view>
		<view class="head">
			<view class="toBack" @tap="goBack">
				<i class="iconfont icon-xiangzuojiantou"></i>
			</view>
			<view class="head-title">
				<text>{{title}}</text>
			</view>
			<view class="head-menu">
				<view class="head-menu-point" v-for="(item) in 3" :key="item"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"commHead",
		props:['title','border'],
		data() {
			return {
				
			};
		},
		methods:{
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.head{
	width: 100%;
	height: 44px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
	.toBack{
		width: 10%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.head-title{
		width: 80%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.head-menu{
		width: 10%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
		.head-menu-point{
			width: 3px;
			height: 3px;
			border-radius: 50%;
			background-color: #2f2f2f;
			margin: 0 3px;
		}
	}
}
</style>
