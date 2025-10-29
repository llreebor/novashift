"use client"
import Image from "next/image"
import { useState } from "react"
import { TypographyH2 } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

interface StatisticItem {
	title: string
	text: string
	imageURL: string
	imageClasses: string
}

const data: StatisticItem[] = [
	{
		title: "50+",
		text: "AI Projects Delivered",
		imageURL: "/home/stats-1.png",
		imageClasses: "  md:w-[350px] lg:w-[300px] lg:-right-20",
	},
	{
		title: "12",
		text: "Countries Served",
		imageURL: "/home/stats-2.png",
		imageClasses: "  md:w-[350px] lg:w-[300px] lg:-right-10 lg:-top-10",
	},
	{
		title: "11+",
		text: "industries served",
		imageURL: "/home/stats-3.png",
		imageClasses:
			"md:w-[350px] lg:w-[200px] lg:right-0 lg:top-[unset] lg:bottom-0",
	},
	{
		title: "100+",
		text: "Custom Integrations Built",
		imageURL: "/home/stats-4.png",
		imageClasses: "  md:w-[350px] lg:w-[290px] lg:-right-10",
	},
]

export default function StatisticSection() {
	const [active, setActive] = useState<number | null>(0)
	const [isPinned, setIsPinned] = useState(false)

	return (
		<section className='p-0'>
			<div className='w-full transition-all lg:flex lg:w-full'>
				{data.map((item, idx) => {
					const isActive = active === idx
					return (
						<button
							type='button'
							onMouseEnter={() => {
								if (active !== null && isPinned && active !== idx) return
								setActive(idx)
								setIsPinned(false)
							}}
							onClick={() => {
								if (isPinned && isActive) {
									setActive(null)
									setIsPinned(false)
								} else {
									setActive(idx)
									setIsPinned(true)
								}
							}}
							key={item.title}
							className={cn(
								"relative flex cursor-pointer flex-col justify-center overflow-hidden border-[0.5px] border-gray-200 px-8 py-4 transition-all duration-500 lg:h-[300px] lg:w-1/5",
								isActive ? "lg:w-2/5" : "h-[98px] lg:h-[300px]",
							)}
						>
							<Image
								src={item.imageURL}
								alt={item.title}
								className={cn(
									"absolute top-0 -right-[100px] -z-10 h-auto w-full origin-bottom-right scale-0 transition-all duration-500",
									item.imageClasses,
									isActive && "scale-100",
								)}
								width={370}
								height={370}
							/>

							<div className='lg:mt-auto'>
								<TypographyH2 className={isActive ? "mt-auto" : ""}>
									{item.title}
								</TypographyH2>
							</div>
							<p
								className={cn(
									"mt-2.5 hidden min-h-[72px] w-2/3 text-2xl text-neutral-800 capitalize lg:block lg:text-lg",
									isActive && "block",
								)}
							>
								{item.text}
							</p>

							<div className='absolute right-8 bottom-5 text-2xl font-bold lg:hidden'>
								{isActive ? "-" : "+"}
							</div>
						</button>
					)
				})}
			</div>
		</section>
	)
}
