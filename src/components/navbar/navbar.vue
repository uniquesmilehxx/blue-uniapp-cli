<template>
	<u-navbar
		:title="title"
		:border="border"
		:bgColor="bgColor"
		:fixed="fixed"
		:leftIconColor="leftIconColor"
		:leftIconSize="leftIconSize"
		:autoBack="autoBack"
		@leftClick="leftClick"
	>
	</u-navbar>
</template>

<script>
	export default {
		props: {
			// 标题
			title: {
				type: String,
				default: () => ''
			},
			// 导航栏背景色
			bgColor: {
				type: String,
				default: () => 'transparent'
			},
			// 底部边框
			border: {
				type: Boolean,
				default: false
			},
			// fixed顶部
			fixed: {
				type: Boolean,
				default: true
			},
			// 点击左侧区域(返回图标)，是否自动返回上一页
			autoBack: {
				type: Boolean,
				default: true
			},
			// 左侧返回图标的颜色
			leftIconColor: {
				type: String,
				default: () => 'black'
			},
			// 左侧返回图标的大小（设置为0即隐藏，配合 autoBack = false 使用）
			leftIconSize: {
				type: Number,
				default: () => 20
			},
			// 点击左侧区域事件
			leftClick: {
				type: Function,
				default: () => {}
			}
		},
		data () {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>