<template>
  <view>
	 <view class="header">
		 <view class="head-menu">
		 	<image src="../../static/menu.png" mode=""></image>
		 </view>
		 <view class="head-search">
		 	<view class="head-search-logo"></view>
			<view class="head-search-input">
				<view style="width: 2px;height: 15px;border-left: 1px solid #C0C0C0;"></view>
				<view class="search-logo" v-if="showSearchLogo" >
					<icon type="search" size="15"></icon>
				</view>
				<input type="text" 
					   v-model="searchContent" 
					   placeholder-class="placeholder-css" 
					   @focus="showSearchLogo=false"
					   @blur="showSearchLogo=true"
					   />
			</view>
			<view class="head-search-end"></view>
		 </view>
		 <view class="submit-btn" @tap="goSubmit" v-if="showAvator">
		 	<text>登录</text>
		 </view>
		 <view class="submit-btn" @tap="goPersonality" v-if="!showAvator">
			<image src="../../static/avator.png" mode=""></image>
		 </view>
	 </view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			searchContent: '',
			showSearchLogo:true,
			showAvator:true
		}
	},
	mounted() {
		// console.log(111);
		uni.getStorage({
			key:"userInfo",
		}).then((res)=>{
			console.log(res);
			this.showAvator = res.length>=2?false:true
		})
		
		
	},
	methods: {
		goSubmit(e){
			// console.log(e);
			uni.navigateTo({
				url:"../../pages/submit/submit",
				success() {
					
				},
				fail() {
					
				},
				complete() {
					
				}
			})
		},
		goPersonality(){
			uni.switchTab({
				url:"../../pages/personality/personality"
			})
		}
	},
}
</script>

<style lang="scss" scoped>
.header{
	width: 100%;
	height: 44px;
	background-color: red;
	display: flex;
	justify-content: space-around;
	position: fixed;
	top: 0;
	z-index: 9999;
	.head-menu{
		width: 15%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			width: 40%;
			height: 50%;	
		}
	}
	.head-search{
		width: 60%;
		height: 44px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		
		.head-search-logo{
			width: 15%;
			height: 30px;
			background-color: white;
			background-image: url(../../static/jd-sprites.png);
			background-size: 237px;
			background-position: 8px 6px;
			border-radius: 30px 0 0 30px; 
			
		}
		.search-logo{
			width: 20px;
			height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-left: 5px;
		}
		.head-search-input{
			width: 70%;
			height: 30px;
			background-color: white;
			display: flex;
			align-items: center;
			input{
				padding-left: 10px;
				
				
			}
			/deep/.uni-input-input{
				height: 60%;
			}
			
		}
	    .head-search-end{
			width: 15%;
			height: 30px;
			background-color: white;
			border-radius: 0 30px 30px 0;
		}
	}
	.submit-btn{
		width: 20%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		uni-image{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			/deep/img,/deep/div{
				width: 40%;
				height: 70%;
			}
		}
	}
}
</style>