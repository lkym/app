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
			<picker-view indicator-style="height:50px;line-height:50px;" :value="value" @change="getAddress" class="picker-view">
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
				country:['中国', '美国', '巴西', '日本'],
				province:['重庆', '成都', '北京', '西安'],
				city:['合川', '榆中', '渝北', '九龙坡'],
				index: 0,
				value:[]
			}
		},
		methods: {
			// getAddress(e){
			// 	this.index = e.target.value
			// }
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
	
</style>
