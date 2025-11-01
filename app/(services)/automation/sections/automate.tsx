import { TypographyH3 } from "@/components/ui/typography"

export default function AutomateSection() {
	return (
		<section className='bg-blue-500 py-20 md:py-[100px]'>
			<div className='container'>
				<TypographyH3 className='leading-[1.4] font-normal tracking-[0.36px] md:tracking-[0.68px] text-white md:text-left'>
					<b>Automate operations</b> and eliminate busywork with AI-powered
					workflows tailored for scale and efficiency.
				</TypographyH3>
			</div>
		</section>
	)
}
