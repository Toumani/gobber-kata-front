import { createContext, PropsWithChildren, useContext, useState } from "react"

export type GlobalContent = {
	isDrawerOpen: boolean
	setDrawerOpen: (c: boolean) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
	isDrawerOpen: false,
	setDrawerOpen: () => {},
})

export function MyGlobalContextProvider({ children }: PropsWithChildren) {
	const [isDrawerOpen, setDrawerOpen] = useState(false)

	return (
		<MyGlobalContext.Provider value={{ isDrawerOpen, setDrawerOpen }}>
			{ children }
		</MyGlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(MyGlobalContext)