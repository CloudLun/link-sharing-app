import { useState } from 'react'

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod"

import { useNavigate } from 'react-router';

const schema = z.object({
    email: z.string().includes('@', {
        message: "email is invalid"
    }).email({
        message: "email is required"
    }),
    password: z.string().min(2, {
        message: "password should at least has two words"
    }).max(12, {
        message: "passwords should not be over 12 words"
    })
})

type FormFields = z.infer<typeof schema>


const LoginPage = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
        // defaultValues: {
        //     email: "1234who@gamil.com"
        // },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFields> = () => {
        navigate("/links")
    }

    const clickClickHandler = () => {
        navigate('/create-account')
    }



    return (
        <div className='px-[2.5rem] py-[3rem] w-[30rem] rounded-lg'>
            <div>
                <h1 className='font-bold text-[2rem] text-dark_grey text-start'>Login</h1>
                <h3 className='font-[200] text-dark_grey text-start'>Add your details below to get back into the app</h3>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 mt-6'>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>Email address</h3>
                    <input {...register('email')} type='text' placeholder='email' className='mt-2 px-4 py-3 w-full border-2 rounded-lg' />
                    {errors.email && <div className='text-hover_purple'>{errors.email.message}</div>}
                </div>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>Password</h3>
                    <input {...register('password')} type='text' placeholder='password' className='mt-2 px-4 py-3 w-full border-2 rounded-lg' />
                    {errors.password && <div className='text-hover_purple'>{errors.password.message}</div>}
                </div>
                <button disabled={isSubmitting} type='submit' className='py-3 bg-purple text-white rounded-lg'>{
                    isSubmitting ? 'Loading...' : 'Login'
                }</button>
                <div className='font-[200] text-dark_grey '>Don't have an account? <button className='text-purple' onClick={clickClickHandler}>Create account</button></div>
            </form>
        </div>

    )
}

export default LoginPage