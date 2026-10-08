import ProductDetailsContent from "../productDetailsContent/ProductDetailsContent";

export interface ProductDetailsProps {
    params: Promise<{ id: string }>
}

export default async function ProductDetails({ params }: ProductDetailsProps) {

    const { id } = await params;

    // fetct product
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`, { cache: "no-store" });
    const product = await res.json();

    return (
        <>
            <ProductDetailsContent product={product}></ProductDetailsContent>
        </>
    )
}