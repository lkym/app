<template>
	<view>
		<text>欢迎你</text>
	</view>
</template>

<script>
	export default {
		onShow() {
			const userInfo = uni.getStorage({
				key:"userInfo",
			})
			// this.userInfo = userInfo
			if(userInfo){
				userInfo.then(res=>{
					this.userInfo = res[1].data
					for(let key in this.userInfo){
						this.key = this.userInfo[key]
					}
				});
			}else{
				uni.navigateTo({
					url:"../submit/submit",
					complete() {
						uni.showToast({
							title:"请先登录!!"
						})
					}
				})
			}
			
		},
		data() {
			return {
				userInfo:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
