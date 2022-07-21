import { axios, upload } from './axios.js'

// 获取用户信息
export function getUserInfo (params) {
	return axios({
		url: '/mobile/user/userinfo'
	})
}

// 获取用户信息
export function uploadImage (filePath) {
	return upload({
		url: '/mobile/wxa/upload',
		filePath
	})
}