import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/lib/utils"

import ButtonIcon from "./button-icon"

const buttonVariants = cva("btn", {
	variants: {
		variant: {
			primary: "btn-primary",
			"primary-dark": "btn-primary-dark",
			secondary: "btn-secondary",
			outline: "btn-outline",
			"outline-lightblue": "btn-outline-lightblue",
			"outline-dark": "btn-outline-dark",
			ghost: "btn-ghost",
			danger: "btn-danger",
		},
		size: {
			sm: "btn-sm",
			md: "btn-md",
			lg: "btn-lg",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
})

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	withIcon?: boolean
	iconColor?: string
	children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, withIcon, iconColor, children, ...props },
		ref,
	) => {
		return (
			<button
				className={cn(
					buttonVariants({ variant, size, className }),
					withIcon && `with-icon`,
				)}
				ref={ref}
				{...props}
			>
				<div className='flex items-center'>
					{children}
					{withIcon && <ButtonIcon iconColor={iconColor} />}
				</div>
			</button>
		)
	},
)

Button.displayName = "Button"

export { Button, buttonVariants }
