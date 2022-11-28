import React, {useContext} from 'react'
import { GlobalDataContext } from '../../context/context'
import { ButtonContent } from './boton/ButtonContent'

const VideoPromocional = ({ linkVideo, image, title, text }) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <div
            className='bgCountentVideo'
            style={{
                backgroundImage: `url("${image ? image : rpdata?.stock?.[0]}")`
            }}
        >
            <div className='countentVideoInfo '>
                <div className='info'>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ButtonContent />
                </div>
                <iframe
                    title="Promotional video"
                    className='w-[90%] h-[280px] md:h-[360px] md:w-[50%] lg:h-[460px] lg:w-[60%] mx-auto rounded-3xl relative top-[80px] md:top-[150px]'
                    id="ytplayer"
                    type="text/html"
                    src={`https://www.youtube.com/embed/${linkVideo}?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=${linkVideo}`}
                    frameborder="0" allowfullscreen />
            </div>
        </div>
    )
}

export default VideoPromocional


