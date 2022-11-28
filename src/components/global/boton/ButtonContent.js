import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context';
import { Link } from 'react-router-dom'

export const ButtonContent = ({ btnName, btnphone, btnStyle, btnLink }) => {

    const { rpdata } = useContext(GlobalDataContext)

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        btnphone ?
            <a
                className={`
                boton
                my-3
                ${btnStyle}
                px-6
                py-4
                w-52
                rounded-lg
            `}
                href={`tel:+1${btnphone}`}
            >

                <span>
                    {btnphone}
                </span>
            </a>
            :
            // estilo de boton: one, two, three

            rpdata?.simpleWidgets?.[3]?.activo ?
                <a
                    className={`
                        boton
                        my-3
                        ${btnStyle ? btnStyle : 'one'}
                        px-6
                        py-4
                        w-52
                        rounded-lg
                    `}
                    href={btnLink ? `${btnLink}` : `tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                    onClick={goToTop}
                >
                    <span className='capitalize'>
                        {btnName ? btnName : 'Contact us'}
                    </span>
                </a>
                :
                <Link
                    className={`
                        boton
                        my-3
                        ${btnStyle ? btnStyle : 'one'}
                        px-6
                        py-4
                        w-52
                        rounded-lg
                    `}
                    to={`/${btnName ? btnLink : 'contact'}`}
                    onClick={goToTop}
                >
                    <span className='capitalize'>
                        {btnName ? btnName : 'free estimate'}
                    </span>
                </Link>
    )
}
