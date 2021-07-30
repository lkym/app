<template>
	<view style="background-color: #f7f7f7;">
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
					<view v-for="(item) in 3" :key="item" style="width: 2px;height: 2px;border-radius: 2px;background-color: #000000;margin: 0 2px;"></view>
				</view>
			</uni-nav-bar>
			<view class="other-head">
				<view class="other-left" @tap="goBack">
					<view class="other-left-back">
						<i class="iconfont icon-xiangzuojiantou"></i>
					</view>
					
				</view>
				<!-- <view style="width: 90%;background-color: #007AFF;">
					11
				</view> -->
				<view class="other-right">
					<view class="other-right-menu">
						<view v-for="(item) in 3" :key="item" style="width: 2px;height: 2px;border-radius: 2px;background-color: #ffffff;margin: 0 2px;"></view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="pic">
			<swiper class="swiper" :indicator-dots="true">
				<swiper-item v-for="(item) in businesses" :key="item.id">
					<view class="swiper-item">
						<image :src="item.img"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="pic-nav">
				<scroll-view scroll-y="false" scroll-x="true" >
					<view v-for="(item) in businessNav" :key="item.id">
						<image :src="item.img" @tap="changeBusiness(item)" :class="{'active':chooseNav == item.id}"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="business-info">
			<view style="width: 100%;display: flex;justify-content: space-between;align-items: center;">
				<view class="price">
					<text style="color: red;font-size: 16px;">￥</text> 
					<text style="color: red;font-size: 30px;">111</text></view>
				<view class="warn-collect">
					<view class="warn">
						<i class="iconfont icon-jiangjiatongzhi" style="font-weight: 600;font-size: 22px;"></i>
						<text>降价提醒</text>
					</view>
					<view class="warn">
						<i class="iconfont icon-shoucang" style="font-weight: 600;font-size: 22px;"></i>
						<text>降价提醒</text>
					</view>
				</view>
			</view>
			<view class="business-title">
				<text>JEEP吉普 冰丝薄款休闲裤男夏季超薄宽松直筒抗皱免烫微弹力运动卫裤子男透气 Jp1118灰色 夏季薄款 L（适合130斤~140斤）</text>
			</view>
			<view class="business-memo">
				<text>【6.25-27】：冬季清仓限时抄低价，领券满399减180元，低至219元！夏季新品已上线，超多重磅联名等你来撩~冬季清仓专区</text>
				<text style="color: red;">查看></text>
			</view>
		</view>
		<!-- <view class="business-spec">
			11
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				businessTitle:'',
				businessMemo:'',
				businessNav:[],
				businesses:[],
				chooseNav:1,
			}
		},
		onShow(){
			this.businessNav = [
				{
					"id":"1",
					"img":"../../static/business.jpg",
					"children":[
							{"id":"1","img":"../../static/business.jpg"},
							{"id":"2","img":"../../static/ku1_1.jpg"},
							{"id":"3","img":"../../static/ku1_2.jpg"},
							{"id":"4","img":"../../static/ku1_3.jpg"},
							{"id":"5","img":"../../static/ku1_4.jpg"},
							{"id":"6","img":"../../static/ku1_5.jpg"},
					],
				},
				{"id":"2","img":"../../static/ku.jpg","children":[]},
				{"id":"3","img":"../../static/ku2.jpg","children":[]},
			]
			this.businesses = this.businessNav[0].children
			
			
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			changeBusiness(item){
				this.chooseNav = item.id
				this.businesses = item.children
			}
		}
	}
</script>

<style lang="scss" scoped>
uni-page{
	background-color: #f7f7f7 !important;
}
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
	.swiper{
		height: 414px;
	}
	.swiper-item{
		width: 100%;
		uni-image{
			width: 100%;
			height: 414px;
		}
	}
	.pic-nav{
		width: 100%;
		height: 60px;
		background-color: #f7f7f7;
		uni-scroll-view{
			height: 60px;
			uni-image{
				width: 40px;
				height: 40px;
				margin: 0 10px;
			}
			.active{
				border: 1px solid red;
				box-sizing: border-box;
			}
			/deep/.uni-scroll-view-content{
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
.business-info{
	width: 100%;
	border-radius: 0 0 10px 10px;
	background-color: white;
	padding: 15px;
	box-sizing: border-box;
	.warn-collect{
		display: flex;
		.warn{
			width: 36px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 9px;
			margin: 0 5px;
			uni-text{
				text-align: center;
			}
		}
	}
	.business-title{
		font-weight: 700;
		line-height: 21px;
	}
	.business-memo{
		font-size: 12px;
		margin-top: 15px;
		color: #666;
	}
	
}
</style>
