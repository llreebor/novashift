import Cta from "@/components/cta"
import ServicesSection from "./sections/services"
import TeamSection from "./sections/team"

export default function TeamPage() {
	return (
		<>
			<div className='h-[400px] w-full bg-neutral-900 text-white text-center text-2xl flex items-center justify-center'>
				HERO
			</div>
			<TeamSection />
			<ServicesSection />
			<Cta
				title='Ready to Build Your Custom AI Solution?'
				firstBtnText='Start Your Project'
			/>
		</>
	)
}
