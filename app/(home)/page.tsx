import CasesSection from "./sections/cases"
import LatestInsightsSection from "./sections/insights"
import PartnersSection from "./sections/partners"
import ServicesSection from "./sections/services"
import StatisticSection from "./sections/stats"
import TransformSection from "./sections/transform"
import WhoWeAre from "./sections/who-we-are"

export default function Home() {
	return (
		<>
			{/* <HeroSection /> */}
			<div className='h-[400px] w-full bg-neutral-900'></div>
			<StatisticSection />
			<WhoWeAre />
			<ServicesSection />
			<TransformSection />
			<CasesSection />
			<PartnersSection />
			<LatestInsightsSection />
		</>
	)
}
