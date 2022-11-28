import React, { useState } from 'react'
import '../../assets/css/gallery.content.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

const GalleryContent = ({ galleryImages }) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }


    return (
        <div className='w-4/5 mx-auto'>
            {openModal &&
                <div className='sliderWrap'>
                    <AiFillCloseCircle className='btnClose' onClick={handleCloseModal} />
                    <FaChevronCircleLeft className='btnPrev' onClick={prevSlide} />
                    <FaChevronCircleRight className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={galleryImages[slideNumber]} alt='images de gallery' />
                    </div>
                </div>
            }
            <div className='galleryWrap'>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return (
                            <div
                                className='single'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img
                                    src={`${slide}`}
                                    alt={`images-` + index}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GalleryContent