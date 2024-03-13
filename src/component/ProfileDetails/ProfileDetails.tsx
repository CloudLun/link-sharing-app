
import { PhotoIcon } from "@heroicons/react/20/solid"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { useNavigate } from "react-router"



const schema = z.object({
    firstname: z.string({
        required_error: "First Name is required"
    }),
    lastname: z.string({
        required_error: "Last Name is required"
    }),
    email: z.string({
        required_error: 'Email is required'
    }).includes("@", {
        message: "Email should have @"
    }).email({
        message: "email is invalid"
    })

})


type FormFields = z.infer<typeof schema>

const ProfileDetails = () => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(schema)
    })

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormFields> = () => {
        navigate("/preview")
    }




    return (
        <div className='mx-auto lg:mx-6 mt-4 lg:mt-1 px-6 py-8 lg:w-[50%] h-full bg-white rounded-lg'>
            <div className=''>
                <h2 className='mb-2 font-semibold text-[1.5rem]'>Profile Details</h2>
                <p className='mb-10 font-regular text-grey'>Add your details to create a personal touch to your profile.</p>
            </div>
            <div className="md:flex items-center my-6 px-5 py-8 bg-light_grey rounded-lg">
                <div className="md:w-[16rem] font-regular text-grey">Profile Picture</div>
                <div className="flex flex-col justify-center items-center gap-4 mr-6 my-4 py-16 w-[75%] md:w-[253px] bg-light_purple rounded-lg">
                    <PhotoIcon width={40} height={40} className="text-purple" />
                    <div className="font-semibold text-purple">+ Upload Image</div>
                </div>
                <div className="font-regular text-grey">Image must below 1024x1024px.<br />Use PNG or JPG format.</div>
            </div>
            <div className="md:flex items-center px-5 py-8 bg-light_grey rounded-lg">
                <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>First name</h3>
                    <input {...register('firstname')} type='text' placeholder='Ben' className='mt-2 px-4 py-3 w-full border-2 rounded-lg' />
                    {errors.email && <div className='text-hover_purple'>{errors.firstname!.message}</div>}
                </div>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>Last name</h3>
                    <input {...register('lastname')} type='text' placeholder='Wright' className='mt-2 px-4 py-3 w-full border-2 rounded-lg' />
                    {errors.email && <div className='text-hover_purple'>{errors.lastname!.message}</div>}
                </div>
                <div className='text-start'>
                    <h3 className='font-[200] text-dark_grey'>Email address</h3>
                    <input {...register('email')} type='text' placeholder='ben@example.com' className='mt-2 px-4 py-3 w-full border-2 rounded-lg' />
                    {errors.email && <div className='text-hover_purple'>{errors.email.message}</div>}
                </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileDetails