import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import Modal from "../components/Home/Modal";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Home/ContentServicesHome";
import HeroSection from "../components/Home/HeroSection";
import Paletacolor from "../components/global/Paletacolor";
import BlockPrincipal from "../components/block/Block_6";
import BlockSecondary from "../components/block/Block_4";
import BlockAbout from "../components/block/Block_1";
import VideoPromocional from "../components/global/VideoPromocional";
import ContentServices from "../components/Services/ContentServices";
import GalleryContent from "../components/Gallery/GalleryContent";

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">

        <Modal />

        <HeroSection />


        <BlockPrincipal
          text={rpdata?.dbHome?.[0].text}
          image1={rpdata?.gallery?.[0]}
          image2={rpdata?.gallery?.[1]}
          image3={rpdata?.gallery?.[2]}
          image4={rpdata?.gallery?.[3]}
          sloganPrincipal={true}
          listsServices={true}
        />

        {/* video promocional */}
        {
          rpdata?.videosPromo?.[0]?.activo ?
            <VideoPromocional
              title={rpdata?.dbSlogan?.[2]?.slogan}
              text={rpdata?.dbAbout?.[1]?.text}
              linkVideo={`${rpdata?.videosPromo?.[0].link}`}
              image={`${rpdata?.videosPromo?.[0].img}`}
            />
            : null
        }

        <Directories />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[3]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image1={rpdata?.stock?.[4]}
          image2={rpdata?.stock?.[3]}
          image3={rpdata?.stock?.[2]}
        />

        <CounterUp image={rpdata?.stock?.[3]} />

        <BlockAbout
          title={'a little about us'}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.stock?.[1]}
          listsAbout={true}
        />

        {/* our reviews */}
        {
          rpdata?.reviews?.isHomeOnly === true ?
            <div className="w-4/5 mx-auto py-[100px]">
              <h1 className="pb-10 text-center">{rpdata?.labels?.general?.titleReviews}</h1>
              <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
            </div>
            : null
        }

        {/* Servicios del home */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-20">
              <ContentServices />
            </div>
            :
            <ServicesHome />

        }

        {/* Gallery cuando es OnePages */}

        {/* Paleta de Colores */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-10 pb-28">
              <h2 className="text-center pb-[50px]">{rpdata?.labels?.general?.titleGallery}</h2>
              <GalleryContent galleryImages={rpdata?.gallery?.length > 0 ? rpdata?.gallery : rpdata?.stock} />
            </div>
            :
            null

        }
        {
          rpdata?.brandingExtra?.[0]?.activo ?
            <Paletacolor />
            : null
        }
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.stock?.[2]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>

        <Map />

      </div>
    </BaseLayout>
  );
}

export default Home;
