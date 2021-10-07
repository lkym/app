<template>
	<view>
		<commHead :title="title"></commHead>
		<view class="container">
			<addressItem :addressList="addressList"></addressItem>
		</view>
		<view class="add-address">
			<button class="add-btn" type="default" @tap="addAddress">新增地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		onShow: () => {
			uni.showLoading({
				title: '加载中',
				mask: true,
			})
			
			getCurrentPages()[getCurrentPages().length-1].userId = getCurrentPages()[getCurrentPages().length-1].options.id
			uniCloud.callFunction({
				name: 'address',
				data: {"userId" : getCurrentPages()[getCurrentPages().length-1].options.id},
				success(res) {
					getCurrentPages()[getCurrentPages().length-1].addressList = res.result.data
					uni.hideLoading()
				},
				fail() {
					console.log("地址获取错误!!");
				}
			})
		
			
			
			
		},
		data() {
			return {
				title:"收货地址",
				addressList: [],
				userId: '',
			}
		},
		methods: {
			addAddress(){
				uni.navigateTo({
					url:"../addAddress/addAddress?userId=" + this.userId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		// height: 100px;
		background-color: #f3f3f3;
		
	}
	.add-address{
		width: 100%;
		height: 60px;
		line-height: 60px;
		background-color: white;
		padding-top: 10px;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		.add-btn{
			width: 90%;
			height: 40px;
			color: white;
			line-height: 40px;
			font-size: 16px;
			border-radius: 40px;
			background: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
		}
	}
</style>
