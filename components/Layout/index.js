

import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'


const Layout = async ({children})=>{
    
    return (
       <>
        <Header />
            <main className="relative overflow-visible">
                {children}
            </main>
        <Footer />
        </>
    )
}
export default Layout;