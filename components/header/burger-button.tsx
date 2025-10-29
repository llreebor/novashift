interface BurgerButtonProps {
	isOpen: boolean
	onClick: () => void
}

export default function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
	return (
		<button
			type='button'
			id='burger'
			className={`group relative z-20 ml-auto block h-4 w-6 md:hidden ${
				isOpen ? "active" : ""
			}`}
			aria-label='Toggle mobile menu'
			aria-expanded={isOpen}
			aria-controls='mobile-menu'
			onClick={onClick}
		>
			{/* Top line */}
			<span
				className={`absolute top-0 left-0 h-0.5 w-6 bg-neutral-900 transition-transform ${
					isOpen ? "translate-y-2 rotate-45 bg-white" : ""
				}`}
			/>
			{/* Middle line - hidden when open */}
			<span
				className={`absolute top-1/2 left-0 h-0.5 w-6 -translate-y-1/2 bg-neutral-900 transition-transform ${
					isOpen ? "opacity-0" : ""
				}`}
			/>
			{/* Bottom line */}
			<span
				className={`absolute bottom-0 left-0 h-0.5 w-6 bg-neutral-900 transition-transform ${
					isOpen ? "-translate-y-1.5 -rotate-45 bg-white" : ""
				}`}
			/>
		</button>
	)
}
