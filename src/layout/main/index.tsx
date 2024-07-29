import { Outlet, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import Footer from './footer'


const DashboardLayout = () => {
   
    const { pathname } = useLocation()
   

    return (
        <div className="sm:w-full md:px-[35%] relative md:bg-bg-md-screen">
            <div className=" h-full bg-main-bg">
                <div className=" min-h-screen flex flex-col relative">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ duration: 0.2 }}
                        className=" grow"
                    >
                        <div className="grow mb-20">
                            <Outlet />
                        </div>
                    </motion.div>
                    <Footer menus={[1,2,3,4,5]} />
                </div>
            </div>
           
        </div>
    )
}

export default DashboardLayout
