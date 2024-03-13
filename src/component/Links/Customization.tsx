

const Customization = () => {
    return (
        <div className='mx-6 mt-4 px-6 py-8 rounded-lg bg-white'>
            <div className='mb-6'>
                <h2 className='mb-2 font-semibold text-[1.5rem]'>Customize your links</h2>
                <p className='mb-10 text-grey'>Add/edit/remove links below and then share all your profiles with the world!</p>
                <div className='py-4 font-semibold text-center text-purple hover:text-white hover:bg-purple border-2 border-purple rounded-lg'>+ Add new link</div>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center px-5 py-8 bg-light_grey">
                <img src="../../../public/images/illustration-empty.svg" alt="" className="w-[108px] h-[75px]" />
                <h2 className='mb-2 font-semibold text-[1.5rem]'>Let's get you started</h2>
                <p className='mb-10 text-grey text-center'>Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>
            </div>
            <div className="mt-8 py-4 w-full border-t-[1px] border-light_grey">
                <div className='py-4 font-semibold text-center text-white bg-hover_purple opacity-[0.5] rounded-lg'>Save</div>
            </div>
        </div>
    )
}

export default Customization