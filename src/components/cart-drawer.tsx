import { useMemo } from "react";
import { useGlobalContext } from "../global-context.tsx";
import { XMarkIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import CartItemCard from "./cart-item-card.tsx";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";

export default function CartDrawer() {
	const { isDrawerOpen, setDrawerOpen, cartItems } = useGlobalContext()

	const grandTotal = useMemo(() => {
		let sum = 0
		for (let i = 0; i < cartItems.length; i++)
			sum += cartItems[i].quantity * cartItems[i].product.price

		return sum
	}, [cartItems])

	return (
		<section className={`flex flex-col fixed w-[90vw] z-50 top-0 bottom-0 right-0 p-4 ${isDrawerOpen ? "translate-x-0" : "translate-x-[100vw]"} transition-transform bg-white drop-shadow-lg bg-white`}>
			<header className="flex justify-between">
				<h2 className="flex gap-2 items-center font-bold text-2xl">
					<ShoppingCartIcon className="h-6 w-6 text-black" />
					Cart
				</h2>
				<XMarkIcon className="h-8 w-8 text-gray-700 cursor-pointer hover:text-gray-400" strokeWidth={2} onClick={() => setDrawerOpen(false)}/>
			</header>
			<div className="p-4 space-y-4 grow overflow-y-auto">
				{ cartItems.map(item => <CartItemCard key={item.product.id} cartItem={item} />) }
			</div>
			<div className="text-right space-y-4 py-4 bg-gray-50">
				<p className="text-xl font-bold">{ `Grand Total: $${ grandTotal.toFixed(2) }`}</p>
				<Button
					startContent={<CreditCardIcon className="h-6 w-6 text-white" />}
					color="success"
					className="text-white font-bold"
					isDisabled={grandTotal === 0}
				>
					Checkout
				</Button>
			</div>
		</section>
	)
}