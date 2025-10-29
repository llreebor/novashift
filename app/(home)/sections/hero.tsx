import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typography"

export default function HeroSection() {
	return (
		<section className='relative z-0 pt-[229px] pb-[189px]'>
			<div className='container'>
				<div className='grid gap-8 md:grid-cols-2 md:items-center'>
					<div>
						<TypographyH1 className='text-center md:text-left'>
							AI Automation That Transforms How Business Works
						</TypographyH1>
						<p className='mt-4 text-center font-medium md:text-left md:text-xl'>
							Build Smarter. Move Faster.
						</p>

						<div className='mt-8 flex flex-col items-center justify-center gap-3 min-[374px]:flex-row md:justify-start'>
							<Button variant='outline'>Book a call</Button>
							<Button variant='primary' withIcon>
								AI Readiness Audit
							</Button>
						</div>
					</div>
					{/* <div className="flex items-center justify-center">
						<Image
							src="/home/hero-image.png"
							width={488}
							height={488}
							alt="hero image"
							className="h-auto w-full max-w-full lg:max-w-[540px]"
						/>
					</div> */}
				</div>
			</div>
		</section>
	)
}
