import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Cuiner IA",
	description:
		"Cuiner IA és una intel·ligència artificial que et recomana receptes de cuina en funció dels ingredients que tinguis a la teva disposició.",
	creator: "Erik Moreno",
	keywords: [
		"cuina",
		"receptes",
		"intel·ligència artificial",
		"cuiner",
		"cuinera",
		"ia per generar receptes",
		"erik moreno"
	],
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/cuineria-icon.avif",
	} 
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="shortcut icon" href="cuineria-icon.avif" />
			</Head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
