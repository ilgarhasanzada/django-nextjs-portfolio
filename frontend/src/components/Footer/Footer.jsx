import { getData } from "@/api";
import Link from "next/link"

const Footer = async () => {
  const links = await getData('links/');
  const about = await getData('about/');
  return (
    <footer  className="py-5 px-[15px] bg-dark text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
              <p className="text-[16px] inline-block pr-9 text-gray-400 border-gray-400 mb-[6px] py-2 border-b-2 border-dashed">Follow me</p>
              <ul className="gap-5 lg:flex">
                {links.map((link, key)=>(
                  <li key={key} className="mb-[6px] capitalize">
                    <Link href={link.url}>{link.title}</Link>  
                  </li>
                ))}
              </ul>
          </div>
          { about[0]?.gmail &&
           <div>
              <p className="text-[16px] inline-block pr-9 text-gray-400 border-gray-400 mb-[6px] py-2 border-b-2 border-dashed">Contact me</p>
              <ul className="gap-5 lg:flex">
                  <li className="mb-[6px] cursor-pointer">{about[0].gmail}</li>
                  <li className="mb-[6px] cursor-pointer">{about[0].phone}</li>
              </ul>
          </div>}
        </div>
        <div className="text-center mt-5 text-sm">Copyright © {new Date().getFullYear()}.</div>
      </div>
    </footer>
  )
}

export default Footer
