"use client"

import type React from "react"
import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useId,
	useState,
} from "react"
import { cn } from "@/lib/utils"

// ===============================
// Accordion Context
// ===============================
interface AccordionContextProps {
	openItems: Set<string>
	toggleItem: (id: string) => void
	multiple: boolean
	registerDefaultOpen: (id: string, open: boolean) => void
}

const AccordionContext = createContext<AccordionContextProps | null>(null)

interface AccordionProps {
	children: ReactNode
	multiple?: boolean
	className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
	children,
	multiple = false,
	className,
}) => {
	const [openItems, setOpenItems] = useState<Set<string>>(new Set())

	const toggleItem = (id: string) => {
		setOpenItems((prev) => {
			const newSet = new Set(prev)
			if (newSet.has(id)) {
				newSet.delete(id)
			} else {
				if (!multiple) newSet.clear()
				newSet.add(id)
			}
			return newSet
		})
	}

	const registerDefaultOpen = (id: string, open: boolean) => {
		setOpenItems((prev) => {
			const newSet = new Set(prev)
			if (open) {
				if (!multiple) newSet.clear()
				newSet.add(id)
			}
			return newSet
		})
	}

	return (
		<AccordionContext.Provider
			value={{ openItems, toggleItem, multiple, registerDefaultOpen }}
		>
			<div className={cn("grid gap-4", className)}>{children}</div>
		</AccordionContext.Provider>
	)
}

// ===============================
// Accordion Item Context
// ===============================
interface ItemContextProps {
	id: string
}

const AccordionItemContext = createContext<ItemContextProps | null>(null)

interface AccordionItemProps {
	children: ReactNode
	className?: string
	defaultOpen?: boolean
	id?: string
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
	children,
	className,
	id,
	defaultOpen = false,
}) => {
	const generatedId = useId()
	const contextId = id ?? generatedId
	const { openItems, registerDefaultOpen } = useAccordionContext()

	useEffect(() => {
		if (defaultOpen) registerDefaultOpen(contextId, true)
	})
	// [contextId, defaultOpen]
	const active = openItems.has(contextId)

	return (
		<AccordionItemContext.Provider value={{ id: contextId }}>
			<div className={cn("accordion-item", { active }, className)}>
				{children}
			</div>
		</AccordionItemContext.Provider>
	)
}

// ===============================
// Trigger
// ===============================
interface AccordionTriggerProps {
	children: ReactNode
	className?: string
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
	children,
	className,
}) => {
	const { id } = useAccordionItemContext()
	const { openItems, toggleItem } = useAccordionContext()
	const active = openItems.has(id)

	return (
		<button
			type='button'
			className={cn("accordion-trigger", className)}
			onClick={() => toggleItem(id)}
			aria-expanded={active}
			aria-controls={`${id}-content`}
		>
			<span className='accordion-trigger-text'>{children}</span>
			<div className='flex'>
				<svg
					className={cn("accordion-arrow-icon", {
						"rotate-180": active,
					})}
					viewBox='0 0 13 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<title>Accorion Arrow Icon</title>
					<path
						d='M6.50004 7.59904C6.36115 7.59904 6.22643 7.573 6.09587 7.52091C5.96532 7.46883 5.85698 7.39939 5.77087 7.31258L0.979207 2.52091C0.788235 2.32994 0.692749 2.08689 0.692749 1.79175C0.692749 1.49661 0.788235 1.25355 0.979207 1.06258C1.17018 0.871609 1.41324 0.776123 1.70837 0.776123C2.00351 0.776123 2.24657 0.871609 2.43754 1.06258L6.50004 5.12508L10.5625 1.06258C10.7535 0.871609 10.9966 0.776123 11.2917 0.776123C11.5868 0.776123 11.8299 0.871609 12.0209 1.06258C12.2118 1.25355 12.3073 1.49661 12.3073 1.79175C12.3073 2.08689 12.2118 2.32994 12.0209 2.52091L7.22921 7.31258C7.12504 7.41675 7.01219 7.49071 6.89067 7.53446C6.76914 7.57821 6.63893 7.59973 6.50004 7.59904Z'
						className='fill-current'
					/>
				</svg>
				<div className='accordion-plus-icon'>
					<span
						className={cn("accordion-plus-line-vertical", {
							"rotate-0": active,
						})}
					></span>
					<span className='accordion-plus-line-horizontal'></span>
				</div>
			</div>
		</button>
	)
}

// ===============================
// Content
// ===============================
interface AccordionContentProps {
	children: ReactNode
	className?: string
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
	children,
	className,
}) => {
	const { id } = useAccordionItemContext()
	const { openItems } = useAccordionContext()
	const active = openItems.has(id)

	return (
		<div
			id={`${id}-content`}
			className={cn(
				"grid grid-rows-[0fr] transition-all duration-500",
				{ "grid-rows-[1fr]": active },
				className,
			)}
			aria-hidden={!active}
		>
			<div className='overflow-hidden'>
				<div className='accordion-content-inner'>{children}</div>
			</div>
		</div>
	)
}
// ===============================
// Helpers
// ===============================
function useAccordionContext() {
	const ctx = useContext(AccordionContext)
	if (!ctx)
		throw new Error("Accordion components must be used inside <Accordion>")
	return ctx
}

function useAccordionItemContext() {
	const ctx = useContext(AccordionItemContext)
	if (!ctx)
		throw new Error(
			"AccordionTrigger/AccordionContent must be inside <AccordionItem>",
		)
	return ctx
}

// Example

/* 
		<Accordion multiple>
			<AccordionItem defaultOpen>
				<AccordionTrigger>Trigger 1</AccordionTrigger>
				<AccordionContent>
					Accordion Content 1
				</AccordionContent>
			</AccordionItem>

			<AccordionItem>
				<AccordionTrigger>Trigger 2</AccordionTrigger>
				<AccordionContent>Accordion Content 2</AccordionContent>
			</AccordionItem>
		</Accordion>
*/
