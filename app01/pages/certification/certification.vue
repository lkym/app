<template>
	<view>
		<view class="certification-choose">
			<view v-for="(item,index) in chooseItem" :key="index" class="certification-choose-item">
				<view class="certification-choose-item-left">
					<text>{{item.name}}</text>
					<text>{{item.intro}}</text>
				</view>
				<view class="certification-choose-item-right">
					<text>{{item.info}}</text>
					<i class="iconfont icon-xiangyou"></i>
				</view>
			</view>
		</view>
		<view class="account-operation">
			<view class="change-account">
				<text>关联账户</text>
				<text>
					<i class="iconfont icon-xiangyou"></i>
				</text>
			</view>
			<view class="withdraw">
				<text>注销服务</text>
				<text>
					<text>账号注销后不能恢复</text>
					<i class="iconfont icon-xiangyou"></i>
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			uniCloud.callFunction({
				name:"getUserInfo",
				data:{_id:options.id},
				success: (res) => {
					this.chooseItem[2].info = res.result[0].phone.replace(/^(.{3})(.*)(.{4})$/,'$1****$3');
				}
			})
		},
		data() {
			return {
				chooseItem:[
					{name:"实名认证",intro:'完成实名认证，尊享更多服务',info:'完善认证',url:''},
					{name:"修改登录密码",intro:'定期修改登录密码，保护账户安全',info:'',url:''},
					{name:"修改手机号",intro:'若手机更换请尽快修改',info:'',url:''},
					{name:"关联邮箱设置",intro:'可用于账户登录/身份认证等',info:'去绑定',url:''},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.certification-choose{
	width: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.certification-choose-item{
		width: 100%;
		height: 70px;
		padding: 15px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 13px;
		color: #999999;
		.certification-choose-item-left{
			// width: 80%;
			display: flex;
			flex-direction: column;
			uni-text:first-child{
				font-size: 17px;
				color: #333;
			}
		}
		.certification-choose-item-right{
			// width: 20%;
		}
	}
}
.account-operation{
	width: 100%;
	height: 100px;
	background-color: white;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	padding: 5px 15px;
	box-sizing: border-box;
	.change-account,.withdraw{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #999999;
		font-size: 13px;
		
		> uni-text:first-child{
			font-size: 17px;
			color: #333;
		}
	}
	
}
</style>
