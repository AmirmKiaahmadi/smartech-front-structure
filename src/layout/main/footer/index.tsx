import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FooterItem from './item'
import { IFooterProps } from './interface'



const Footer = ({ menus }: IFooterProps) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isFund: boolean = pathname.includes('funds')
    return (
        <>
            {isFund && (
                <div className=" cursor-pointer fixed bottom-24 right-8 bg-green-1 rounded-lg text-white py-2 px-4 items-center md:right-[37%]">
                    <p
                        className=" items-center"
                        onClick={() => navigate('/add-box/moneyPool')}
                    >
                        ساخت صندوق <span className=" text-xl">+</span>
                    </p>
                </div>
            )}
            <div className="md:px-[35%] md:bg-bg-md-screen fixed bottom-0 w-full shadow-[0px 9px 29px 0px rgba(0, 0, 0, 0.2)] sm:px-4 -left-[0px] ">
                <div className="   bg-white ">
                    <div className="flex justify-around items-center relative">
                        {React.Children.toArray(
                            menus.map((item) => (
                                <>
                                    <FooterItem
                                       item={item}
                                    />
                                </>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
