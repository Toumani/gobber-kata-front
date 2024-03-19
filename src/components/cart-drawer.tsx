import { useGlobalContext } from "../global-context.tsx";

export default function CartDrawer() {
	const { isDrawerOpen } = useGlobalContext()

	return (
		<div
			className={`fixed w-[90vw] z-10 top-0 bottom-0 left-0 ${isDrawerOpen ? "translate-x-0" : "translate-x-[100vw]"} transition-transform bg-white`}>
			Drawer
		</div>
	)
}