import ArticleCard from "@/components/article-card"
import { Button } from "@/components/ui/button"
import { TypographyH2 } from "@/components/ui/typography"
import type { Article } from "@/types/article.type"

const data: Article[] = [
	{
		id: "34b57h453h",
		imageUrl: "/home/article-1.png",
		title: "The Future of AI in Business",
		desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
	},
	{
		id: "6464h36",
		imageUrl: "/home/article-2.png",
		title: "Building Your First AI Strategy",
		desription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
	},
	{
		id: "reshsg45",
		imageUrl: "/home/article-3.png",
		title: "5 Ways AI Can Streamline Your",
		desription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
	},
]

export default function LatestInsightsSection() {
	return (
		<section className='py-20 md:py-[100px]'>
			<div className='container'>
				<div className='flex items-center gap-5 flex-col md:flex-row md:gap-10 md:justify-between'>
					<div className='text-center space-y-6 md:text-left md:max-w-[484px] md:w-full'>
						<TypographyH2>Latest AI Insights</TypographyH2>
						<p className='text-xl font-medium tracking-[0.2px]'>
							Stay updated with the latest trends, strategies, and insights in
							artificial intelligence
						</p>
					</div>
					<Button withIcon>View All</Button>
				</div>

				<div className='grid gap-6 mt-[60px] md:grid-cols-2 lg:grid-cols-3'>
					{data.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))}
				</div>
			</div>
		</section>
	)
}
