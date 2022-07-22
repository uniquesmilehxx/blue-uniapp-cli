// 获取系统信息，完整信息（可参照 https://uniapp.dcloud.net.cn/api/system/info.html#success-%E8%BF%94%E5%9B%9E%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E ）
const info = uni.getSystemInfoSync()

const System = {
	// 系统信息
	systemInfo: info,
	
	// 获取 uniPlatform
	// （与条件编译处理多端的 %PLATFORM% 类似，但是 uniPlatform 是小写，返回示例： mp-weixin；）
	// （%PLATFORM% 取值参考：https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor）
	uniPlatform: info.uniPlatform,
	
	// 是否是苹果设备
	isApple: info.osName.includes('ios') || info.osName.includes('macos'),
	
	// 手机状态栏高度
	statusBarHeight: info.statusBarHeight
}

export default System