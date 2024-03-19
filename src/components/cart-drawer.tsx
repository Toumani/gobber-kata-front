import { useGlobalContext } from "../global-context.tsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import CartItemCard from "./cart-item-card.tsx";

export default function CartDrawer() {
	const { isDrawerOpen, setDrawerOpen, cartItems } = useGlobalContext()

	return (
		<section className={`fixed w-[90vw] z-50 top-0 bottom-0 right-0 p-4 ${isDrawerOpen ? "translate-x-0" : "translate-x-[100vw]"} transition-transform bg-white`}>
			<header className="flex justify-between">
				<h2 className="font-bold text-2xl">Cart</h2>
				<XMarkIcon className="h-8 w-8 text-gray-700 cursor-pointer hover:text-gray-400" strokeWidth={2} onClick={() => setDrawerOpen(false)}/>
			</header>
			<div>
				{ cartItems.map(item => <CartItemCard key={item.product.id} cartItem={item} />) }
			</div>
		</section>
	)
}