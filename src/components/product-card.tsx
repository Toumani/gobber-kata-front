import { Product } from "../lib/types.ts";
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

interface ProductCardProps {
	product: Product,
}

export default function ProductCard({ product }: ProductCardProps) {
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
			<CardFooter className="flex-col text-small items-end justify-between">
				<p className="text-xl font-light text-default-800">{ `$${product.price}` }</p>
			</CardFooter>
		</Card>
	)
}