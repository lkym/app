<template>
	<view>
		<commHead :title="title"></commHead>
		<view class="user-info">
			<text>管理我的账户</text>
			<view class="user-card">
				<view class="user-card-info">
					<image src="../../static/avatorImg.png" mode=""></image>
					<view class="user-card-name">
						<text>{{userId}}</text>
						<text>用户名：{{username}}</text>
					</view>
				</view>
				<view class="user-card-sign">
					<text>当前登录</text>
				</view>
			</view>
		</view>
		<view class="address-management">
			<view class="">
				<text>收货地址管理</text>
			</view>
			<view class="setting-detail">
				<text>管理我的地址 &gt;</text>
			</view>
		</view>
		<view class="account-setting">
			<view class="accout-security">
				<view class="">
					<text>账户与安全</text>
				</view>
				<view class="setting-detail">
					<text>密码/实名认证等管理 &gt;</text>
				</view>
			</view>
			<view class="accout-security" style="border: none;">
				<view class="">
					<text>京东支付密码</text>
				</view>
				<view class="setting-detail">
					<text>已设置 &gt;</text>
				</view>
			</view>
		</view>
		<view class="account-setting">
			<view class="accout-security">
				<view class="">
					<text>联系客服</text>
				</view>
				<view class="setting-detail">
					<text>及时解答用户疑难 &gt;</text>
				</view>
			</view>
			<view class="accout-security" style="border: none;">
				<view class="">
					<text>京东支付密码</text>
				</view>
				<view class="setting-detail">
					<text>&gt;</text>
				</view>
			</view>
		</view>
		<view class="setting-btn">
			<view class="setting-btn-item">
				<image src="../../static/feedback.png" mode=""></image>
				<text>意见反馈</text>
			</view>
			<view class="setting-btn-item">
				<image src="../../static/jdlogo.png" mode=""></image>
				<text>京东客户端</text>
			</view>
			<view class="setting-btn-item">
				<image src="../../static/exit.png" mode=""></image>
				<text @tap="exitSubmit">退出登录</text>
			</view>
		</view>
		<view class="finally-logo">
			<image src="../../static/jd.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'账户设置',
				userId:'',
				username:''
			}
		},
		onLoad(options){
			console.log(options);
			this.userId = options.userId
			this.username = options.username
			
		},
		methods: {
			exitSubmit(){
				uni.removeStorage({
					key: 'userInfo',
					success: () => {
							uni.switchTab({
								url:"../index/index"
							})
					}
				})
				// .then(()=>{
				// 	uni.switchTab({
				// 		url:"../index/index"
				// 	})
				// })
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.user-info{
	width: 95%;
	height: 150px;
	background-color: white;
	font-size: 16px;
	padding: 10px 10px;
	color: #333;
	display: flex;
	flex-direction: column;
	
	.user-card{
		width: 100%;
		height: 90px;
		background-color: blue;
		margin-top: 15px;
		border: 1px solid red;
		background-color: #fff6f8;
		border-radius: 10px;
		display: flex;
		.user-card-info{
			width: 77%;
			height: 90px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 20px;
			uni-image{
				width: 40px;
				height: 40px;
			}
			.user-card-name{
				width: 80%;
				padding-left: 10px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				font-size: 12px;
				uni-text:last-child{
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 12px;
					color: #999999;
					margin-top: 3px;
				}
			}
		}
		.user-card-sign{
			width: 20%;
			height: 20px;
			font-size: 12px;
			background-color: #ffd5d7;
			border-radius: 0 10px 0 10px;
			text-align: center;
			line-height: 20px;
			color: #ff272a;
		}
	}
	
}
.address-management{
	width: 100%;
	height: 44px;
	background-color: white;
	border-radius: 10px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	box-sizing: border-box;
	font-size: 16px;
	color: #333;
	
}
.setting-detail{
	font-size: 12px;
	color: #999999;
}
.account-setting{
	width: 100%;
	height: 88px;
	margin-top: 20px;
	background-color: white;
	border-radius: 10px;
	padding: 0 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.accout-security{
		width: 100%;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba($color: #999999, $alpha: 0.3);
		box-sizing: border-box;
		
	}
}
.setting-btn{
	width: 100%;
	height: 44px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 15px;
	.setting-btn-item{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color: #666666;
		uni-image{
			width: 21px;
			height: 18px;
			margin-right: 3px;
		}
	}
	
}
.finally-logo{
	display: flex;
	justify-content: center;
	margin-top: 20px;
	uni-image{
		width: 100px;
		height: 20px;
	}
}
</style>
