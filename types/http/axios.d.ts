import type { AxiosRequestConfig, CreateAxiosDefaults } from 'axios'

interface ICreateAxiosOptions extends CreateAxiosDefaults {}

interface IAxiosStrategy {
	if_handle_error_status: Boolean
	if_reduct_data_format: Boolean
}
