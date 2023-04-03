namespace tools {
	type func = (...args: any[]) => any

	interface NoReturn<T extends (...args: any[]) => any> {
		(...args: Parameters<T>): void
	}
}
