<template>
	<view class="content">
		<top></top>
		<view class="">
			<swiper :indicator-dots="true" 
					:autoplay="true" 
					:interval="3000" 
					:duration="1000" 
					:circular="true"
					>
				<swiper-item v-for="(img,index) in swiperImg" :key="img">
					<!-- <view class="swiper-item"></view> -->
					<image style="border-radius: 10px;" :src="img" mode=""></image>
				</swiper-item>
			</swiper>
			</swiper>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" >
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
				<view class="main-two" v-for="(item) in 20" :key="item">
					<text>{{item}}</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'  ,
				swiperImg:[],
				lifeServices:[],
			}
		},
		onLoad() {
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
				// {operation:"全部",url:"../../static/all.png"},
			]
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
uni-page-body{
	background-image: url(../../static/nav_back.jpg);
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
	uni-swiper{
		height: 190px;
	}
	.swiper-item{
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

</style>
