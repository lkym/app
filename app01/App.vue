<script>
	// import {uniBadge} from '@dcloudio/uni-ui'
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			//检测网络状态
			uni.getNetworkType({
				success:  (res)=>{
					console.log(res);
				}
			});
			//监听网络状态变化
			uni.onNetworkStatusChange((res)=>{
				console.log(res);
			});
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		
		// components:{
		// 	uniBadge
		// }
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	
	// @import 'vant/lib/index.css';
	@import url("static/css/iconfont.css");
	// /deep/.van-popover{
	// 	left: 280px !important;
	// }
	// /deep/.van-popover .van-popover__arrow{
	// 	left: 90% !important;
	// }
	uni-page-wrapper{
		background-color: #f7f7f7;
	}
	
	// tabbar 样式覆盖
	// uni-tabbar {
	//         .uni-tabbar { // tab背景
	//             background-color: #07C160 !important;
	// 			border: 1px solid #07C160 !important;
	// 			border-top-left-radius: 10px;
	// 			border-top-right-radius: 10px;
				
	// 		}
	//     }
	
</style>
