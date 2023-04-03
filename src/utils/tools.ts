/**
 * 防抖函数
 * 防抖：N秒后再执行该事件，若N秒内被重复触发，则重新计时
 * @param func 回调函数
 * @param wait 触发时间段
 * @param immediate 是否立即触发
 */
type Tdebounce<T extends tools.func> = tools.NoReturn<T>

function debounce<T extends tools.func>(func: T, wait: number, immediate: boolean = false): Tdebounce<T> {
	let timeout: NodeJS.Timeout | string | number | undefined
	return function (...params: any[]): void {
		let context: unknown = this
		if (timeout) {
			clearTimeout(timeout)
		}
		if (immediate) {
			let callNow = !timeout
			timeout = setTimeout(() => {
				timeout = undefined
			}, wait)

			if (callNow) {
				func.apply(context, params)
			}
		} else {
			timeout = setTimeout(() => {
				func.apply(context, params)
			}, wait)
		}
	}
}

export { debounce }
