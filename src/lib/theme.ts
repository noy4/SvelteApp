import { writable } from 'svelte/store'

function createTheme() {
	const { subscribe, set } = writable('')

	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.setAttribute('data-theme', 'dark')
		set('dark')
	} else {
		document.documentElement.removeAttribute('data-theme')
		set('light')
	}

	function setDark() {
		document.documentElement.setAttribute('data-theme', 'dark')
		localStorage.theme = 'dark'
		set('dark')
	}
	function setLight() {
		document.documentElement.removeAttribute('data-theme')
		localStorage.theme = 'light'
		set('light')
	}

	return {
		subscribe,
		setDark,
		setLight,
	}
}

export const theme = createTheme()
