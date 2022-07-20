<template>
	<view class="test-scss">
		test
	</view>
</template>

<script>
	import { getUserInfo } from '@/api/request'
	export default {
		data() {
			return {
				
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
