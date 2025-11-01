import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import Header from "@/components/header/header"

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Novashift",
	description: "AI Automation That Transforms How Business Works",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='h-full'>
			<body className={`${manrope.variable} antialiased flex flex-col h-full`}>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
