"use client";

import { updateUser } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField, toast, } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";


const ProfileUpdateForm = () => {

    const router = useRouter();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data: Record<string, string> = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        updateUser({
            name: data.name,
            fetchOptions: {
                onSuccess: () => {
                    toast.success('প্রোফাইল সফলভাবে আপডেট হয়েছে!')
                    form.reset();
                    router.refresh();
                },
                onError: (err) => {
                    toast.danger(err.error.message || "প্রোফাইল আপডেট করা যায়নি!");
                },

            }
        })
    }

    return (
        <div className="p-5 space-y-3 bg-c-base-100 border border-c-base-300 rounded-2xl">
            <h5 className="text-18-semibold-28">তথ্য</h5>



            <Form onSubmit={onSubmit}>


                <TextField
                    className={'mb-4'}
                    isRequired
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (value.length < 4) {
                            return "নাম কমপক্ষে ৪ অক্ষরের হতে হবে।";
                        }
                        return null;
                    }}
                >
                    <Label className=" mb-1 text-14-medium-21 "> নাম</Label>
                    <Input
                        className="border border-c-base-300 shadow-none"
                    />
                    <FieldError />
                </TextField>
                <div className="w-full">
                    <Button type="submit" className={'w-full bg-primary text-14-semibold-21 border border-primary-strong hover:shadow shadow-primary hover:bg-hover-link-primary '}>
                        অ্যাকাউন্ট তৈরি করুন
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ProfileUpdateForm;