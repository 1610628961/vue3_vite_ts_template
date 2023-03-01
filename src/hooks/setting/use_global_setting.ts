import type { IGlobalConfig } from '#/config'
import { EnvEnum } from '@/enums/env_enum'

export function useGlobalSetting(): Readonly<IGlobalConfig> {
	const setting = {
		baseUrl: EnvEnum.baseUrl,
		apiBaseUrl: EnvEnum.apiBaseUrl,
		indexUrl: EnvEnum.indexUrl,
		proxyUrl: EnvEnum.proxyUrl,
		socketUrl: EnvEnum.socketUrl,
	}
	return setting as unknown as IGlobalConfig
}
