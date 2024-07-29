import classNames from 'classnames'
import { TFooterItemType } from './interface'


const FooterItem = ({
   item
}: TFooterItemType) => {
    return (
        <>
            <div className="flex flex-col items-center  pb-2 pt-2">
            <div
                className={classNames(
                    'm-auto  text-center items-center cursor-pointer '
                )}
            >
                <img
                  src=''
                    alt="home"
                    className={classNames(' mx-auto', 'w-7 h-7')}
                />
                <small
                    className={classNames(
                        ' font-extrabold  mt-2 text-center',
                       
                    )}
                >
                    {item}
                </small>
            </div>

            </div>
        </>
    )
}

export default FooterItem
