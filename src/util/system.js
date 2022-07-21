const System = {
	// 获取系统信息，完整信息（可参照 https://uniapp.dcloud.net.cn/api/system/info.html#success-%E8%BF%94%E5%9B%9E%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E ）
	systemInfo () {
		return uni.getSystemInfoSync()
	},
	/** 
	 * 获取 PLATFORM
	 * 与条件编译时的 %PLATFORM% 一致，返回示例： mp-weixin
	**/
	uniPlatform () {
		return this.systemInfo().uniPlatform
	},
	// 是否是苹果设备
	isApple () {
		const osName = this.systemInfo().osName
		return (osName.includes('ios') || osName.includes('macos'))
	}
}

export default System