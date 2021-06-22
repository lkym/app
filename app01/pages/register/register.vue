<template>
	<view>
		<!-- 弹出层----弹出协议 -->
		<uni-popup ref="popup" 
				   type="bottom" 
				   style="width: 100%;height: 100%;"
				   :animation="false"
				   :mask-click="false"
				   >
			<view class="protocol-text">
				<view class="protocol-text-head">协议以及政策</view>
				<view class="protocol-content">内容</view>
				<view class="protocol-add">更多</view>
				<view class="protocol-foot">
					<view class="sure" @tap="goBack">不同意</view>
					<view class="sure" @tap="closePopup">同意</view>
				</view>
			</view>
		</uni-popup>
		<commonHead></commonHead>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				
			}
		},
		mounted() {
			this.open()
		},
		methods: {
			open(){
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
			 },
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			closePopup(){
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
/deep/.uni-popup{
	width: 100%;
	height: 100%;
	uni-view{
		width: 100%;
		height: 100%;
		.uni-popup__wrapper{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.protocol-text{
		width: 350px;
		height: 380px;
		background-color: #fff;
		margin: 0 auto;
		border-radius: 10px;
		.protocol-text-head{
			width: 100%;
			height:50px;
			font-weight: 100;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.protocol-content{
			width: 100%;
			height:180px;
			font-size: 14px;
		}
		.protocol-add{
			width: 100%;
			height: 100px;
			border-radius: 10px 10px 0 0;
			// border: 1px solid red;
			box-shadow: 3px 0  3px #999491;
			font-size: 13px;
		}
		.protocol-foot{
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			.sure{
				width: 50%;
				height: 50px;
				line-height: 50px;
				text-align: center;
				font-size: 15px;
			}
			.sure:last-child{
				background-color: red;
				color: white;
			}
		}
	}
}

</style>
