import { Button, Image } from "@nextui-org/react";
import { TrashIcon } from "@heroicons/react/24/solid"
import { CartItem } from "../lib/types.ts";
import { useGlobalContext } from "../global-context.tsx";
import { useCallback } from "react";

interface CartItemProps {
	cartItem: CartItem,
}

export default function CartItemCard({ cartItem: { product, quantity } }: CartItemProps) {
	const { setCartItems } = useGlobalContext()

	const removeFromCart = useCallback(() => {
		setCartItems(prevState => prevState.filter(item => item.product.id !== product.id))
	}, [product.id, setCartItems])

	const updateQuantity = useCallback((operation: "+" | "-") => {
		setCartItems(prevState => {
			const item = prevState.find(item => item.product.id === product.id)
			if (item)
				item.quantity = operation === "+" ? item.quantity + 1 : item.quantity - 1
			return [...prevState]
		})
	}, [product.id, setCartItems])

	const increaseQuantity = useCallback(() => updateQuantity("+"), [updateQuantity])

	const decreaseQuantity = useCallback(() => updateQuantity("-"), [updateQuantity])

	return (
		<div className="bg-white drop-shadow-lg rounded-lg">
			<div className="flex items-center gap-4 p-1">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={product.title}
					className="w-12 object-cover"
					src={product.image}
				/>
				<div className="grow">
					<h4 className="font-bold">{ product.title }</h4>
					<div className="flex items-center">
						<Button isIconOnly className="min-w-8 w-8 p-0" size="sm" color="default" isDisabled={quantity === 1} onClick={decreaseQuantity}>-</Button>
						<span className="w-8 text-center">{ quantity }</span>
						<Button isIconOnly className="min-w-8 w-8 p-0" size="sm" color="default" onClick={increaseQuantity}>+</Button>
					</div>
				</div>
				<Button isIconOnly color="danger" variant="ghost" className="self-start" onClick={removeFromCart}>
					<TrashIcon className="h-4 w-4 text-danger" />
				</Button>
			</div>
			<div className="text-right p-2">
				<p className="text-base font-light">{`Unit price: $${ product.price }`}</p>
				<p className="text-lgm font-semibold">{`Total: $${ (product.price * quantity).toFixed(2) }`}</p>
			</div>
		</div>
	)
}