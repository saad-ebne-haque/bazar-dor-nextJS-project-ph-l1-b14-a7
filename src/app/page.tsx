import { getAllProducts } from "@/apis/api";
import Banner from "@/components/pages/homePage/banner/Banner";
import AllProducts from "@/components/pages/homePage/products/allProducts/AllProducts";
import FallingProducts from "@/components/pages/homePage/products/fallingProducts/FallingProducts";
import RisingProducts from "@/components/pages/homePage/products/risingProducts/RisingProducts";
import { Product } from "@/types/product/product.type";


export default async function Home() {

  const products: Product[] = await getAllProducts();


  return (
    <div className="py-6 px-4 mb-12 space-y-10">
      <Banner></Banner>
      <RisingProducts products={products}></RisingProducts>
      <FallingProducts products={products}></FallingProducts>
      <AllProducts products={products}></AllProducts>
    </div>
  );
}
