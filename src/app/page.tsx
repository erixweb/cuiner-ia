import Link from "next/link";

export default function Home() {
	return (
		<>
			<header className="max-w-[1450px] w-full h-[100vh] flex flex-row items-center justify-center gap-[32px] p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<div className="absolute bg-blue-800 backdrop-blur-xl w-full h-[150px] blur-[300px] top-0 left-0 "></div>
				<div className="w-full m-0 text-start flex flex-col">
					<h1 className="text-7xl text-start font-bold">
						L&apos;IA per a{" "}
						<span className="bg-clip-text from-violet-600 to-violet-400 bg-gradient-to-r text-transparent">
							cuiners
						</span>
					</h1>
					<p className="text-start w-full py-5 max-w-xl text-gray-400">
						Cuina com un expert seguint els passos d&apos;una recepta generada
						per la intel·ligència artificial.
					</p>
					<Link
						href="/chat"
						className="bg-gradient-to-r from-blue-700 to-blue-500 w-fit py-3 px-6 rounded-full"
					>
						Consulta infinites receptes
					</Link>
                    
				</div>
				<div>
					<img
						src="/cuiner-ia.avif"
						className="border-2 border-blue-500 rounded-2xl shadow-md shadow-blue-700"
						alt="IA per a cuiners"
					/>
				</div>
			</header>
			<main>
				<h2></h2>
			</main>
		</>
	)
}
