import { Suspense } from "react"
import Loader from "@/components/loader"
import PostsGrid from "./_components/posts-grid"
import HeroSection from "./sections/hero"

export default function AiPage() {
	return (
		<>
			<HeroSection />
			<Suspense fallback={<Loader />}>
				<PostsGrid />
			</Suspense>
		</>
	)
}
