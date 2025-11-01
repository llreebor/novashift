import Cta from "@/components/cta"
import OfferSection from "./sections/offer"
import PlanningSection from "./sections/planning"

export default function AiStrategyPage() {
	return (
		<>
			<div className='h-[400px] w-full bg-neutral-900 text-white text-center text-2xl flex items-center justify-center'>
				HERO
			</div>
			<OfferSection />
			<PlanningSection />
			<Cta
				title='Let’s turn your AI potential into practical outcomes'
				firstBtnText='Talk to an expert'
				secondBtnText='Start The Free Audit'
			/>
		</>
	)
}
