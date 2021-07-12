<template>
	<view>
		<view class="container">
			<view class="head">
				<view class="backPre">
					<i class="iconfont icon-xiangzuojiantou" @tap="goBack"></i>
				</view>
				<view class="top-input">
					<view class="search-logo"><i class="iconfont icon-sousuo"></i></view>
					<view class="search-input">
						<input type="text" v-model="searchMsg" placeholder="输入搜索内容" placeholder-style="font-size:12px" style="font-size: 12px;"/>
					</view>
					<view class="search-logo" style="border-radius: 0 30px 30px 0;"></view>
				</view>
				
				<view v-for="(item) in 3" :key="item"></view>
			
			</view>
			<view class="main">
				<view class="main-left">
					<view 
						:class="{'main-left-nav':true, 'active':choosed==index} " 
						v-for="(item,index) in classify" 
						:key="index"
						@click="showShopping(index)"
						>
						<text>{{item.classifyName}}</text>
					</view>
				</view>
				<view class="main-right">
					<shopping-show :classify="chooseItem"></shopping-show>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ShoppingShow from './shopping-show.vue'
	export default {
		data() {
			return {
				showMenu:false,
				menuItem:[
					{text:'首页',icon:'wap-home-o',value:'index'},
					{text:'购物车',icon:'cart-o',value:'shopping'},
				],
				// menuValue:'',
				searchMsg:'',
				classify:[
					{classifyName:"热门推荐"},
					{classifyName:"手机数码"},
					{classifyName:"电脑办公"},
					{classifyName:"家用电器"},
					{classifyName:"计生情趣"},
					{classifyName:"美妆护肤"},
					{classifyName:"汽车生活"},
					{classifyName:"京东超市"},
					{classifyName:"男装"},
					{classifyName:"男鞋"},
					{classifyName:"女装"},
					{classifyName:"女鞋"},
					{classifyName:"运动户外"},
					{classifyName:"内衣配饰"},
					{classifyName:"酒水饮料"},
					{classifyName:"家具家装"},
					{classifyName:"家居厨具"},
				],
				choosed:0,
				chooseItem:'',
			}
		},
		components:{
			ShoppingShow
		},
		mounted(){
			this.chooseItem=this.classify[0]
		},
		methods: {
			showShopping(classifyNum){
				this.choosed=classifyNum
				this.chooseItem=this.classify[classifyNum]
			},
			goBack(){
				uni.reLaunch({
					url:"/pages/index/index"
				})
			},
			onSelect(action){
				if(action.value == 'index'){
					uni.reLaunch({
						url:"/pages/index/index",
					})
				}else if(action.value == 'shopping'){
					uni.reLaunch({
						url:"/pages/shoppingCar/shoppingCar"
					})
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.container{
	.head{
		width: 100%;
		height: 44px;
		display: flex;
		justify-content: flex-start;
		position: fixed;
		z-index: 9999;
		top: 0;
		background-color: white;
		.backPre{
			width: 10%;
			height: 44px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.top-input{
			width: 80%;
			height: 44px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.search-logo{
				width: 10%;
				height: 30px;
				border-radius: 30px 0 0 30px;
				background-color: #f7f7f7;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				i{
					font-size: 18px;
					color: #9c9393;
				}
				// background-image: url(../../static/jd-sprites.png);
				// background-position: 240px 8px;
				// background-size: 100px;
			}
			.search-input{
				width: 80%;
				height: 30px;
				background-color: #f7f7f7;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding-left: 5px;
				box-sizing: border-box;
				font-size: 12px;
			}
		}
		.top-more{
			width: 10%;
			height: 44px;
			display: flex;
			justify-content: center;
			align-items: center;
			uni-view{
				width: 4px;
				height: 4px;
				border-radius: 2px;
				background-color: #595959;
				margin:0 3px
			}
		}
	}
	.main{
		height: 100%;
		display: flex;
		justify-content: flex-start;
		margin-top: 44px;
		.main-left{
			width: 20%;
			height: calc(100%-44px-50px);
			background-color: #f8f8f8;
			.main-left-nav{
				width: 100%;
				height: 46px;
				line-height: 46px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 14px;
			}
			.active{
				background-color: white;
			}
		}
		.main-right{
			width: 80%;
			// height: 100px;
			background-color: red;
		}
	}
}

</style>
