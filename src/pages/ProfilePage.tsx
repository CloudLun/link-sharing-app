
import Nav from "../component/Nav"
import PhoneModel from '../component/Links/PhoneModel'
import ProfileDetails from "../component/ProfileDetails/ProfileDetails"

import { useMediaQuery } from 'react-responsive'

const ProfilePage = () => {

    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })  

  return (
    <div className='flex flex-col'>
    <Nav />
    <div className='flex flex-1'>
        {
            isDesktop && <PhoneModel />
        }
        <ProfileDetails />
    </div>

</div>
  )
}

export default ProfilePage