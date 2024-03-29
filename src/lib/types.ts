export interface Product {
	id: number,
	title: string,
	price: number,
	description: string,
	category: string,
	image: string,
	rating: {
		rate: number,
		count: 120,
	},
}

export interface CartItem {
	product: Product,
	quantity: number,
}