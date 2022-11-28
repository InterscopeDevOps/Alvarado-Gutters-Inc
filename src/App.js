import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Services from "./Page/Services";
import Gallery from "./Page/Gallery";
import Contact from "./Page/Contact";
import Loader from "./components/global/Loader";
import axios from "axios";
import "./index.css";
import "./assets/css/styles.css";
import "./assets/css/slider.css";
import "./assets/css/socialmediaicon.css";
import { GlobalDataContext } from "./context/context";
import ServicesDetail from "./components/Services/ServicesDetail";
import GalleryDetail from "./components/Gallery/GalleryDetail";
import Reviews from "./Page/Reviews";
import OurVideos from "./Page/OurVideos";
import FindUsOn from "./components/global/FindUsOn";
import ErrorPages from "./Page/ErrorPages";

const App = () => {
  const id = "6384cf638d24538342b4a6e0";
  const [rpdata, setrpdata] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //useEffect para peticion al servidor
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios({
          baseURL: "https://servidorpublico.herokuapp.com/api",
          url: `/paginas/${id}`,
          method: "get",
        });
        //se convierte la data en el objeto
        setrpdata(JSON.parse(JSON.stringify(response.data)));

        // paletas de colores en la web
        document.documentElement.style.setProperty('--main-color', response.data.styles.mainColor);
        document.documentElement.style.setProperty('--secondary-color', response.data.styles.secondaryColor);
        document.documentElement.style.setProperty('--three-color', response.data.styles.thirdColor);
        document.documentElement.style.setProperty('--heading-color', response.data.styles.headingTextColor);
        document.documentElement.style.setProperty('--paragraph-color', response.data.styles.paragraphTextColor);
        document.documentElement.style.setProperty('--bg-footer', response.data.styles.bgFooter);
        document.documentElement.style.setProperty('--btn', response.data.styles.btn);
        document.documentElement.style.setProperty('--btn-hover', response.data.styles.btnHover);
        document.documentElement.style.setProperty('--scroll-color', response.data.styles.scrollColor);
        document.documentElement.style.setProperty('--icons-menu-movil', response.data.styles.iconsMenuMovil);
        document.documentElement.style.setProperty('--overlay-video-content', response.data.styles.overlayColor);



      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="App">
      <GlobalDataContext.Provider value={{ rpdata }}>
        <Router>
          {
            rpdata?.simpleWidgets?.[3]?.activo ?
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<ErrorPages />} />
              </Routes>

              :
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />}></Route>
                <Route path="/:id" element={<ServicesDetail />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:id" element={<GalleryDetail />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/our-videos" element={<OurVideos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/find-us-on" element={<FindUsOn />} />
                <Route path="*" element={<ErrorPages />} />
              </Routes>

          }
        </Router>
      </GlobalDataContext.Provider>
    </div>
  );
};

export default App;
