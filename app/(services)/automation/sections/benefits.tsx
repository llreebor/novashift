import Image from "next/image"
import { TypographyH6 } from "@/components/ui/typography"

export default function BenefitsSection() {
	return (
		<section className='py-11 md:py-[100px]'>
			<div className='container'>
				<div className='grid md:grid-cols-2 gap-6'>
					<div className='rounded-2xl border border-neutral-500 bg-linear-(--home-service-card-gradient) p-6 lg:pb-11 pt-64 overflow-hidden relative lg:pt-6'>
						<div className='grid z-0'>
							<div className='size-[450px] absolute -top-28 right-[-153px] after:absolute after:bg-linear-(--automation-service-card-gradient) after:w-full after:h-full after:inset-0 after:z-0 lg:after:hidden lg:top-[50px] lg:right-[-243px] xl:right-[-153px]'>
								<Image
									className='w-full h-full -z-10'
									src={"/images/automation/benefit-1.png"}
									alt='strategy image'
									width={450}
									height={450}
								/>
							</div>

							<div className='md:max-w-[320px] z-0'>
								<div className='mt-4 md:mt-0'>
									<TypographyH6 className='text-2xl text-balance'>
										AI Automations That Remove Busywork
									</TypographyH6>

									<p className='mt-4'>
										We design AI-powered workflows that eliminate busywork and
										reduce manual error—boosting efficiency across every
										department. From lead routing to document processing, our
										automations keep your operations running smoothly, 24/7.
									</p>
									<p className='mt-4'>
										Today's low-code and no-code platforms offer unprecedented
										opportunities to transform operations—but only when
										implemented with strategic foresight.{" "}
										<br className='hidden md:block' /> Our automation architects
										leverage Zapier, Make.com, and n8n to create intelligent
										workflows that integrate seamlessly with leading AI models
										and your essential SaaS tools.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='rounded-2xl border border-neutral-500 bg-linear-(--home-service-card-gradient) p-6 lg:pb-11 pt-[334px] md:pt-64 overflow-hidden relative lg:pt-6'>
						<div className='grid z-0'>
							<div className='w-[477px] h-[509px] absolute -top-16 -right-40 after:absolute after:bg-linear-(--automation-service-card-gradient) after:w-full after:h-full after:inset-0 after:z-0 lg:after:hidden lg:right-[-290px] lg:top-0 xl:-right-48'>
								<Image
									className='w-full h-full -z-10'
									src={"/images/automation/benefit-2.png"}
									alt='strategy image'
									width={477}
									height={509}
								/>
							</div>

							<div className='md:max-w-[320px] z-0'>
								<div className='mt-4 md:mt-0'>
									<TypographyH6 className='text-2xl text-balance'>
										Seamless SaaS Stack Integrations
									</TypographyH6>

									<p className='mt-4'>
										We architect intelligent, future-ready integrations across
										your SaaS ecosystem—removing data silos, reducing manual
										effort, and enabling secure, reliable data exchange across
										systems. The outcome is a unified, high-performing tech
										stack that evolves with your business and delivers
										measurable, ongoing value.
									</p>
									<p className='mt-4'>
										Today's connected landscape demands seamless
										interoperability between apps, APIs, and platforms. Our
										engineers build integration frameworks using Zapier,
										Make.com, webhooks, and custom Python logic to ensure your
										tools communicate flawlessly—creating a scalable foundation
										for innovation and long-term growth.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
