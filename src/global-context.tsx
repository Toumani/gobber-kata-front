import { createContext, PropsWithChildren, useContext, useState } from "react"
import { CartItem } from "./lib/types.ts";
import * as React from "react";

export type GlobalContent = {
	isDrawerOpen: boolean
	setDrawerOpen: (c: boolean) => void,
	cartItems: CartItem[],
	setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>,
}

export const MyGlobalContext = createContext<GlobalContent>({
	isDrawerOpen: false,
	setDrawerOpen: () => {},
	cartItems: [],
	setCartItems: () => {},
})

export function MyGlobalContextProvider({ children }: PropsWithChildren) {
	const [isDrawerOpen, setDrawerOpen] = useState(false)
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	return (
		<MyGlobalContext.Provider value={{ isDrawerOpen, setDrawerOpen, cartItems, setCartItems }}>
			{ children }
		</MyGlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(MyGlobalContext)