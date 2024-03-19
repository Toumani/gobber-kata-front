import { Spinner } from "@nextui-org/react";
import { useProducts } from "./lib/hooks.ts";
import ProductCard from "./components/product-card.tsx";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useGlobalContext } from "./global-context.tsx";

function App() {
  const { setDrawerOpen } = useGlobalContext()
  const { data: products, error, isLoading } = useProducts()

  if (error)
    return <div>An error occurred</div>
  if (isLoading)
    return <Spinner />

  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand className="gap-2">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          <p className="font-bold uppercase">Kata shopping</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="font-medium">
            <Button className="text-white" as={Link} color="success" startContent={<ShoppingCartIcon className="h-6 w-6 text-white" />} onClick={() => setDrawerOpen(true)}>
              Cart
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="p-8">
        <header className="mb-12 px-4">
          <h1 className="text-5xl font-bold">Kata shopping</h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
          { products?.map(product => <ProductCard key={product.id} product={product}/>) }
        </div>
      </main>
    </>
  )
}

export default App
