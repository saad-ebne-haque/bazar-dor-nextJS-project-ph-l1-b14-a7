"use client";

import { signUp } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {

    const router = useRouter();

    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setErrorMessage(null);
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        const { error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            fetchOptions: {
                onSuccess: () => {
                    router.push('/');
                }
            },

        });
        if (error) {
            setErrorMessage(error.message as string);
        }
    };


    return (
        <>

            <Form onSubmit={onSubmit}>
                {
                    errorMessage && <p className="text-error text-center px-6 mb-5 bg-error/10 w-fit mx-auto py-1 rounded-full">{errorMessage}</p>
                }
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
                        placeholder="আপনার পুরো নাম লিখুন" />
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
                    className={'mb-4'}
                >
                    <Label className=" mb-1 text-14-medium-21"> ইমেইল</Label>
                    <Input
                        className="border border-c-base-300 shadow-none"
                        placeholder="you@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    className="w-full mb-4"
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
                    <Label className=" mb-1 text-14-medium-21">পাসওয়ার্ড</Label>
                    <InputGroup
                        className="shadow-none border border-c-base-300"
                    >
                        <InputGroup.Input

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
                    <Description className="pl-2 pt-0.5">কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা থাকতে হবে।</Description>
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    className="w-full mb-4"
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
                    <Label className=" mb-1 text-14-medium-21">পাসওয়ার্ড নিশ্চিত করুন</Label>
                    <InputGroup
                        className="shadow-none border border-c-base-300"
                    >
                        <InputGroup.Input

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

                    <FieldError />
                </TextField>

                <div className="w-full">
                    <Button type="submit" className={'w-full bg-primary text-14-semibold-21 border border-primary-strong hover:shadow shadow-primary hover:bg-hover-link-primary '}>
                        অ্যাকাউন্ট তৈরি করুন
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default SignUpForm;