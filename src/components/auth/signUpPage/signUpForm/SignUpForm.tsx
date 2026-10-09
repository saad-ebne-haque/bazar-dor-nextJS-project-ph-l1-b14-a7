'use client';

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

const SignUpForm = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [password, setPassword] = useState("");
    console.log(password);
    return (
        <>

            <Form className="flex w-96 flex-col gap-4" /* onSubmit={onSubmit} */>
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 4) {
                            return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে।";
                        }
                        return null;
                    }}
                >
                    <Label className="text-[#1D271F] text-sm font-semibold mb-1 tracking-tighter">নাম</Label>
                    <Input className="w-full placeholder:text-sm placeholder:text-[#1D271F]/50 shadow-none py-2.5 px-3 border border-base-300 focus:bg-base-200" placeholder="আপনার পুরো নাম লিখুন" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"

                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "অনুগ্রহ করে একটি বৈধ ইমেল ঠিকানা লিখুন।";
                        }
                        return null;
                    }}
                >

                    <Label className="text-[#1D271F] text-sm font-semibold mb-1 tracking-tighter">
                        ইমেইল
                    </Label>
                    <Input
                        className="w-full placeholder:text-sm placeholder:text-[#1D271F]/50 shadow-none py-2.5 px-3 border border-base-300 focus:bg-base-200" placeholder="you@example.com" />

                    <FieldError />
                </TextField>


                <TextField
                    isRequired
                    minLength={8}
                    className="w-full"
                    name="password"
                    onChange={setPassword}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর থাকতে হবে।";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "পাসওয়ার্ডে অন্তত একটি সংখ্যা থাকতে হবে।";
                        }
                        return null;
                    }}
                >
                    <Label className="text-[#1D271F] text-sm font-semibold mb-1 tracking-tighter">পাসওয়ার্ড নিশ্চিত করুন</Label>
                    <InputGroup
                        className='w-full placeholder:text-sm placeholder:text-[#1D271F]/50 shadow-none border border-base-300 overflow-auto'
                    >
                        <InputGroup.Input
                            className="py-2.5 px-3 focus:bg-base-200 "
                            type={isVisible ? "text" : "password"}
                            placeholder="পাসওয়ার্ড আবার লিখুন"
                        />
                        <InputGroup.Suffix className="p-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                    <Description className="pl-2 pt-0.5">কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা থাকতে হবে।</Description>
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    className="w-full"
                    name="confirmPassword"
                    validate={(value) => {
                        if (!value || value.length === 0) {
                            return 'পাসওয়ার্ড নিশ্চিত করুন'
                        }
                        if (value !== password) {
                            return 'পাসওয়ার্ড মিলছে না'
                        }
                        return null;
                    }}
                >
                    <Label className="text-[#1D271F] text-sm font-semibold mb-1 tracking-tighter">পাসওয়ার্ড</Label>
                    <InputGroup
                        className='w-full placeholder:text-sm placeholder:text-[#1D271F]/50 shadow-none border border-base-300 overflow-auto'
                    >
                        <InputGroup.Input
                            className="py-2.5 px-3 focus:bg-base-200 "
                            type={isVisible ? "text" : "password"}
                            placeholder="কমপক্ষে ৮ অক্ষর"
                        />
                        <InputGroup.Suffix className="p-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>

                    <FieldError />
                </TextField>


                <div className="flex gap-2 w-full">
                    <Button type="submit" className="w-full bg-[#05893E] border border-[#047f39] text-[#f3fbf4] text-sm font-semibold  shadow-md shadow-[#05893e]/30 px-4 py-px">
                        অ্যাকাউন্ট তৈরি করুন
                    </Button>

                </div>
            </Form>
        </>
    );
};

export default SignUpForm;