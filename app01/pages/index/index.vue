<template>
	<view class="content">
		<top v-if="showTop"></top>
		<scroll-view scroll-y="true" style="margin-top: 44px;">
			<view style="background-image: url(../../static/bg.png);background-position: 0 -200px;;background-size: cover;background-repeat: no-repeat;">
				<swiper :indicator-dots="true" 
						:autoplay="true" 
						:interval="3000" 
						:duration="1000" 
						:circular="true"
						>
					<swiper-item v-for="(img,index) in swiperImg" :key="index">
						<!-- <view class="swiper-item"></view> -->
						<image style="border-radius: 10px;" :src="img" mode=""></image>
					</swiper-item>
				</swiper>
				</swiper>
			</view>
			<view class="main">
			<!-- <scroll-view scroll-y="true" > -->
			<view class="main-one">
				<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item" >
							<view class="life-service" v-for="(item,index) in lifeServices.slice(0,10)" :key="index">
								<image :src="item.url" mode=""></image>
								<text>{{item.operation}}</text>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item" >
							<view class="life-service" v-for="(item,index) in lifeServices.slice(10)" :key="index">
								<image :src="item.url" mode=""></image>
								<text>{{item.operation}}</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="main-two">
				<view style="display: flex;">
					<view style="flex: 1;margin: 10px;"><h3 style="text-align: right;">来电好货</h3></view>
					<view style="flex: 1;margin: 10px;"><h3>国潮风尚</h3></view>
				</view>
				<view style="display: flex;">
					<view class="call" v-for="(item,index) in callBusiness" :key="index">
						<text>{{item.intro}}</text>
						<image :src="item.url"></image>
					</view>
				</view>
			</view>
			<view class="main-three">
				<view class="seckill">
					<view class="seckill_left">
						<text>京东秒杀</text>
						<text style="margin-left: 10px;color: red;">{{hourGap-1}}</text>
						<image src="../../static/times.png" style="width: 20px;height: 20px;"></image>
						<view style="width: 15px;height: 20px;background-color: red;border-radius: 5px;"></view>
						<text>:</text>
						<view style="width: 15px;height: 20px;background-color: red;border-radius: 5px;"></view>
						<text>:</text>
						<view style="width: 15px;height: 20px;background-color: red;border-radius: 5px;"></view>
					</view>
					<view class="seckill_right">
						<text>更多秒杀</text>
						<image src="../../static/moer_seckill.png" mode=""></image>
					</view>
				</view>
				<view class="seckill-goods">
					<view class="seckill-goods-price" v-for="(item,index) in seckillGoods" :key="index" >
						<image :src="item.url" mode=""></image>
						<text style="color: red;">￥{{item.countPrice}}</text>
						<text style="text-decoration: line-through;color: grey;">￥{{item.originPrice}}</text>
					</view>
				</view>
			</view>
			<!-- </scroll-view> -->
			</view>
		</scroll-view>
		<view class="bussiness-pro">
			<business v-for="(item) in 4" :key="item"></business>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showTop: true,
				title: 'Hello',
				swiperImg:[],
				lifeServices:[],
				callBusiness:[],
				hourGap:0,
				minuteGap:0,
				secondGap:0,
				seckillGoods:[],
			}
		},
		
		onLoad() {
			// 轮播图图片
			this.swiperImg=[
				"../../static/nav1.jpg",
				"../../static/nav2.jpg",
				"../../static/nav3.jpg",
				"../../static/nav4.jpg",
				"../../static/nav5.jpg",
				"../../static/nav6.jpg",
				"../../static/nav7.jpg",
				"../../static/nav8.jpg",
			]
			// 生活服务所有图标
			this.lifeServices=[
				{operation:"京东超市",url:"../../static/supermarket.png"},
				{operation:"数码电器",url:"../../static/digit.png"},
				{operation:"京东服饰",url:"../../static/cloth.png"},
				{operation:"京东生鲜",url:"../../static/vegetables.png"},
				{operation:"京东到家",url:"../../static/tohome.png"},
				{operation:"充值缴费",url:"../../static/invest.png"},
				{operation:"9.9元拼",url:"../../static/ping.png"},
				{operation:"领劵",url:"../../static/coupon.png"},
				{operation:"领津贴",url:"../../static/bonus.png"},
				{operation:"PLUS会员",url:"../../static/vip.png"},
				{operation:"京东国际",url:"../../static/input.png"},
				{operation:"京东拍卖",url:"../../static/auction.png"},
				{operation:"唯品会",url:"../../static/wei.png"},
				{operation:"玩3C",url:"../../static/3c.png"},
				{operation:"沃尔玛",url:"../../static/wo.png"},
				{operation:"美妆馆",url:"../../static/makeup.png"},
				{operation:"京东旅行",url:"../../static/travel.png"},
				{operation:"拍拍二手",url:"../../static/secondhand.png"},
				{operation:"物流查询",url:"../../static/logistic.png"},
				{operation:"全部",url:"../../static/all.png"},
			]
			// 来电好货，国潮风尚
			this.callBusiness=[
				{intro:"正品直邮",url:"../../static/call1.jpg"},
				{intro:"3C大放价",url:"../../static/call2.jpg"},
				{intro:"国货正当时",url:"../../static/call3.jpg"},
				{intro:"都是你爱的",url:"../../static/call4.jpg"},
				
			],
			// 秒杀商品
			this.seckillGoods=[
				{countPrice:'19.8',originPrice:'50',url:'../../static/seckill1.jpg'},
				{countPrice:'6.18',originPrice:'19.9',url:'../../static/seckill2.jpg'},
				{countPrice:'6929',originPrice:'7999',url:'../../static/seckill3.jpg'},
				{countPrice:'3189',originPrice:'9999',url:'../../static/seckill4.jpg'},
				{countPrice:'138',originPrice:'188',url:'../../static/seckill5.jpg'},
				{countPrice:'1699',originPrice:'2799',url:'../../static/seckill6.jpg'},
			]
			this.hourGap=new Date().getHours()
			this.minuteGap=new Date().getMinutes()
			this.secondGap=new Date().getSeconds()
			console.log(this.hourGap,this.minuteGap,this.secondGap);
			
		},
		onShow() {
			this.showTop = false
			this.$nextTick(function(){
				this.showTop = true
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
uni-page-body{
	// background-image: url(../../static/nav_back.jpg);
}
uni-swiper-item{
	display: flex;
	justify-content: center;
	align-items: flex-start;
}	
uni-swiper{
	height: 180px;
	/deep/div.uni-swiper-dot{
		width: 6px !important;
		height: 6px !important;
		margin-right: 6px;
	}
	/deep/.uni-swiper-dot-active{
		background-color:red;
	}
}
uni-image{
	width: 92%;
	height: 90%;
	margin-top: 10px;
	img{
		border-radius: 5px;
	}
}
.main{
	background-color: #f6f6f6;
	border-radius: 10px 10px 0 0;
	padding: 10px;
	box-sizing: border-box;
	uni-swiper{
		height: 190px;
	}
	.main-one{
		.swiper-item{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			.life-service{
				width: 20%;
				height: 80px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: .6rem;
				color: #666666;
				uni-image{
					display: flex;
					justify-content: center;
				}
				/deep/uni-image>img,/deep/uni-image>div{
					width: 60% !important;
					height: 90% !important;
				}
			}
		}
	}
	.main-two{
		width: 100%;
		height: 150px;
		background-color: white;
		.call{
			width: 25%;
			height: 125px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 14px;
			/deep/uni-image>div{
				width: 70%;
				height: 68%;
			}
		}
	}
	.main-three{
		width: 100%;
		height: 150px;
		background-color: white;
		margin-top: 15px;
		border-radius: 10px;
		.seckill{
			width: 100%;
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			background-image: url(../../static/bg_small.png);
			background-size: cover;
			background-repeat: no-repeat;
			.seckill_left{
				width: 70%;
				height: 40px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-left: 10px;
				/deep/uni-image{
					margin-top: 0;
					margin-right: 10px;
				}
			}
			.seckill_right{
				width: 30%;
				height: 40px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				/deep/uni-image{
					width: 25%;
					height: 40%;
					margin-left: 5px;
				}
				/deep/span{
					color: red;
					font-size:12px;
				}
				/deep/uni-image>div, /deep/uni-image>img{
					width: 40%;
					height: 75%;
				}
			}	
		}
		.seckill-goods{
			width: 100%;
			height: 110px;
			display: flex;
			justify-content: space-around;
			.seckill-goods-price{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 12px;
				flex: 1;
			}
		}
	}
}
.bussiness-pro{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 10px;
	box-sizing: border-box;
	background-color: #f6f6f6;
}
</style>
