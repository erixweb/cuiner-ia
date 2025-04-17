"use client"

import { askAI } from "@/app/hooks/useAI"
import { useState } from "react"
import LoadingSpinner from "./components/loading-spinner"
import GenerateIcon from "./components/generate-icon"

export default function Home() {
	const [ingredients, setIngredients] = useState("")
	const [recipes, setRecipes] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setError(null)
		setRecipes([])
		setIngredients("")

		if (ingredients.length < 2) {
			setError("No has introduit cap ingredient")

			return
		}
		setIsLoading(true)
		const request = await askAI({ ingredients })

		if (request) {
      new Promise((resolve) => setTimeout(resolve, 500))
			setIsLoading(false)
			setRecipes(request)
		}
	}
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-[720px]">
				<h1 className="text-5xl font-bold text-center w-full">CUINER IA</h1>

				<form
					onSubmit={handleSubmit}
					className="w-full flex gap-[20px] max-w-[500px] m-auto"
				>
					<input
						type="text"
						placeholder="Els teus ingredients (ous, pollastre, patata...)"
						onChange={(e) => setIngredients(e.target.value)}
						value={ingredients}
						className="w-full p-3 outline-0 border-2 border-white rounded-md"
					/>
					{isLoading ? (
						<button className="flex gap-[10px] w-[200px] text-gray-400 m-auto text-center bg-gray-900 p-3 rounded-md" disabled>
							<LoadingSpinner />
							<span>Cuinant...</span>
						</button>
					) : (
						<button className="w-[200px] bg-blue-600 p-3 rounded-md flex gap-[10px] text-center m-auto cursor-pointer">
              <GenerateIcon />
              <span>Generar</span>
						</button>
					)}
				</form>

				<div className="w-full">
					{error !== null
						? error
						: recipes.map((recipe, index) => (
								<div
									key={index}
									className="bg-black p-4 rounded-md shadow-md mb-4"
								>
									<h2 className="text-xl font-bold">
										Recepta {index + 1}
									</h2>
									<p className="mt-2">{recipe}</p>
								</div>
						  ))}
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				Fet per Erik Moreno
			</footer>
		</div>
	)
}
