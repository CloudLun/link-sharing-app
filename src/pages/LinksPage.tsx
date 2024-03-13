import Nav from '../component/Nav'
import PhoneModel from '../component/Links/PhoneModel'
import Customization from '../component/Links/Customization'

import { useMediaQuery } from 'react-responsive'

const LinksPage = () => {

    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })

    return (
        <div className='flex flex-col'>
            <Nav />
            <div className='flex flex-1'>
                {
                    isDesktop && <PhoneModel />
                }
                <Customization />
            </div>

        </div>
    )
}

export default LinksPage