import { Product } from "../lib/types.ts";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { ShoppingCartIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useGlobalContext } from "../global-context.tsx";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";

interface ProductCardProps {
	product: Product,
}

export default function ProductCard({ product }: ProductCardProps) {
	const { cartItems, setCartItems } = useGlobalContext()

	const isInCart = useMemo(
		() => cartItems.filter(item => item.product.id === product.id).length === 1,
		[product.id, cartItems]
	)

	const toggleAddToCart = useCallback(() => {
		if (isInCart) {
			setCartItems(prevState => prevState.filter(it => it.product.id !== product.id))
			toast.success("Removed from cart")
		} else {
			setCartItems(prevState => [
				...prevState,
				{ product, quantity: 1 }
			])
			toast.success("Added to cart")
		}
	}, [isInCart, product])

	return (
		<Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
			<CardHeader className="flex-col items-start">
				<b className="text-2xl text-left">{ product.title }</b>
				<p className="uppercase font-light text-default-500">{ product.category }</p>
			</CardHeader>
			<CardBody className="overflow-visible p-0">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={product.title}
					className="w-full object-cover h-[140px]"
					src={product.image}
				/>
			</CardBody>
			<CardFooter className="flex-col text-small items-end justify-between gap-2">
				<p className="text-xl font-light text-default-800">{ `$${product.price}` }</p>
				<Button
					color={`${isInCart ? "success" : "primary"}`}
					className="text-white font-bold"
					startContent={isInCart
						? <CheckIcon className="h-6 w-6" strokeWidth={2} />
						: <ShoppingCartIcon className="h-6 w-6" />
					}
					onClick={toggleAddToCart}
				>{ isInCart ? "Added to cart" : "Add to cart" }</Button>
			</CardFooter>
		</Card>
	)
}