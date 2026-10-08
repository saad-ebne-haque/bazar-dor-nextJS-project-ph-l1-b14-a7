import Banner from "@/components/home/hero/Banner";
import ProductsSection from "@/components/home/products/ProductsSection";
import { Suspense } from "react";
import { FourSquare } from "react-loading-indicators";


const loadProducts = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', { cache: 'force-cache' });

  return await res.json();
}

export default async function Home() {


  return (
    <>
      <Banner></Banner>

      <Suspense fallback={<div className="w-full  text-center">
        <FourSquare color="#05893E" size="medium" text="পন্য লোড হচ্ছে..." textColor="" />
      </div>}>
        <ProductsSection productsPromise={loadProducts()}></ProductsSection>
      </Suspense>
    </>
  );
}
