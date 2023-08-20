import Navbar from "./nav"
import dynamic from "next/dynamic"

const Footer = dynamic(
    () => import('./footer')
)

function Layout({children}) {
    return (
        <>
         <Navbar />
            {children}
         <Footer />
        </>
    )
}

export default Layout
