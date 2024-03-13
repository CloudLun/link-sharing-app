import { useMediaQuery } from 'react-responsive'

import { LinkIcon, UserCircleIcon, EyeIcon } from '@heroicons/react/20/solid'


const Nav = () => {

    const isTablet = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        <div className='flex justify-between items-center lg:m-6 px-4 py-3 bg-white'>
            <div>
                <img src={`${isTablet ? "../../public/images/logo-devlinks-large.svg" : "../../public/images/logo-devlinks-small.svg"}`} alt="" className='lg:w-[9rem] lg:h-8' />
            </div>
            <div className='flex items-center  md:gap-4'>
                <div className='flex justify-center items-center gap-2 px-8 py-4 bg-light_purple rounded-lg'>
                    <LinkIcon width={20} height={20} className='text-purple' />
                    {isTablet && <div className='font-regular font-semibold text-4 text-purple'>Links</div>}
                </div>
                <div className='flex justify-center items-center gap-2 px-8 py-4'>
                    <UserCircleIcon width={20} height={20} className='text-grey' />
                    {isTablet && <div className='font-regular font-semibold text-4 text-grey'>Profile Details</div>}
                </div>
            </div>
            <div className='px-8 py-4 font-semibold text-purple hover:text-white hover:bg-hover_purple border-2 border-purple hover:border-hover_purple  rounded-lg'>
                {isTablet ? <div>Preview</div> : <EyeIcon width={20} height={20} />}
            </div>
        </div>
    )
}

export default Nav