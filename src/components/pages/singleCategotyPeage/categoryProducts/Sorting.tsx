import { Select, Key, ListBox } from "@heroui/react";

export interface SortingProps {
    handleSorting: (value: string) => void
}

export default function Sorting({ handleSorting }: SortingProps) {


    const itemClass = "rounded-lg data-[focused=true]:bg-primary data-[focused=true]:text-white";


    const handleSelectionChange = (key: Key | null) => {    
        handleSorting(String(key));
    };


    return (
        <>
            <div className="p-4.25 bg-c-base-100 border border-c-base-300 flex items-center justify-end gap-2 rounded-2xl">
                <p className="text-base-content/70 text-14-regular-20">সাজান</p>



                <div className="border rounded-2xl overflow-auto">


                    <Select
                        aria-label="Plan Select"
                        className="min-w-50"
                        placeholder="ডিফল্ট"
                        variant="secondary"
                        onSelectionChange={handleSelectionChange}

                    >

                        <Select.Trigger className="rounded-xl bg-c-base-100 border-base-content/20">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover className="rounded-xl border border-base-content/20 p-1 shadow-lg">
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
                </div>
            </div>

        </>
    )
}