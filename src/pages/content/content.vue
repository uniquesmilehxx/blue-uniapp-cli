<template>
	<view class="page" :style="{ paddingTop: PaddingTop + 'px'}">
		<navbar
			title="二级页面"
		>
		</navbar>
		<view class="page-content" :style="{ height:'calc(100vh - ' + PaddingTop + 'px)' }">
			<view v-for="item in 100" :key="item">{{ item }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 页面的padding-top值
				PaddingTop: this.PaddingTop,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
