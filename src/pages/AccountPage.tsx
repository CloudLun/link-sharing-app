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
    password: z.string().min(8, {
        message: "password should at least has eight characters"
    }).max(12, {
        message: "passwords should not be over 12 words"
    }),
    confirmPassword: z.string().min(8, {
        message: "password should at least has eight characters"
    }).max(12, {
        message: "passwords should not be over 12 words"
    }),  
}).refine(
    data => data.password === data.confirmPassword, {
        path:['confirmPassword'],
        message: 'Passwords do not match'
    }
)

type FormFields = z.infer<typeof schema>


const AccountPage = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
        defaultValues: {
            email: "e.g.alex@email.com",
            password: 'At least 8 characters',
            confirmPassword: 'At least 8 characters'
        },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFields> = () => {
        navigate("/")
    }

    const navigate = useNavigate()

    const clickClickHandler = () => {
        navigate('/')
    }



    return (
        <div className='px-[2.5rem] py-[3rem] w-[30rem] rounded-lg'>
            <div>
                <h1 className='font-bold text-[2rem] text-dark_grey text-start'>Create account</h1>
                <h3 className='font-[200] text-dark_grey text-start'>let's get you started sharing your links</h3>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 mt-6'>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>Email address</h3>
                    <input {...register('email')} type='text' placeholder='email' className='mt-2 px-4 py-3 w-full border-2 rounded-lg text-grey' />
                    {errors.email && <div className='text-hover_purple'>{errors.email.message}</div>}
                </div>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>Create Password</h3>
                    <input {...register('password')} type='text' placeholder='password' className='mt-2 px-4 py-3 w-full border-2 rounded-lg text-grey' />
                    {errors.password && <div className='text-hover_purple'>{errors.password.message}</div>}
                </div>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>Confirm Password</h3>
                    <input {...register('confirmPassword')} type='text' placeholder='password' className='mt-2 px-4 py-3 w-full border-2 rounded-lg text-grey' />
                    {errors.confirmPassword && <div className='text-hover_purple'>{errors.confirmPassword.message}</div>}
                </div>
                <button disabled={isSubmitting} type='submit' className='py-3 bg-purple text-white rounded-lg'>{
                    isSubmitting ? 'Loading...' : 'Create new account'
                }</button>
                <div className='font-[200] text-dark_grey '>Already have an account? <button className='text-purple' onClick={clickClickHandler}>Login</button></div>
            </form>
        </div>

    )
}

export default AccountPage