import { useState } from 'react'; 
import Link from "next/link"

function DropdownRender({children ,name , link}) {
    const [ope ,setOpe] = useState(false)
    return (
        <div className="relative w-full mx-auto">
            <div className="flex text-xs uppercase py-1 mr-2 lg:my-auto mx-auto focus-within:bg-gray-400 rounded-lg text-white focus-within:text-black">
              <Link href={`/filt${link}`} >
                <a className={`px-2 py-1`}>{name}</a>
              </Link>
              <button onClick={() => setOpe(!ope)} className="flex my-auto m-3 ml-auto">
                <svg className="flex h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className={"flex flex-grow space-x-3.5 sm:w-[98%] w-[96%] flex-col bg-gray-200 rounded-lg " + (ope ? "" : "hidden")}>
              <ul className="flex flex-col my-auto list-none">
                {children}
              </ul>
            </div>
        </div>
    )
}

export default DropdownRender;
