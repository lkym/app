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
			<view style="color: #d8d8d8;" @tap="visible = true">
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
						<view class="item" v-for="(item,index) in country" :key="index">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in province" :key="index">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in city" :key="index">{{item}}</view>
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
				country:['请选择','中国', '港澳地区', '外国'],
				province:[],
				city:[],
				index: 0,
				value:[],
				chooseAddress: '',
				visible: false,
				clientX: 0,
				clientY: 0,
			}
		},
		methods: {
			getAddress(e){
				this.value = e.detail.value
				// console.log(e.detail.value);
				// if(addressArr.length){
				this.chooseAddress = ''
				this.value.forEach((item,index)=>{
					if(item != 0 && this.value.length == 3){
						this.chooseAddress = index == 0
											?
											this.chooseAddress + this.country[item]
											:(index == 1
											?
											this.chooseAddress + this.province[item]
											:(index == 2
											?
											this.chooseAddress + this.city[item]
											:
											this.chooseAddress + ''
											)
											)
											
					}
					
				})
				
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
