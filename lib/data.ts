import type { BlogData } from "@/types/blog"

const baseUrl =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: "http://localhost:3000")

const DATA_URL = `${baseUrl}/get-blog.json`

export async function getBlogData(): Promise<BlogData> {
	const response = await fetch(DATA_URL, { cache: "force-cache" })
	if (!response.ok) {
		throw new Error(`Failed to fetch blog data: ${response.statusText}`)
	}
	return response.json()
}
