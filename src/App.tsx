import { Spinner } from "@nextui-org/react";
import { useProducts } from "./lib/hooks.ts";
import ProductCard from "./components/product-card.tsx";

function App() {
  const { data: products, error, isLoading } = useProducts()

  if (error)
    return <div>An error occurred</div>
  if (isLoading)
    return <Spinner />

  return (
    <main className="p-8">
      <header className="my-8 p-4">
        <h1 className="text-5xl font-bold">Kata shopping</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
        { products?.map(product => <ProductCard key={product.id} product={product}/>) }
      </div>
    </main>
  )
}

export default App
