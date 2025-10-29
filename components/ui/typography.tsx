import type React from "react"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
	children: React.ReactNode
}
export function TypographyH1({
	children,
	className,
	...props
}: TypographyProps) {
	return (
		<h1
			className={cn(
				"text-neutral-black text-4xl leading-[1.2] font-bold tracking-[0.36px] lg:text-5xl lg:leading-[1.4] lg:tracking-[0.6px] xl:text-[60px]",
				className,
			)}
			{...props}
		>
			{children}
		</h1>
	)
}
export function TypographyH2({
	children,
	className,
	...props
}: TypographyProps) {
	return (
		<h2
			className={cn(
				"text-neutral-black text-4xl leading-[1.4] font-bold tracking-[0.36px] lg:text-5xl lg:tracking-[0.48px]",
				className,
			)}
			{...props}
		>
			{children}
		</h2>
	)
}
export function TypographyH3({
	children,
	className,
	...props
}: TypographyProps) {
	return (
		<h3
			className={cn(
				"text-neutral-black text-4xl leading-[1.2] font-bold tracking-[0.48px] lg:text-5xl",
				className,
			)}
			{...props}
		>
			{children}
		</h3>
	)
}
export function TypographyH4({
	children,
	className,
	...props
}: TypographyProps) {
	return (
		<h4
			className={cn(
				"text-neutral-black text-2xl font-bold tracking-[0.24px]",
				className,
			)}
			{...props}
		>
			{children}
		</h4>
	)
}
export function TypographyH5({
	children,
	className,
	...props
}: TypographyProps) {
	return (
		<h5
			className={cn(
				"text-neutral-black text-xl leading-[1.2] font-bold tracking-[0.36px] lg:text-2xl xl:text-[28px]",
				className,
			)}
			{...props}
		>
			{children}
		</h5>
	)
}
export function TypographyH6({
	children,
	className,
	...props
}: TypographyProps) {
	return (
		<h6
			className={cn(
				"text-neutral-black text-base leading-[1.6] font-bold tracking-[0.16px] md:text-2xl md:tracking-[0.24px]",
				className,
			)}
			{...props}
		>
			{children}
		</h6>
	)
}
