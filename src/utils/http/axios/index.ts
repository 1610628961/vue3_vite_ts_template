import type { ICreateAxiosOptions, IAxiosStrategy } from '#/http/axios'
import { ContentTypeEnum } from '@/enums/http_enum'
import { EnvEnum } from '@/enums/env_enum'

import VAxios from './axios_construction'

function createAxios(options: Partial<ICreateAxiosOptions>, configs: IAxiosStrategy) {
	return new VAxios(
		Object.assign(
			{},
			{
				baseURL: EnvEnum.baseUrl,
				headers: { 'Content-Type': ContentTypeEnum.JSON },
				withCredentials: true,
				timeout: 9000,
			},
			options,
		),
		configs,
	)
}

export const defHttp = createAxios(
	{},
	{
		if_handle_error_status: true,
		if_reduct_data_format: true,
	},
)
