import { TypographyH2 } from "@/components/ui/typography"
import type { CaseStudiesItem } from "@/types/case-studies.type"
import LargeCaseItem from "../_components/large-case-item"
import SmallCaseItem from "../_components/small-case-item"

const dataLargeCase: CaseStudiesItem = {
	id: "235623623626",
	title: "Poker Brain – AI-Powered Poker Training System",
	description:
		"An AI-driven poker coach designed from concept to roadmap, turning strategy insights into a build-ready product plan.",
	imageUrl: "/home/large-case.png",
}

const dataSmallCases: CaseStudiesItem[] = [
	{
		id: "2356231246",
		title: "AI Video Automation System",
		description:
			"A fully automated video production system that creates ready-to-publish marketing videos in hours using integrated AI tools.",
		imageUrl: "/home/small-case-1.png",
	},
	{
		id: "235346246",
		title: "Development Automation Platform",
		description:
			"An intelligent automation system that connects Asana and GitHub, enabling AI-driven code generation, task management, and end-to-end development workflows.",
		imageUrl: "/home/small-case-2.png",
	},
	{
		id: "7681246",
		title: "AI-Powered Social Media Platform",
		description:
			"A full-stack platform that transforms brand assets into AI-generated, scheduled social posts—automating content creation, design, and publishing across Instagram and Facebook.",
		imageUrl: "/home/small-case-3.png",
	},
]

export default function CasesSection() {
	return (
		<section className='py-20 md:py-[100px]'>
			<div className='container'>
				<div className='space-y-2.5 text-center'>
					<TypographyH2>Case Studies</TypographyH2>
					<p className='text-xl font-bold text-blue-500'>Success Stories</p>
				</div>

				<div className='mt-[60px] grid gap-6 md:grid-cols-2'>
					<LargeCaseItem data={dataLargeCase} />

					<div className='grid gap-4'>
						{dataSmallCases.map((item) => (
							<SmallCaseItem key={item.id} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
