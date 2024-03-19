import { Button, Spinner } from "@nextui-org/react";
import { useProducts } from "./lib/hooks.ts";

function App() {
  const { data: products, error, isLoading } = useProducts()

  if (error)
    return <div>An error occurred</div>
  if (isLoading)
    return <Spinner />

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Button color="primary">
        Hello NextUI
      </Button>
      { products?.map(product => product.title)}
    </h1>
  )
}

export default App
