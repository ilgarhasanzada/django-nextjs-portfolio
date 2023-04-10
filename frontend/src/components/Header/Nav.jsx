import { navigation } from "@/services/navigation"
import { Link } from "react-scroll"

const Nav = () => {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px] text-lg'>
            {navigation.map((item, index)=>
                <li className="text-white hover:text-accent cursor-pointer" key={index}>
                    <Link activeClass="!text-red-600"
                        spy={true}
                        smooth={true} 
                        duration={500}
                        offset={-70} 
                        to={item.href}
                        className='transition-all duration-300'
                        >
                        {item.name}
                    </Link>
                </li>
            )}
        </ul>
    </nav>
  )
}

export default Nav
