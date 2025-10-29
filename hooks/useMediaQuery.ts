"use client"
import { useEffect, useState } from "react"

function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)

		// Устанавливаем начальное значение
		setMatches(media.matches)

		// Используем современный addEventListener вместо устаревшего addListener
		const listener = (event: MediaQueryListEvent) => {
			setMatches(event.matches)
		}

		// Проверяем поддержку addEventListener (современные браузеры)
		if (media.addEventListener) {
			media.addEventListener("change", listener)
			return () => media.removeEventListener("change", listener)
		} else {
			// Fallback для старых браузеров
			media.addListener(listener)
			return () => media.removeListener(listener)
		}
	}, [query]) // Убираем matches из зависимостей, так как он вызывает лишние ререндеры

	return matches
}

export default useMediaQuery
