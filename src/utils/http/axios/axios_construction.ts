import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import type { ICreateAxiosOptions, IAxiosStrategy } from '#/http/axios'

import axios from 'axios'

//全局错误处理
function httpErrorStatusHandle(error: any): void {}

/**
 * axios单例实现
 *
 */
export default class VAxios {
	protected axiosInstance!: AxiosInstance
	protected readonly options!: ICreateAxiosOptions
	private configs!: IAxiosStrategy

	constructor(options: ICreateAxiosOptions, configs: IAxiosStrategy) {
		this.options = options
		this.configs = configs
		this.axiosInstance = axios.create(options)
		this.setupInterceptors()
	}

	private createAxios(options: ICreateAxiosOptions, configs: IAxiosStrategy): void {
		this.configs = configs
		this.axiosInstance = axios.create(options)
		this.setupInterceptors()
	}

	//获取axios实例
	getAxios(): AxiosInstance {
		return this.axiosInstance
	}

	/**
	 * 重写axios配置
	 * @param config
	 * @returns
	 */
	configAxios(options: ICreateAxiosOptions, configs: IAxiosStrategy): undefined {
		if (!this.axiosInstance) {
			return
		}

		this.createAxios(options, configs)
	}

	//设置拦截器
	setupInterceptors(): void {
		const { if_reduct_data_format, if_handle_error_status } = this.configs

		//请求拦截
		this.axiosInstance.interceptors.request.use(
			(requestConfig) => {
				return requestConfig
			},
			(error) => {
				Promise.reject(error)
			},
		)

		//响应拦截
		this.axiosInstance.interceptors.response.use(
			(response) => {
				return if_reduct_data_format ? response.data : response
			},
			(error) => {
				if_handle_error_status && httpErrorStatusHandle(error)
				return Promise.reject(error)
			},
		)
	}

	
}
