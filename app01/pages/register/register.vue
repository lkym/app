<template>
	<view style="width: 100%;height: 100%;background-color: #fff;">
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
		<commonHead :title="title" :goBack="goBack"></commonHead>
		<view style="padding: 25px;box-sizing: border-box;" v-show="showRegisterInput">
			<view class="tel-box">
				<view class="title-input">
					<text>+86</text> 
					<i class="area_icon"></i>
				</view>
				<input type="text" name="telphone" 
					   placeholder="请输入手机号" 
					   class="tel-input" 
					   v-model="registerPhone"
					   @focus="showCancel=true"
					   @blur="showCancel=false"
					   />
				<view class="cancel-input" v-show="showCancel" @tap="registerPhone=''">&times;</view>
			</view>
		</view>
		<view class="submit-btn" v-show="showRegisterInput">
			<button 
				type="default" 
				:disabled="!active" 
				form-type="submit" 
				:class="{'active':active}"
				@tap="toSendValidate"
				>
				<text>下一步</text>
			</button>
		</view>
		<view class="register-validate" v-show="showValidate">
			<view class="register-wait">
				<image src="../../static/wait.png" mode=""></image>
			</view>
			<text>我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话</text>
			<view class="validate-input">
				<input 
					type="text" 
					v-model="validate" 
					placeholder="请输入手机验证码" 
					@focus="showCancel=true"
					@blur="showCancel=false"
					/>
				<view class="cancel-input"><text v-show="showCancel" @tap="clearInput">&times;</text></view>
				<view class="getValidate"><text>获取验证码</text></view>
			</view>
			<view class="submit-btn">
				<button 
					type="default" 
					:disabled="validate==''" 
					form-type="submit" 
					:class="{'active':validate!=''}"
					@tap="toSetPwd"
					>
					<text>下一步</text>
				</button>
			</view>
		</view>
		<view class="register-validate" v-show="showPwd">
			<view class="register-wait">
				<image src="../../static/wait.png" mode=""></image>
			</view>
			<text>请设置登录密码</text>
			<view class="validate-input" >
				<input 
					:password="true"
					v-model="password" 
					placeholder="请设置8-20位登录密码" 
					@focus="showCancel=true"
					@blur="showCancel=false"
					style="width: 80%;"
					/>
					
				<view class="cancel-input"><text v-show="showCancel" @tap="password=''">&times;</text></view>
				<view class="getValidate" style="width:10%;background: none;display: flex;justify-content: center;align-items: center;">
					<image style="width: 25px;height: 25px;" src="../../static/open_eye.png" mode="" v-if="eyeStatus" @tap="eyeStatus=!eyeStatus"></image>
					<image style="width: 25px;height: 25px;" src="../../static/close_eye.png" mode="" v-else  @tap="eyeStatus=!eyeStatus"></image>
				</view>
			</view>
			<view style="font-size: 14px;color: #d0d0d0;">
				<text>密码由8-20位字母，数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母区分大小写</text>
			</view>
			<view class="submit-btn">
				<button 
					type="default" 
					:disabled="password==''" 
					form-type="submit" 
					:class="{'active':password!=''}"
					>
					<text>下一步</text>
				</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				title:'京东注册',
				registerPhone:'',
				showCancel:false,
				disabled:true,
				active:false,
				showRegisterInput:true,
				showValidate:false,
				showCancel:false,
				validate:'',    //  验证码
				showPwd:false,
				password:'',   //  密码
				eyeStatus:false
				
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
			},
			toSendValidate(){
				this.showRegisterInput = false
				this.showValidate = true
			},
			clearInput(){
				this.validate = ''
			},
			toSetPwd(){
				this.showValidate = false
				this.showPwd = true
			}
		},
		watch:{
			registerPhone(val){
				if(/^1[3|4|5|7|8|9]\d{9,9}$/.test(val)){
					this.active = true
				}else{
					this.active = false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
uni-page-body, uni-page-refresh{
	height: 100%;
}
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

.tel-box{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-bottom: 10px;
		border-bottom: 1px solid #dedede;
		margin-top: 20px;
		position: relative;
		.title-input{
			width: 20%;
			line-height: 25px;
			.area_icon{
				width: 15px;
				height: 15px;
				position: absolute;
				top: 10px;
				background-image: url(../../static/dropdown.png);
				background-repeat: no-repeat;
				background-size: 100% auto;
				display: inline-block;
				margin-left: 10px;
			}
		}
		.tel-input{
			width: 75%;
			height: auto;
		}
		.cancel-input{
			width: 5%;
			height: 25px;
			line-height: 25px;
			font-size: 25px;
			color: #C0C0C0;
		}
	
}
.submit-btn{
	width: 100%;
	height: 50px;
	margin-top: 30px;
	padding: 0 25px;
	box-sizing: border-box;
	button{
		width: 100%;
		height: 50px;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
	}
	button:first-child{
		background-color: #f87072;
		color: white;
		margin-bottom: 15px;
		letter-spacing: 5px;
	}
	/deep/.active{
		background-color: red !important;
	}
}
.register-validate{
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	font-size: 16px;
	.register-wait{
		width: 100%;
		// padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		uni-image{
			width: 88px;
			height: 71px;
		}
	}
	.validate-input{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #d0d0d0;
		margin-top: 20px;
		uni-input{
			width: 60%;
			font-size: 16px;
			line-height: 16px;
		}
		.cancel-input{
			width: 10%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 25px;
			color: #C0C0C0;
			uni-text{
				padding: 0;
			}
		}
		.getValidate{
			width: 30%;
			border-radius: 50px;
			background-color: rgba(226,35,30,0.2);
			line-height: 34px;
			text-align: center;
			color: red;
			
		}
		
	}
}
</style>
