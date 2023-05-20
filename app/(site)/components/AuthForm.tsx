'use client';

import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/app/components/inputs/Input";

type Variant = 'LOGIN' | 'REGISTER'
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        variant === 'LOGIN' ? setVariant('REGISTER') : setVariant('LOGIN')
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if (variant === 'REGISTER') {

        }

        if (variant === 'LOGIN') {

        }

    }

    const socialAction = (action: string) => {
        setIsLoading(true)

    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form
                    action=""
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input label="Name" id="name" register={register} errors={errors}/>
                    )}
                    <Input label="Email" id="email" type="email" register={register} errors={errors}/>
                    <Input label="Password" id="password" type="password" register={register} errors={errors}/>

                </form>
            </div>
        </div>
    )
}
export default AuthForm;