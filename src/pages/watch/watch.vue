<template>
	<view class="test-scss">
		<view class="">
			u-view上传组件测试
		</view>
		<u-upload
			:fileList="fileList"
			multiple
			name="1"
			@afterRead="afterRead"
		></u-upload>
	</view>
</template>

<script>
	import { getUserInfo, uploadImage } from '@/api/request'
	export default {
		data() {
			return {
				fileList: [],
			}
		},
		methods: {
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this.fileList.length
				lists.map((item) => {
					this.fileList.push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					console.log('result', result)
					let item = this.fileList[fileListLen]
					this.fileList.splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
				this.fileList.splice(0, 0)
			},
			// 上传接口
			uploadFilePromise(url) {
				uploadImage(url).then(res => {
					console.log('res', res)
				}).catch(err => {
					console.log('err', err)
				})
			},
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
