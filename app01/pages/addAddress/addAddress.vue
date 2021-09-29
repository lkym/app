<template>
	<view class="container">
		<view class="input-content">
			<view class="title">收货人</view>
			<input class="uni-input" focus placeholder="姓名" />
		</view>
		<view class="input-content">
			<view class="title">联系方式</view>
			<input class="uni-input" focus placeholder="手机号码" />
		</view>
		<view class="input-content">
			<view class="title">所在地区</view>
			<view style="width: 75%;">
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
			<input class="uni-input" focus placeholder="姓名" />
		</view>
		<view class="input-content">
			<view class="title">地址标签</view>
			<input class="uni-input" focus placeholder="姓名" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			}
		},
		methods: {
			toChooseAddress(id,level){
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
						}else if(level == 2){
							_this.city = res.result.data
						}else if(level == 3){
							_this.district = res.result.data
						}
						
						_this.visible = true
					}
				})
				
			},
			getAddress(e){
				this.value = e.detail.value
				
				console.log(e);
				console.log(this.value);
				// 获取市级
				const provice_id = this.province[e.detail.value[0]].province_id;
				
				this.toChooseAddress(provice_id,2)
				
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
						this.visible = false
						this.province = []
						this.city = []
						this.district = []
					}
				}
				
				
			},
		
		}
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
				width: 85px;
				color: #999999;
				font-size: 14px;
			}
			.uni-input{
				
				font-size: 14px;
				color: #e7e7e7;
			}
		}
	}
	.picker-div{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.1);
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0;
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
