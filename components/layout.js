import NavDrawer from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <NavDrawer children={children}/>
            <Footer />
        </>
    )
}