import { BsFacebook,BsYoutube }  from "react-icons/bs"
import Link from "next/link"
const Footer = () => {
    return (
        <div className='px-2 py-3 bg-logo1 w-full'>
            <footer className="bg-transparent container lg:px-0 px-4 max-w-4xl mx-auto">
                <div className="container px-6 py-4">
                    <div className="">
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                <div className="md:mx-auto">
                                    <p className="text-xl font-bold text-white">About</p>
                                    <p className="max-w-md mt-2 text-gray-400">EPM is your news, entertainment, Travel website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                                </div>
                                <div className="md:mx-auto mx-4">
                                    <h3 className="uppercase text-white">Credits to</h3>
                                    <span className="mt-2 text-sm text-gray-400">Epm Team</span>
                                    <p><Link href="/dash"><a className="mt-2 text-sm text-gray-400 hover:underline">Admin Page</a></Link></p>
                                </div>
                                <div className="lg:mx-auto md:mt-0 mt-2">
                                    <h3 className="uppercase text-white">Social media</h3>
                                    <a href="https://www.facebook.com/epmnews" rel="noreferrer" target="_blank" className="flex mt-2 text-sm text-gray-400 hover:underline"><BsFacebook size="1.2rem"/><span className="pl-2">Facebook</span></a>
                                    <a href="https://youtube.com/channel/UCvYnYxaHkdekynwuLLAUX4w" rel="noreferrer" target="_blank" className="flex mt-2 text-sm text-gray-400 hover:underline"><BsYoutube size="1.2rem"/><span className="pl-2">Youtube</span></a>
                                </div>
                                <div className="lg:mx-auto lg:mt-0 md:mt-2">
                                    <h3 className="uppercase text-white">Contact</h3>
                                    <span className="mt-2 text-xs text-gray-400 hover:underline">epmnewsdammam@gmail.com</span>
                                </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;