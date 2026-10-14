import { getAllProducts } from "@/apis/api";
import MarqueeComponents from "./marquee/Marquee";
import Navbar from "./navbar/Navbar";
import { Product } from "@/types/product/product.type";

const Header = async () => {

    const products: Product[] = await getAllProducts()

    return (
        <>
            <div className="bg-c-base-100 sticky top-0 z-50 ">
                <Navbar></Navbar>
            </div>
            <MarqueeComponents products={products}></MarqueeComponents>
        </>
    );
};

export default Header;