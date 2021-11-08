<template>
	<view class="address-item">
		<view class="address-item-content" v-for="(item,index) in addressList" :key="item.id">
			<view class="content-info">
				<view class="user-info">
					<text>{{item.name}}</text>
					<text>{{item.phone}}</text>
				</view>
				<view class="user-address">
					<view class="default-address" v-if="item.default">
						<text>默认</text>
					</view>
					<view class="address-detail">
						{{item.area.join("")}}{{item.detailArea}}
					</view>
				</view>
			</view>
			<view class="content-edit">
				<text @tap="editAddress(item._id)">编辑</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"addressItem",
		props: ["addressList"],
		data() {
			return {
				
			};
		},
		mounted() {
			
			// console.log(getCurrentPages());
			
			
		},
		methods:{
			editAddress(_Id){
				uni.navigateTo({
					url:"../../pages/addAddress/addAddress?_Id="+_Id
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.address-item{
		width: 100%;
		// height: 70px;
		background-color: white;
		.address-item-content{
			width: 100%;
			height: 70px;
			padding: 10px;
			box-sizing: border-box;
			border-bottom: 1px solid #ededed;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.content-info{
				width: 90%;
				.user-info{
					font-weight: 600;
					color: #333;
					margin-bottom: 5px;
					uni-text:first-of-type{
						margin-right: 10px;
					}
				}
				.user-address{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 5px;
					.default-address{
						border: 1px solid #f93a18;
						font-size: 12px;
						color: #f93a18;
						padding: 0 5px;
						box-sizing: border-box;
						line-height: 15px;
						margin-right: 5px;
					}
					.address-detail{
						font-size: 14px;
						color: #6f6f6f;
					}
				}
			}
			.content-edit{
				width: 10%;
				height: 70px;
				color: #f2270c;
				font-size: 14px;
				line-height: 70px;
				text-align: center;
			}
		}
	}
</style>
