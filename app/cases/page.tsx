import Cta from "@/components/cta"
import HeroSection from "./sections/hero"
import MarketingVideoSection from "./sections/marketing-video"
import PokerBrainSection from "./sections/poker-brain"

export default function CasesPage() {
	return (
		<>
			<HeroSection />
			<PokerBrainSection />
			<MarketingVideoSection />
			<Cta
				title='Prefer to skip the form and book time directly?'
				firstBtnText='Get Free Consultation'
			/>
		</>
	)
}
