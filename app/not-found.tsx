import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@/config/routes.config"

export default function NotFound() {
	return (
		<section>
			<div className='container'>
				<div className='mx-auto mt-20 flex flex-col items-center justify-center gap-8'>
					<Image
						src='/global/404.png'
						alt='page not found'
						width={534}
						height={251}
					/>

					<h5 className='text-center'>This page couldn’t be found</h5>
					<Link className='btn btn-md btn-primary px-5' href={ROUTES.HOME}>
						Go Back
					</Link>
				</div>
			</div>
		</section>
	)
}
