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
								<text style="font-size: 18px;">11111</text>
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
						<view class="person-action-item">
							<text class="person-action-number">7</text>
							<text>商品收藏</text>
						</view>
						<view class="person-action-item">
							<text class="person-action-number">7</text>
							<text>店铺收藏</text>
						</view>
						<view class="person-action-item">
							<text class="person-action-number">7</text>
							<text>我的足迹</text>
						</view>
					</view>
					<view class="person-adv">
						<view class="adv-content">
							<view style="padding: 0 10px;box-sizing: border-box;"><text>PLUS</text></view>
							<view style="width: 1px;height: 8px;background-color: #ffc800;"></view>
							<view style="padding: 0 10px;box-sizing: border-box;"><text>免费试用 立领1张运费券</text></view>
						</view>
						<view class="adv-link"><text>0元试用></text></view>
					</view>
				</view>
				<view style="width: 100%;height: 10px;border-radius: 20px 20px 0 0;background-color: #FFFFFF;"></view>
			</view>
			<view class="info">
				<view class="goods-logistic">
					<view class="logistic">
						<image src="https://img12.360buyimg.com/img/s60x60_jfs/t1/125209/17/7530/933/5f16524bE43b4a5f7/71971b102d1fcbc5.png" mode=""></image>
						<text>待收款</text>
					</view>
					<view class="logistic">
						<image src="https://img12.360buyimg.com/img/s120x120_jfs/t1/123660/33/7797/4674/5f1804aeE308173db/b392f9ce63eb8490.png" mode=""></image>
						<text>待收货</text>
					</view>
					<view class="logistic">
						<image src="https://img12.360buyimg.com/img/s60x60_jfs/t1/120478/38/7592/2211/5f165256E02190e99/1491d4cb340074bb.png" mode=""></image>
						<text>退换/售后</text>
					</view>
					<view>
						<image style="width: 10px;height: 80px;" src="https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png" mode=""></image>
					</view>
					<view class="logistic">
						<image src="https://img12.360buyimg.com/img/s60x60_jfs/t1/145618/2/3439/692/5f16525eE30cd2db1/3ab434ec2686a256.png" mode=""></image>
						<text>全部订单</text>
					</view>
				</view>
				<view class="my-property">
					<view class="property-info">
						<text>1</text>
						<text>优惠券</text>
					</view>
					<view class="property-info">
						<text style="font-size: 12px;">开通有礼</text>
						<text>白条</text>
					</view>
					<view class="property-info">
						<text>1</text>
						<text>京豆</text>
					</view>
					<view class="property-info">
						<text>1</text>
						<text>红包</text>
					</view>
					<view>
						<image style="width: 10px;height: 80px;" src="https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png" mode=""></image>
					</view>
					<view class="property-info">
						<image src="https://img12.360buyimg.com/img/s60x62_jfs/t1/124603/26/7654/1293/5f16621fE5203989a/ac40297eb801ec8d.png" mode=""></image>
						<text>我的资产</text>
					</view>
				</view>
				<view class="tool-service">
					<view style="width: 100%;padding: 10px 20px;border-bottom: 1px solid #f2f2f2;">
						<text style="font-size: 14px;font-weight: 600;">工具与服务</text>
					</view>
					<view class="tool-service-logo">
						<view class="logo">
							<image src="../../static/tools1.png" mode=""></image>
							<text>客户服务</text>
						</view>
						<view class="logo">
							<image src="../../static/tools2.png" mode=""></image>
							<text>客户服务</text>
						</view>
						<view class="logo">
							<image src="../../static/tools3.png" mode=""></image>
							<text>客户服务</text>
						</view>
						<view class="logo">
							<image src="../../static/tools4.png" mode=""></image>
							<text>客户服务</text>
						</view>
						<view class="logo">
							<image src="../../static/tools5.png" mode=""></image>
							<text>客户服务</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="recommend">
				<view class="recommend-title">
					<view style="width: 30%;height: 1px;background: #999999;"></view>
					<view style="width: 4px;height: 4px;border-radius: 2px;background-color: #999999;"></view>
					<view style="margin: 0 20px;font-size: 12px;">为您推荐</view>
					<view style="width: 4px;height: 4px;border-radius: 2px;background-color: #999999;"></view>
					<view style="width: 30%;height: 1px;background: #999999;"></view>
				</view>
				<view class="recommend-content">
					<recommend></recommend>
					<recommend></recommend>
					<recommend></recommend>
					<recommend></recommend>
					<recommend></recommend>
					<recommend></recommend>
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
					const obj = {}
					for(let key in this.userInfo){
						obj[key] = this.userInfo[key]
					}
					// 从数据库中获取用户所有信息
					uniCloud.callFunction({
						name:"getUserInfo",
						data:obj,
						success: (res) => {
							console.log(res);
						}
					})
				});
			}else{
				uni.navigateTo({
					url:"../submit/submit",
					complete() {
						uni.showToast({
							title:"请先登录!!",
							complete: () => {
								uni.navigateTo({
									url:"../submit/submit"
								})
							}
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
		height: 190px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
		box-sizing: border-box;
		.person-info{
			width: 100%;
			height: 70px;
			padding: 0 20px;
			box-sizing: border-box;
			// margin-top: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 10px;
			.person-avator{
				width: 17%;
				/deep/uni-image{
					width: 90%;
					height: 55px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
				/deep/uni-image>div,/deep/uni-image>img{
					width: 100%;
					height: 100%;
				}
			}
			.person-setting{
				width: 83%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.person-setting-left{
					width: 90%;
					color: white;
					.person-sign{
						text{
							line-height: 12px;
							font-size: 12px;
							margin-right: 10px;
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
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			box-sizing: border-box;
			margin-bottom: 20px;
			.person-action-item{
				flex: 1;
				height: 50px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: white;
				font-size: 12px;
				.person-action-number{
						font-size: 16px;
						font-weight: 700;
						margin-bottom: 5px;
				}
			}
		}
		.person-adv{
			width: 95%;
			height: 40px;
			background-image: url(../../static/person_adv_bg.png);
			background-size: cover;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 10px;
			box-sizing: border-box;
			.adv-content{
				height: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #ffc800;
				font-size: 12px;
			}
			.adv-link{
				height: 20px;
				border-radius: 20px;
				padding: 0 10px;
				font-size: 12px;
				background-color: #ffc800;
				line-height: 20px;
			}
		}
	}
	
}
.info{
	width: 100%;
	height: auto;
	background-color: #f6f6f6;
	.goods-logistic{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 0 0 20px 20px;
		background-color: #ffffff;
		.logistic{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 12px;
			padding-bottom: 10px;
			box-sizing: border-box;
			uni-image{
				width: 30%;
				height: 30px;
			}
		}
	}
	.my-property{
		width: 100%;
		height: 90px;
		background-color: #FFFFFF;
		margin-top: 15px;
		border-radius: 20px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		uni-image{
			width: 30%;
			height: 30px;
		}
		.property-info{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			text:first-child{
				font-weight: 700;
				font-size: 20px;
				line-height: 20px;
				margin-bottom: 16px;
			}
			text:last-child{
				font-size: 12px;
			}
		}
	}
	.tool-service{
		width: 100%;
		// height: 150px;
		background-color: #FFFFFF;
		border-radius: 20px;
		margin-top: 15px;
		.tool-service-logo{
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			.logo{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 25%;
				height: 80px;
				font-size: 12px;
				uni-image{
					width: 30%;
					height: 30px;
					margin-bottom: 6px;
				}
			}
		}
	}
}
.recommend{
	width: 100%;
	background-color: #f6f6f6;
	.recommend-title{
		width: 100%;
		display: flex;
		margin-top: 20px;
		justify-content: center;
		align-items: center;
		color: #999999;
	}
	.recommend-content{
		width: 100%;
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		
	}
	
	
}
</style>
