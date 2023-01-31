import { defineStore } from 'pinia'

export const useUserStore = defineStore({
	id: 'user',
	state: () => {
		return {
			count: 0,
		}
	},

	actions: {
		increment() {
			this.count++
		},
	},
})
