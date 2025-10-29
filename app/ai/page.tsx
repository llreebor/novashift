"use client"
import { useState } from "react"

// Данные статей
const articlesData = [
	{
		id: 1,
		category: "Automation",
		title: "The Rise of Artificial Intelligence: Transforming the Future",
		description:
			"Artificial intelligence (AI) is no longer just a concept from science fiction—it's a rapidly evolving technology that's reshaping industries, redefining work, and revolutionizing the way we live. From voice assistants to self-driving cars, AI is everywhere, and its impact is only growing stronger.",
		image:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
		featured: true,
	},
	{
		id: 2,
		category: "Strategy",
		title: "The Future of AI in Business",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1655721529220-34d43c321b94?w=600&h=400&fit=crop",
		featured: false,
	},
	{
		id: 3,
		category: "Strategy",
		title: "Building Your First AI Strategy",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
		featured: false,
	},
	{
		id: 4,
		category: "Automation",
		title: "5 Ways AI Can Streamline Your",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&h=400&fit=crop",
		featured: false,
	},
	{
		id: 12,
		category: "Automation",
		title: "5 Ways AI Can Streamline Your",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&h=400&fit=crop",
		featured: true,
	},
	{
		id: 5,
		category: "NLP Solutions",
		title: "Understanding Natural Language Processing",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1676573409210-66c3b7e17c25?w=600&h=400&fit=crop",
		featured: false,
	},
	{
		id: 6,
		category: "Computer Vision",
		title: "Computer Vision Applications in 2025",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
		featured: false,
	},
	{
		id: 7,
		category: "AI Consulting",
		title: "How to Choose an AI Consultant",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
		featured: false,
	},
	{
		id: 8,
		category: "Machine Learning",
		title: "Machine Learning Basics for Beginners",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image:
			"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
		featured: false,
	},
]

const categories = [
	"All",
	"Strategy",
	"NLP Solutions",
	"Computer Vision",
	"AI Consulting",
	"Machine Learning",
	"Automation",
] as const

export default function AIBlogPage() {
	const [activeCategory, setActiveCategory] = useState("All")

	// Фильтрация статей
	const filteredArticles =
		activeCategory === "All"
			? articlesData
			: articlesData.filter((article) => article.category === activeCategory)

	// Большая featured статья
	const featuredArticle = filteredArticles.find((article) => article.featured)

	// Остальные статьи для сетки
	const gridArticles = filteredArticles.filter((article) => !article.featured)

	return (
		<div className='min-h-screen bg-gray-50'>
			<div className='mx-auto max-w-7xl px-4 py-12'>
				{/* Фильтры категорий */}
				<div className='mb-12 flex flex-wrap gap-3'>
					{categories.map((category) => (
						<button
							type='button'
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`rounded-full px-6 py-2.5 font-medium transition-all duration-300 ${
								activeCategory === category
									? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
									: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Большая featured статья */}
				{featuredArticle && (
					<div className='mb-16'>
						<div className='overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'>
							<div className='grid gap-0 md:grid-cols-2'>
								<div className='relative h-96 md:h-auto'>
									<img
										src={featuredArticle.image}
										alt={featuredArticle.title}
										className='absolute inset-0 h-full w-full object-cover'
									/>
								</div>
								<div className='flex flex-col justify-center p-8 md:p-12'>
									<div className='mb-4 text-sm font-semibold tracking-wider text-blue-500 uppercase'>
										{featuredArticle.category}
									</div>
									<h1 className='mb-4 text-3xl leading-tight font-bold text-gray-900 md:text-4xl'>
										{featuredArticle.title}
									</h1>
									<p className='mb-6 leading-relaxed text-gray-600'>
										{featuredArticle.description}
									</p>
									<button className='flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-3'>
										Read More
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Сообщение если нет статей */}
				{filteredArticles.length === 0 && (
					<div className='py-16 text-center'>
						<p className='text-lg text-gray-500'>
							No articles found in this category
						</p>
					</div>
				)}

				{/* Сетка статей */}
				{gridArticles.length > 0 && (
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{gridArticles.map((article) => (
							<div
								key={article.id}
								className='overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
							>
								<div className='relative h-64 overflow-hidden'>
									<img
										src={article.image}
										alt={article.title}
										className='h-full w-full object-cover transition-transform duration-500 hover:scale-110'
									/>
								</div>
								<div className='p-6'>
									<div className='mb-3 text-xs font-semibold tracking-wider text-blue-500 uppercase'>
										{article.category}
									</div>
									<h3 className='mb-3 text-xl leading-snug font-bold text-gray-900'>
										{article.title}
									</h3>
									<p className='mb-4 text-sm leading-relaxed text-gray-600'>
										{article.description}
									</p>
									<button className='flex items-center gap-2 text-sm font-semibold text-blue-500 transition-all hover:gap-3'>
										Read More
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
