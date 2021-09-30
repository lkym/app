<template>
	<view class="container">
		<view class="input-content">
			<view class="title">收货人</view>
			<input class="uni-input" placeholder="姓名" v-model="name" />
		</view>
		<view class="input-content">
			<view class="title">联系方式</view>
			<input class="uni-input" placeholder="手机号码" v-model="phone" />
		</view>
		<view class="input-content">
			<view class="title">所在地区</view>
			<view style="width: 75%;font-size: 14px;">
				{{chooseAddress}}
			</view>
			<view style="color: #d8d8d8;" @tap="toChooseAddress(1,1)">
				<i class="iconfont icon-xiangyou"></i>
			</view>
			<view v-if="visible" class="picker-div" @touchstart="touchstart" @touchend="touchend">
				<picker-view 
					indicator-style="height:50px;line-height:50px;" 
					:value="value" 
					@change="getAddress" 
					class="picker-view" 
					>
					<picker-view-column>
						<view class="item" v-for="(item,index) in province" :key="index">{{item.province_name}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in city" :key="index">{{item.city_name}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in district" :key="index">{{item.district_name}}</view>
					</picker-view-column>
				</picker-view>
			</view>
			
		</view>
		<view class="input-content">
			<view class="title">详细地址</view>
			<textarea v-model="detailAddress" @blur="getDetailAddress" placeholder-style="color:#dcdbdb" placeholder="详细地址需填写楼栋楼层或房间号信息"/>
		</view>
		<view class="input-content">
			<view class="title">地址标签</view>
			<view class="address-sign">
				<view 
					:class="{'active':item.checked}" 
					v-for="(item,index) in addressSignArr" 
					:key="index"
					@tap="changeSign(index)"
					>
					{{item.sign}}
				</view>
				<view class="">自定义<icon type="clear" size="14"></icon></view>
			</view>
			<!-- <input class="uni-input" focus placeholder="姓名" /> -->
		</view>
		<view class="set-default">
			<view class="title">
				<text>设置默认地址</text>
				<text>提醒: 每次下单会默认推荐该地址</text>
			</view>
			<view class="">
				<switch color="#f2270c" :checked="defaultStatus" @change="setDefaultAddress"/>
			</view>
			
		</view>
		<view class="input-content">
			<button class="ensure-btn" type="default" @tap="addAddress">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userId: '',
				name: '',
				phone: '',
				// country:['请选择','中国', '港澳地区', '外国'],
				province:[],
				city:[],
				district: [],
				index: 0,
				value:[],
				chooseAddress: '',
				visible: false,
				clientX: 0,
				clientY: 0,
				detailAddress: '',
				addressSignArr: [
					{"sign":"公司","checked":false},
					{"sign":"家","checked":false},
					{"sign":"学校","checked":false},
					],
				addressSign: '',
				defaultStatus: false
			}
		},
		onShow() {
			// console.log(getCurrentPages()[0]);
			const options = getCurrentPages()[0].options
			if(options.name&&options.phone&&options.area&&options.detailArea&&options.defaultStatus){
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
				this.userId = options.userId
				this.name = options.name
				this.phone = options.phone
				this.chooseAddress = options.area.replace(/,/g," ")
				this.detailAddress = options.detailArea
				this.defaultStatus = options.defaultStatus==1?true:false
				uni.hideLoading()
			}else{
				getCurrentPages()[0].userId = options.id
			}
			// console.log(getCurrentPages()[0]);
			
			
		},
		methods: {
			toChooseAddress(id,level){
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
				if(id == undefined){
					id = 1
				}
				if(level == undefined){
					level = 1
				}
				const _this = this
				uniCloud.callFunction({
					name: 'getAddress',
					data: {
							id,
							level,
						},
					success(res) {
						if(level == 1){
							_this.province = res.result.data
							if(_this.value.length){
								_this.toChooseAddress(_this.province[_this.value[0]]["province_id"],2)
							}else{
								_this.toChooseAddress(_this.province[0]["province_id"],2)
							}
							
						}else if(level == 2){
							_this.city = res.result.data
							if(_this.value.length){
								_this.toChooseAddress(_this.city[_this.value[1]]["city_id"],3)
							}else{
								_this.toChooseAddress(_this.city[0]["city_id"],3)
								_this.value = [0,0,0]
							}
							
						}else if(level == 3){
							_this.district = res.result.data
							uni.hideLoading()
						}
						
						_this.visible = true
					}
				})
				
			},
			getAddress(e){
				
				this.value = e.detail.value
				
				// console.log(e);
				console.log(this.value);
				// 获取市级
				const provice_id = this.province[e.detail.value[0]].province_id;
				
				this.toChooseAddress(provice_id,2)
				
				// const city_id = this.city[e.detail.value[1]].city_id;
				
				// this.toChooseAddress(city_id,2)
				
				// if(addressArr.length){
				// this.chooseAddress = ''
				// this.value.forEach((item,index)=>{
				// 	if(item != 0 && this.value.length == 3){
				// 		this.chooseAddress = index == 0
				// 							?
				// 							this.chooseAddress + this.country[item]
				// 							:(index == 1
				// 							?
				// 							this.chooseAddress + this.province[item]
				// 							:(index == 2
				// 							?
				// 							this.chooseAddress + this.city[item]
				// 							:
				// 							this.chooseAddress + ''
				// 							)
				// 							)
											
				// 	}
					
				// })
				
				// 	console.log(this.value);
				// }
			},
			touchstart(e){
				this.clientX = e.changedTouches[0].clientX
				this.clientY = e.changedTouches[0].clientY
				
			},
			touchend(e){
				let clientY;
				clientY = e.changedTouches[0].clientY
				if(this.clientY < 435){
					if(clientY - this.clientY > 50){
						this.chooseAddress = ''
						
						this.chooseAddress = this.chooseAddress + " " + this.province[this.value[0]]["province_name"]
						this.chooseAddress = this.chooseAddress + " " + this.city[this.value[1]]["city_name"]
						this.chooseAddress = this.chooseAddress + " " + this.district[this.value[2]]["district_name"]
							
						
						this.province = []
						this.city = []
						this.district = []
						this.visible = false
					}
				}
				
				
			},
			changeSign(index){
				this.addressSignArr.map((item,i)=>{
					item.checked = index == i?true:false
				})
				this.addressSign =	this.addressSignArr[index].sign
			},
			setDefaultAddress(e){
				this.defaultStatus = e.target.value
			},
			getDetailAddress(e){
				this.detailAddress = e.detail.value
			},
			addAddress(){
				const area = this.chooseAddress.split(" ")
				area.splice(0,1)
				const addressInfo = {
					name: this.name,
					phone: this.phone,
					area,
					detailArea: this.detailAddress,
					addressSign: this.addressSign,
					default: this.defaultStatus?1:0,
					userId: this.userId
				}
				
				uniCloud.callFunction({
					name: "saveAddress",
					data: addressInfo,
					success(res) {
						if(res.result){
							uni.navigateTo({
								url:"../myAddress/myAddress"
							})
						}else{
							uni.showToast({
								title: '请填写规范！！',
								duration: 2000
							})
						}
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.container{
		background: white;
		.input-content{
			display: flex;
			padding: 12px 10px;
			border-bottom: 1px solid #e7e7e7;
			.title{
				width: 75px;
				color: #999999;
				font-size: 14px;
			}
			.uni-input{
				
				font-size: 14px;
				color: #585858;
			}
			uni-textarea{
				height: 42px;
				overflow-y: auto;
				font-size: 14px;
			}
			.address-sign{
				font-size: 14px;
				color: #C0C0C0;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;
				uni-view{
					padding: 5px 15px;
					border-radius: 50px;
					border: 1px solid #C0C0C0;
					margin: 0 5px 5px 0;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				uni-icon{
					transform: rotate(45deg);
				}
				.active{
					border: 1px solid #6a77b6;
				}
			}
			.ensure-btn{
				width: 90%;
				height: 40px;
				color: white;
				line-height: 40px;
				font-size: 16px;
				border-radius: 40px;
				background: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
			}
		}
		.set-default{
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 12px 10px;
			.title{
				width: 80%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: flex-start;
				uni-text:first-of-type{
					font-size: 14px;
				}
				uni-text:last-of-type{
					font-size: 13px;
					color: #c8c8c8;
					margin-top: 5px;
				}
			}
		}
	}
	.picker-div{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.2);
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0;
		z-index: 1;
		.picker-view {
		        width: 100%;
		        height: 300px;
		        margin-top: 20px;
				position: fixed;
				bottom: 0;
		    }
		.item {
			height: 50px;
			line-height: 50px;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
	}
	
	
</style>
