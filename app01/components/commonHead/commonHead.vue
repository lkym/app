<template>
	<view>
		<view class="head">
			<view class="back-icon">
				<i class="iconfont icon-xiangzuojiantou" @tap="toBack"></i>
			</view>
			<view class="register-title">
				<text>{{title}}</text>
			</view>
			<!-- <view class="back-icon">
				<i class="iconfont icon-xiangzuojiantou"></i>
			</view> -->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['title',"goBack"],
		methods: {
			toBack(){
				this.goBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
.head{
	width: 100%;
	height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	// padding: 20px;
	.back-icon{
		width: 5%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.register-title{
		width: 90%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

</style>
