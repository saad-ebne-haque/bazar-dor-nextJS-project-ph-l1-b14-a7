import Banner from "@/components/home/hero/Banner";
import ProductsSection from "@/components/home/products/ProductsSection";
import Loading from "@/components/shared/loading/Loading";
import { Suspense } from "react";



const loadProducts = async () => {
  // const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', { cache: 'force-cache' });
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', { cache: 'force-cache' });

  return await res.json();
}

export default async function Home() {


  return (
    <>
      <Banner></Banner>

      <Suspense fallback={<Loading></Loading>}>
        <ProductsSection productsPromise={loadProducts()}></ProductsSection>
      </Suspense>
    </>
  );
}
