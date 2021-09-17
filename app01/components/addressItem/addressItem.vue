<template>
	<view class="address-item">
		<view class="address-item-content">
			<view class="content-info">
				<view class="user-info">
					<text>姓名</text>
					<text>电话</text>
				</view>
				<view class="user-address">
					<view class="">
						默认
					</view>
					住址
				</view>
			</view>
			<view class="content-edit">
				<text>编辑</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"addressItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.address-item{
		width: 100%;
		height: 70px;
		
		.address-item-content{
			width: 100%;
			height: 60px;
			padding: 10px;
			box-sizing: border-box;
			border-bottom: 1px solid #c8c8c8;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.content-info{
				width: 90%;
				.user-info{
					font-weight: 600;
					color: #333;
					uni-text:first-of-type{
						margin-right: 10px;
					}
				}
				.user-address{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					uni-view{
						border: 1px solid #f93a18;
						font-size: 12px;
						color: #f93a18;
						padding: 0 5px;
						box-sizing: border-box;
						line-height: 15px;
					}
				}
			}
			.content-edit{
				width: 10%;
				text-align: center;
			}
		}
	}
</style>
