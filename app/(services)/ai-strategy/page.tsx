import Cta from "@/components/cta"
import HeroSection from "./sections/hero"
import OfferSection from "./sections/offer"
import PlanningSection from "./sections/planning"

export default function AiStrategyPage() {
	return (
		<>
			<HeroSection />
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
