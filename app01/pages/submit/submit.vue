<template>
	<view>
		<view class="container">
			<view>
				<form @submit="formSubmit" @reset="formReset">
					<view class="tel-box" v-if="validateSubmit">
						<view class="title-input">
							<text>+86</text> 
							<i class="area_icon"></i>
						</view>
						<input type="text" name="telphone" 
							   placeholder="请输入手机号" 
							   v-model="submitPhone"
							   class="tel-input" 
							   @focus="showCancel=true"
							   @blur="showCancel=false"/>
						<view class="cancel-input" v-show="showCancel" @tap="submitPhone=''">
							&times;
						</view>
					</view>
					<view class="tel-box" v-if="validateSubmit">
						<input type="text" name="telphone"
							   placeholder="请输入收到的验证码" 
							   v-model="validate"
							   width="75"
							   style="width: 65%;"
							   class="tel-input" 
							   @focus="showCancelTwo=true"
							   @blur="showCancelTwo=false"/>
						<view  class="cancel-input"  
							   style="border-right: 1px solid #dedede;
									  display: flex;justify-content: center;
									  align-items: center;padding-right: 15px;
									  margin-right: 15px;box-sizing: border-box;">
							<view v-show="showCancelTwo" @tap="validate=''">&times;</view>
						</view>
						<view style="width: 30%;height: 25px;display: flex;justify-content: center;align-items: center;">
							<text style="font-size: 14px;">获取验证码</text> 
						</view>	
					</view>
					<view class="email-box" v-if="!validateSubmit">
						<input type="text" name="telphone"
							   placeholder="用户名/邮箱/手机号" 
							   v-model="name"
							   style="width: 95%;"
							   class="tel-input" 
							   @focus="showCancel=true"
							   @blur="showCancel=false"/>
						<view  class="cancel-input"  
							   style="display: flex;justify-content: center;
									  align-items: center;">
							<view v-show="showCancel" @tap="name=''">&times;</view>
						</view>
					</view>
					<view class="email-box" v-if="!validateSubmit">
						<input 
							   :type="pwdType"  
							   name="telphone"
							   placeholder="请输入密码" 
							   v-model="pwd"
							   style="width: 50%;"
							   class="tel-input" 
							   @focus="showCancelTwo=true"
							   @blur="showCancelTwo=false"/>
						<view  class="cancel-input"  
							   style="display: flex;justify-content: center;border-right: 1px solid #dedede;
									  align-items: center;padding-right: 15px;box-sizing: border-box;">
							<view style="width: 25px;height: 25px;" ><text v-show="showCancelTwo" @tap="pwd=''">&times;</text></view>
							<image src="../../static/open_eye.png" mode="" v-if="showPwd" @tap="lookPwd('password')"></image>
							<image src="../../static/close_eye.png" mode="" v-else  @tap="lookPwd('text')"></image>
							
						</view>
						<view style="width: 30%;height: 25px;text-align:center;display: flex;justify-content: center;align-items: center;">
							<text style="font-size: 14px;">忘记密码</text> 
						</view>
					</view>
					<view class="submit-btn">
						<button type="default" :disabled="true" form-type="submit" @tap="submit">
							<text>登录</text>
						</button>
						<button type="default" form-type="submit">
							<text>一键登录</text>
						</button>
					</view>
				</form>
				<view class="trans-submit-way">
					<view @tap="toggleWay" v-if="validateSubmit">账号密码登录</view>
					<view @tap="toggleWay" v-else>短信验证码登录</view>
					<view @tap="goRegister">手机快速注册</view>
				</view>
			</view>
			<view class="other-way">
				<view style="width: 100%;border-top: 1px solid #e5e5e5;">
					<h4><text>其他登录方式</text></h4>
				</view>
				<view class="other-way-choose">
					<view class="other-way-logo">
						<image src="../../static/qq.png" mode=""></image>
						<text>QQ</text>
					</view>
					<view class="other-way-logo">
						<image src="../../static/wechat.png" mode=""></image>
						<text>微信</text>
					</view>
					<view class="other-way-logo">
						<image src="../../static/apple.png" mode=""></image>
						<text>苹果</text>
					</view>
				</view>
			</view>
			<view class="protocol">
				<text>
					<text v-show="validateSubmit">未注册的手机号验证后将自动创建京东账号, </text>
					<text>登录即代表您已同意</text>
					<text><a href="#">京东隐私政策</a></text>
				</text>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showCancel:false,
				showCancelTwo:false,
				validateSubmit:true,
				showPwd:false,
				submitPhone:'',    //   登陆的输入的手机号
				validate:'',       //   验证码
				name:'',       //   用户输入的账号名，手机号，邮箱
				pwd:'',        //   用户输入的密码
				pwdType:'password',    //  密码输入框的形式
			}
		},
		methods: {
			formSubmit(){
				// console.log("登录");
			},
			formReset(){
				// console.log("重置");
			},
			// 点击眼睛，可以查看自己输入的密码
			lookPwd(type){
				this.showPwd = !this.showPwd
				this.pwdType = type
				
			},
			// 切换登陆方式
			toggleWay(){
				this.validateSubmit=!this.validateSubmit
			},
			// 点击登录，进行登录
			submit(){
				const db = uniCloud.database()
				const user = db.collection("user")
				user.where({
					phone:this.name
				})
			},
			goRegister(){
				uni.navigateTo({
					url:"../register/register",
					success() {
						
					},
					fail() {
						
					},
					complete(){
						
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body, uni-page-refresh{
		height: 100%;
		background-color: #fff;
	}
.container{
	width: 100%;
	height: auto;
	padding: 25px;
	box-sizing: border-box;
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
			font-size: 25px;
			color: #C0C0C0;
		}
	
	}
	.email-box{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-bottom: 10px;
		border-bottom: 1px solid #dedede;
		margin-top: 20px;
		uni-image{
			width:25px;
			height: 25px;
		}
		.cancel-input{
			width: 20%;
			line-height: 25px;
			height: 25px;
			font-size: 25px;
			color: #C0C0C0;
			/deep/uni-image>img{
				width: 25px;
				height: 25px;
			}
		}
		
	}
	.submit-btn{
		margin-top: 30px;
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
			background-color: red;
			color: white;
			margin-bottom: 15px;
			letter-spacing: 5px;
		}
		button:last-child{
			background-color: none;
			border: 1px solid red;
			color: red;
		}
	}
	.trans-submit-way{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
		font-size: 14px;
		color: #C0C0C0;
	}
	.other-way{
		width: 100%;
		padding-top: 88px;
		box-sizing: border-box;
		h4{
			color:#C0C0C0;
			width:150px;
			margin-top: -10px;
			font-size: 10px;
			background-color: white;
			margin: -10px auto;
			display: flex;
			justify-content: center;
			font-weight: 100;
		}
		.other-way-choose{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 55px;
			.other-way-logo{
				flex:1;
				display: flex;
				flex-direction: column;
				align-items: center;
				uni-image{
					width: 50px;
					height: 50px;
				}
				text{
					color: #C0C0C0;
					font-size: 12px;
					margin-top: 5px;
				}
			}
		}
	}
	.protocol{
		text-align: center;
		color: #C0C0C0;
		font-size: 13px;
		margin-top: 10px;
		letter-spacing: 1px;
	}
}
</style>
