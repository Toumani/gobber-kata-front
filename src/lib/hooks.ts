import useSWR from 'swr'
import toast from 'react-hot-toast';
import { Product } from "./types.ts";

const fetcher = (url: string) => fetch(url).then(async (res) => {
		if (!res.ok) {
			toast.error("An error occurred")
			return []
		}

		return await res.json()
	}
)

export const useProducts = () => {
	return useSWR<Product[]>('https://fakestoreapi.com/products', fetcher)
}