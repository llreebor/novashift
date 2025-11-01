import Cta from "@/components/cta"
import AutomateSection from "./sections/automate"
import BenefitsSection from "./sections/benefits"
import SupportSection from "./sections/support"

export default function AutomationPage() {
	return (
		<>
			<div className='h-[400px] w-full bg-neutral-900 text-white text-center text-2xl flex items-center justify-center'>
				HERO
			</div>
			<BenefitsSection />
			<AutomateSection />
			<SupportSection />
			<Cta
				title='Ready to Automate Your Workflows?'
				firstBtnText='Get Free Consultation'
			/>
		</>
	)
}
