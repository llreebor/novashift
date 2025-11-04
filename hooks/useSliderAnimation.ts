import { useCallback, useEffect, useRef, useState } from "react"
import type { CaseAccordionItem } from "@/types/case-studies.type"

interface UseAccordionSliderProps {
	accordionData: CaseAccordionItem[]
	expandedItemId: string | null
	accordionRef: React.RefObject<HTMLDivElement | null>
}

export function useAccordionSlider({
	accordionData,
	expandedItemId,
	accordionRef,
}: UseAccordionSliderProps) {
	const [sliderHeight, setSliderHeight] = useState(0)
	const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
	const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

	const updateSliderHeight = useCallback(() => {
		if (!accordionRef.current || !expandedItemId) {
			setSliderHeight(0)
			return
		}

		const activeButton = buttonRefs.current[expandedItemId]

		if (activeButton) {
			const accordionRect = accordionRef.current.getBoundingClientRect()
			const buttonRect = activeButton.getBoundingClientRect()

			// Base height to the bottom of the active button
			let height = buttonRect.bottom - accordionRect.top

			// Subtract the height of content for items ABOVE the active one
			// that are currently collapsed
			accordionData.forEach((item) => {
				const itemButton = buttonRefs.current[item.id]
				const itemContent = contentRefs.current[item.id]

				if (itemButton && itemContent && item.id !== expandedItemId) {
					const itemButtonRect = itemButton.getBoundingClientRect()

					// If the item is above the active one
					if (itemButtonRect.top < buttonRect.top) {
						// Subtract its current content height
						const contentHeight = itemContent.scrollHeight
						height -= contentHeight
					}
				}
			})

			setSliderHeight(Math.max(0, height))
		}
	}, [accordionData, expandedItemId, accordionRef])

	useEffect(() => {
		// Update immediately
		updateSliderHeight()

		// And via requestAnimationFrame for accuracy
		requestAnimationFrame(updateSliderHeight)

		window.addEventListener("resize", updateSliderHeight)

		return () => {
			window.removeEventListener("resize", updateSliderHeight)
		}
	}, [updateSliderHeight])

	return { sliderHeight, buttonRefs, contentRefs }
}
