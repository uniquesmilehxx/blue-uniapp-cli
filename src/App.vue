<script>
	import System from '@/util/system'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 设备信息存入缓存
			uni.setStorageSync('systemInfo', System.systemInfo())
			uni.setStorageSync('uniPlatform', System.uniPlatform())
			uni.setStorageSync('isApple', System.isApple())
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
