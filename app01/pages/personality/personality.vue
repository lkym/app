<template>
	<view>
		<view class="container">
			<commHead :title="title"></commHead>
			<view class="content">
				<view class="person-show">
					<view class="person-info">
						<view class="person-avator">
							<image src="../../static/avatorImg.png" mode=""></image>
						</view>
						<view class="person-setting">
							<view class="person-setting-left">
								<text>11111</text>
								<view class="person-sign">
									<text>京享值</text>
									<text>小白信用0.0 ></text>
								</view>
							</view>
							<view class="person-setting-right">
								<image src="../../static/setting.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="person-action">
					
					</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		onShow() {
			const userInfo = uni.getStorage({
				key:"userInfo"
			})
			// this.userInfo = userInfo
			if(userInfo){
				userInfo.then(res=>{
					this.userInfo = res[1].data
					for(let key in this.userInfo){
						this.key = this.userInfo[key]
					}
				});
			}else{
				uni.navigateTo({
					url:"../submit/submit",
					complete() {
						uni.showToast({
							title:"请先登录!!"
						})
					}
				})
			}
			
		},
		data() {
			return {
				userInfo:'',
				title:"我的京东"
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	background-image: url(../../static/person_bg.png);
	background-size: cover;
	.person-show{
		width: 100%;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.person-info{
			width: 100%;
			height: 70px;
			padding: 0 20px;
			box-sizing: border-box;
			// margin-top: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			.person-avator{
				width: 20%;
				/deep/uni-image{
					width: 100%;
					height: 70px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				/deep/uni-image>div,/deep/uni-image>img{
					width: 75%;
					height: 80%;
				}
			}
			.person-setting{
				width: 80%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.person-setting-left{
					width: 90%;
					color: white;
					.person-sign{
						text{
							font-size: 12px;
							margin-left: 10px;
							border-radius: 50px;
							padding: 1px 8px;
							box-sizing: border-box;
							background-color: rgba($color: #464646, $alpha: 0.3);
						}
					}
				}
				.person-setting-right{
					width: 10%;
					height: 70px;
					margin-top: 20px;
					uni-image{
						width: 100%;
						height: 30px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					/deep/uni-image>div, /deep/uni-image>img{
						width: 75%;
						height: 75%;
					}
				}
			}
		}
		.person-action{
			width: 100%;
			height: 100px;
		}
	}
	
}
</style>
