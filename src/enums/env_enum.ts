export const EnvEnum = {
	baseUrl: import.meta.env.VITE_BASE_URL as unknown as string,
	apiBaseUrl: import.meta.env.VITE_API_BASE_URL as unknown as string,
	indexUrl: import.meta.env.VITE_INDEX_URL as unknown as string,
	proxyUrl: import.meta.env.VITE_PROXY_BASE_URL as unknown as string,
	socketUrl: import.meta.env.VITE_SOCKET_BASE_URL as unknown as string,
}
