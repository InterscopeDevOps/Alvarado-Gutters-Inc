import React, { useContext, useState } from 'react';
import { GlobalDataContext } from '../../../context/context';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'


const Navmenu = () => {
    const { rpdata } = useContext(GlobalDataContext);

    const [openMenu, setOpenMenu] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState(false)
    const [openSubMenuGallery, setOpenSubMenuGallery] = useState(false)

    const handleClickSubMenu = () => {
        return setOpenSubMenu(!openSubMenu)
    }
    const handleClickSubMenuGallery = () => {
        return setOpenSubMenuGallery(!openSubMenuGallery)
    }

    const handleClick = () => {
        return setOpenMenu(!openMenu)
    }

    //sub menu
    const subitems = rpdata?.dbServices?.map((itemsMenu, index) => {
        return (
            {
                subname: itemsMenu.name,
                sublink: `/${itemsMenu.name.replace(" ", "-").toLowerCase()}`,
            }
        )
    })

    //sub menu
    const subitemsGallery = rpdata?.landings?.map((itemsGallery, index) => {
        return (
            {
                subname: itemsGallery.name,
                sublink: `/gallery/${itemsGallery.name.replace(" ", "-").toLowerCase()}`,
            }
        )
    })
    // menu

    const dbMenu = [
        {
            name: `Home`,
            link: `/`,
            child: false,

        },
        {
            name: `About`,
            link: `/about`,
            child: false,
        },
        {
            name: `Services`,
            link: `/services`,
            child: rpdata?.autoGntLandingFromService,
            submenu: [...(subitems ? subitems : [])],
            click: handleClickSubMenu,
            opens: openSubMenu,
        },
        {
            name: `Gallery`,
            link: `/gallery`,
            child: rpdata?.customLinks,
            submenu: [...(subitemsGallery ? subitemsGallery : [])],
            click: handleClickSubMenuGallery,
            opens: openSubMenuGallery,
        },
        {
            name: `Contact`,
            link: `/contact`,
            child: false,
        },
    ]


    // agregar la pestaña de Video al array de dbMenu

    const yt = {
        name: `Our Videos`,
        link: `/our-videos`,
        child: false,
    }

    if (rpdata?.ytGallery?.linkCanalYT) {
        const num = dbMenu.length - 1
        dbMenu.splice(num, 0, yt)
    }
    //  fin de agregar pestaña de Video

    // agregar la pestaña de reviews al array de dbMenu

    const el = {
        name: `Reviews`,
        link: `/reviews`,
        child: false,
    }

    if (rpdata?.reviews?.activo && rpdata?.reviews?.isHomeOnly === false) {
        const num = dbMenu.length - 1
        dbMenu.splice(num, 0, el)
    }
    //  fin de agregar pestaña de reviews



    return (
        <div className='w-full'>
            <ul className='hidden md:flex menuContent'>
                {
                    dbMenu.map((items, index) => {
                        return (
                            items.child ?
                                <li key={index} className='menuContent__items text-[19px]'>
                                    <div className='flex items-center'>
                                        {items.name}
                                        <GoChevronDown className='ml-1' />
                                    </div>
                                    <ul
                                        className={
                                            items.child && items.name === 'Gallery' ?
                                                `menuContent__subMenu h-[200px]`
                                                : `menuContent__subMenu h-[300px]`
                                        }
                                    >
                                        {
                                            items.submenu.map((itemSub, index) => {
                                                return (
                                                    <NavLink key={index} to={itemSub.sublink}>
                                                        <li className='text-[17px]'>
                                                            {itemSub.subname}
                                                        </li>
                                                    </NavLink>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                :
                                <NavLink to={items.link} >
                                    <li className='menuContent__items text-[19px]'>
                                        {items.name}
                                    </li>
                                </NavLink>
                        )
                    })
                }
            </ul>
            <div className='flex justify-center md:hidden bgBtnMenu rounded-lg p-2 mx-1 cursor-pointer' onClick={handleClick}>
                {
                    openMenu ?
                        <MdClose fontSize={30} color={'white'} />
                        : <GiHamburgerMenu fontSize={30} color={'white'} />
                }
            </div>
            <div className={`
                ${openMenu ? 'w-full block absolute z-50 transition duration-500 ease-in-out' : 'hidden'}
            `}>
                <ul className='mobilMenuHeader'>
                    {
                        dbMenu.map((items, index) => {
                            return (
                                items.child ?
                                    <li key={index}
                                        className='menuContent__subItems'
                                        onClick={items.click}
                                    >
                                        <div className='flex items-center'>
                                            {items.name}
                                            {
                                                items.opens ?
                                                    <GoChevronUp className='ml-1' />
                                                    : <GoChevronDown className='ml-1' />
                                            }
                                        </div>
                                        <ul className={items.opens ? 'block mt-3 menuContent__subMenuMobil' : 'hidden'}>
                                            {
                                                items.submenu.map((itemSub, index) => {
                                                    return (
                                                        <NavLink key={index} to={itemSub.sublink}>
                                                            <li className='p-2'>
                                                                {itemSub.subname}
                                                            </li>
                                                        </NavLink>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    :
                                    <NavLink to={items.link} >
                                        <li className='menuContent__subItems'>
                                            {items.name}
                                        </li>
                                    </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}


export default Navmenu;