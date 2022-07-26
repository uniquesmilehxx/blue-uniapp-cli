<script>
	import Vue from 'vue'
	import System from '@/util/system'
	export default {
		onLaunch: function() {
			console.log('App Launch', uni.getSystemInfoSync().uniPlatform)
			this.setPagePaddingTop()
			this.calcTabbarHeight()
			// #ifdef MP
			console.log('------------------MP')
			// #endif
			// #ifdef MP-WEIXIN
			console.log('------------------MP-WEIXIN')
			// #endif
			// #ifdef MP-DINGTALK
			console.log('------------------MP-DINGTALK')
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			// 设置全局参数：页面内容的 padding-top 值（状态栏 + 自定义导航栏高度）
			setPagePaddingTop () {
				// 状态栏高度
				const statusBarHeight = System.statusBarHeight
				// uniPlatform
				const uniPlatform = System.uniPlatform
				// 初始化 uview 的导航栏高度
				let narBarHeight = 0
				// 根据uview给出的文档计算出导航栏的高度（可参照 https://www.uviewui.com/components/navbar.html）
				if (uniPlatform.includes('mp')) {
					// 小程序内，安卓48、ios44
					if (System.isApple) {
						narBarHeight = 44
					} else {
						narBarHeight = 48
					}
				} else {
					// 其余均为44
					narBarHeight = 44
				}
				// 放在prototype中，在vue实例中中可通过this指针访问（无法在模板中直接读取）
				Vue.prototype.PaddingTop = statusBarHeight + narBarHeight
				console.log('screenHeight', System.systemInfo.screenHeight, System.systemInfo.windowHeight)
			},
			// 计算一级页面底部tabbar的占位高度（原生tabbar，在小程序中不占位）(一级页面内容高度需要减去这部分)
			calcTabbarHeight () {
				// uniPlatform
				const uniPlatform = System.uniPlatform
				let height = 0
				if (uniPlatform.includes('web')) {
					height = 50
				}
				Vue.prototype.TabbarHeight = height
			},
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
