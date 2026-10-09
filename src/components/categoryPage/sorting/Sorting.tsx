'use client'
import { Select, ListBox, Key } from "@heroui/react";

interface SortingProps {
    handleSorting: (value: string) => void;
}

const Sorting = ({ handleSorting }: SortingProps) => {
    const itemClass =
        "rounded-lg data-[focused=true]:bg-[#05893E] data-[focused=true]:text-white";



        
    const handleSelectionChange = (key: Key | null) => {
        handleSorting(String(key));
    };

    return (
        <>
            <Select
                aria-label="Plan Select"
                className="min-w-50"
                placeholder="ডিফল্ট"
                variant="secondary"
                onSelectionChange={handleSelectionChange}
            >

                <Select.Trigger className="rounded-xl bg-base-100 border border-[#1D271F]/20">
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="rounded-xl border border-[#1D271F]/20 p-1 shadow-lg">
                    <ListBox>
                        <ListBox.Item className={itemClass} id="high-to-low" textValue="দাম: বেশি থেকে কম">
                            দাম: বেশি থেকে কম
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item className={itemClass} id="low-to-high" textValue="দাম: কম থেকে বেশি">
                            দাম: কম থেকে বেশি
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>

        </>
    );
};

export default Sorting;