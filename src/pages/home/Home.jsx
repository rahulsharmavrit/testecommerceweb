import React from "react";
import GetStarted from "./component/GetStarted";
import Banner from "./component/Banner";
import { CardOne } from "../../components/card/Card";

const Home = () => {
  const cardData = [
    {
      icons : <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="44" height="38" viewBox="0 0 44 38" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 29.828L0.586002 20.414C-0.194998 19.633 -0.194998 18.367 0.586002 17.586L10 8.172L12.829 11L4.829 19L12.829 27L10 29.828Z" fill="#68D585"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34 29.828L31.171 27L39.171 19L31.171 11L34 8.172L43.414 17.586C44.195 18.367 44.195 19.633 43.414 20.414L34 29.828Z" fill="#68D585"/>
      <rect x="15.5719" y="36.4553" width="36.985" height="3.99999" transform="rotate(-75.954 15.5719 36.4553)" fill="#D5D7DD"/>
      </svg> ,
      title : "Project management 00",
      description : "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    },
    {
      icons : <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="44" height="38" viewBox="0 0 44 38" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 29.828L0.586002 20.414C-0.194998 19.633 -0.194998 18.367 0.586002 17.586L10 8.172L12.829 11L4.829 19L12.829 27L10 29.828Z" fill="#68D585"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34 29.828L31.171 27L39.171 19L31.171 11L34 8.172L43.414 17.586C44.195 18.367 44.195 19.633 43.414 20.414L34 29.828Z" fill="#68D585"/>
      <rect x="15.5719" y="36.4553" width="36.985" height="3.99999" transform="rotate(-75.954 15.5719 36.4553)" fill="#D5D7DD"/>
      </svg> ,
      title : "Project management 01",
      description : "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    },
    {
      icons : <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="44" height="38" viewBox="0 0 44 38" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 29.828L0.586002 20.414C-0.194998 19.633 -0.194998 18.367 0.586002 17.586L10 8.172L12.829 11L4.829 19L12.829 27L10 29.828Z" fill="#68D585"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34 29.828L31.171 27L39.171 19L31.171 11L34 8.172L43.414 17.586C44.195 18.367 44.195 19.633 43.414 20.414L34 29.828Z" fill="#68D585"/>
      <rect x="15.5719" y="36.4553" width="36.985" height="3.99999" transform="rotate(-75.954 15.5719 36.4553)" fill="#D5D7DD"/>
      </svg> ,
      title : "Project management 02",
      description : "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    },
  ]


  return (
    <>
      <div className="container  mainContent py-5"  >
        <GetStarted title={"Hello Vercel "}  description={"This is my hello world description"} />
        <Banner image={"/src/assets/images/browser 01.png"} />
        <div className="row my-5" >

        {
          cardData?.map((item,index) => {
            return   <div key={index} className="my-lg-0 my-md-3 my-2 col-lg-4 col-md-6 col-12 ">
            <CardOne icon={item.icons} 
        title={item.title}
        description={item.description}
         />
          </div>
          })
        }
        

        
        </div>

      </div>
    </>
  );
};

export default Home;

