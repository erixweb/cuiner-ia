"use server"
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export async function askAI({ ingredients }: { ingredients: string }) {
	if (ingredients.length < 2) return null

	const response = await ai.models.generateContent({
		model: "gemini-2.0-flash",
		contents:
			`Ets un generador de receptes expert. Et donen un cert nombre d'ingredients amb els quals has de donar-li a l'usuari 3 possibles receptes. Dóna una breu explicació de com fer la recepta. Les receptes han de estar separades per ';' i no has de donar cap explicació extra. Aquests són els ingredients:
      
      {{{ingredients}}}
      `.replace("{{{ingredients}}}", ingredients),
	})

	const separatedResponse = await response?.text?.split(";")

	return separatedResponse
}
