<template>
	<view class="page bg-light" :style="{ paddingTop: PaddingTop + 'px'}">
		<navbar
			title="首页"
			:leftIconSize="0"
			:autoBack="false"
		>
		</navbar>
		<view class="page-content" :style="{ height:'calc(100vh - ' + PaddingTop + 'px)' }">
			<button @click="handleJump">点击跳转二级页面</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 页面的padding-top值
				PaddingTop: this.PaddingTop
			}
		},
		onLoad() {
			
		},
		methods: {
			handleJump () {
				uni.navigateTo({
					url: '/pages/content/content'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
