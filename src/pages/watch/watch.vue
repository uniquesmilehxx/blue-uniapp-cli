<template>
	<view class="test-scss">
		<u--image :showLoading="true" :src="src" width="80px" height="80px"></u--image>
	</view>
</template>

<script>
	import { getUserInfo } from '@/api/request'
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg'
			}
		},
		methods: {
			
		},
		onShow() {
			// 执行测试请求
			getUserInfo()
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/util/css/variables.scss';
	
	// 使用scss变量的示例
	.test-scss {
		// 使用 uni.scss
		color: $uni-color-primary;
		// 使用自定义scss文件
		background-color: $yellow;
	}
	
</style>
