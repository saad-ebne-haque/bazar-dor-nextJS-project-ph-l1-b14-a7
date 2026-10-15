"use client";


import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

const SignInForm = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        setErrorMessage(null);

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        // const { error } = await signIn.email({
        //     email: data.email,
        //     password: data.password,
        //     callbackURL: '/home'
        // });

        // if (error) {
        //     setErrorMessage(error.message as string);
        // }
       
    };

    return (
        <Form onSubmit={onSubmit}>
            {
                errorMessage && <p className="text-error text-center px-6 bg-error/10 w-fit mx-auto py-1 rounded-full">{errorMessage}</p>
            }
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
                <Label className="text-base-content mb-1 text-14-medium-21 focus:border-primary focus:bg-red-400"> ইমেইল</Label>
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
                <Label className="text-base-content mb-1 text-14-medium-21">পাসওয়ার্ড</Label>
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

            <div className="w-full">
                <Button type="submit" className={'w-full bg-primary text-14-semibold-21 border border-primary-strong hover:shadow shadow-primary hover:bg-hover-link-primary '}>
                    সাইন ইন
                </Button>
            </div>
        </Form>
    );
};

export default SignInForm;