<script>
	// import {uniBadge} from '@dcloudio/uni-ui'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
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
		background-color: #eaeaea;
	}
</style>
