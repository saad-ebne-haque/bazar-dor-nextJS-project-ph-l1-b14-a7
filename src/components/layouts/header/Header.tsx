import { getAllProducts } from "@/apis/api";
import MarqueeComponents from "./marquee/Marquee";
import Navbar from "./navbar/Navbar";
import { Product } from "@/types/product/product.type";

const Header = async () => {

    const products: Product[] = await getAllProducts()

    return (
        <div className="pb-px border-b border-c-base-300 bg-c-base-100">
            <Navbar></Navbar>
            <MarqueeComponents products={products}></MarqueeComponents>
        </div>
    );
};

export default Header;