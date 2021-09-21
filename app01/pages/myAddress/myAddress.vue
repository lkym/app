<template>
	<view>
		<commHead :title="title"></commHead>
		<view class="container">
			<addressItem :addressList="addressList"></addressItem>
		</view>
		<view class="add-address">
			<button class="add-btn" type="default">新增地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		onShow: () => {
			const phone = uni.getStorage({
				key:"userInfo"
			}).then((res)=>{
				if(res.length>1){
					uniCloud.callFunction({
						name: 'address',
						data: {"phone" : res[1].data.phone},
						success(res) {
							getCurrentPages()[0].addressList = res.result.data
							
						},
						fail() {
							console.log("地址获取错误!!");
						}
					})
				}
			})
			
			
		},
		data() {
			return {
				title:"收货地址",
				addressList: [],
			}
		},
		methods: {
			
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
