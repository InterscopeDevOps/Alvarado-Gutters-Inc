import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import ServicesBlocks from "./ServicesBlock";
function ContentServices() {
  const { rpdata } = useContext(GlobalDataContext);
  let classAnterior = "row"
  let classAnterioMargin = 'md:mr-[-40px]'
  return (
    <>
      <div className="w-full">
        <h2 className="text-center mt-10 md:mb-[-100px] mb-[-150px]">{rpdata?.labels?.general?.titleServices}</h2>
        {rpdata?.dbServices?.map((item, i) => {
          return (
            <div className="w-4/5 mx-auto md:my-3 my-5" key={i}>
              {
                item.description.map((service, index) => {
                  let classes = index % 2 === 0 ? "row" : "row-reverse"
                  let nuevaClass = classAnterior === "row" ? "row-reverse" : "row"
                  classes = nuevaClass
                  classAnterior = classes;
                  const titleNone = index === 0 ? ' block' : 'hidden'

                  let classeMargin = index % 2 === 0 ? 'md:mr-[-40px]' : 'md:ml-[-40px]'
                  let nuevaClasseMargin = classAnterioMargin === "md:mr-[-40px]" ? "md:ml-[-40px]" : "md:mr-[-40px]"
                  classeMargin = nuevaClasseMargin
                  classAnterioMargin = classeMargin;

                  return (
                    <ServicesBlocks
                      key={index}
                      ServiceName={item.name}
                      TextService={service.text}
                      itemServices={service.lists.map((list, index) => {
                        return (
                          list.length > 0 ? <li key={index}><i className="fa fa-arrow-right mr-2"></i>{list}</li> : null
                        )
                      })}
                      bgimg={service.img}
                      ClassesRow={classes}
                      DisplayNone={titleNone}
                      classesMargin={classeMargin}
                    />
                  )
                })
              }
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ContentServices;