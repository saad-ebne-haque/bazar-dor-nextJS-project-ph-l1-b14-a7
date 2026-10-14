import { CategoryType } from "@/types/category/category.type";
import { Link } from "@heroui/react";
import { usePathname } from "next/navigation";

interface MenuProps {
    categories: CategoryType[];
    className?: string;
}



const Menu = ({ categories, className }: MenuProps) => {



    const pathName = usePathname();


    return (
        <>
            {
                categories.map(category => {
                    const isActive = pathName === `/categories/${category.slug}`;
                    return (

                        <li key={category.id}>
                            <Link href={`/categories/${category.slug}`} className={`text-12-semibold-17-1 py-1.75 px-3.25 rounded-md ${isActive ? 'bg-primary-strong text-primary-content' : ''} ${className}`}>{category.icon} {category.nameBn}</Link>
                        </li>
                    )
                })
            }

        </>
    );
};

export default Menu;