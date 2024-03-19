import { CartItem } from "../lib/types.ts";

interface CartItemProps {
	cartItem: CartItem,
}

export default function CartItemCard({ cartItem }: CartItemProps) {
	return (
		<div>{ cartItem.product.title } - { cartItem.quantity }</div>
	)
}