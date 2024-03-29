import React from "react";
import school from "../Data/school.png";
import college from "../Data/graduation-hat.png";
import code from "../Data/code.png";
import linkedin from "../Data/linkedin.png";
import github from "../Data/github.png";
import twitter from "../Data/twitter.png";
import gmail from "../Data/gmail.png";
import resume from "../Data/cv.png";
import write from "../Data/copy-writing.png";
import note from "../Data/note.png";
import design from "../Data/web-design.png";
import setting from "../Data/settings.png";
import dhiraj from "../Data/dhiraj.jpeg";
import Design1 from "../Data/design-development.jpg";
import Design2 from "../Data/e-commarce.jpg";
import Design3 from "../Data/analytics.jpg";
import Design4 from "../Data/mobile-friendly.jpg";
import Design5 from "../Data/website-audit.jpg";
import Design6 from "../Data/java.png";
import location from "../Data/location.png";
import email from "../Data/email.png";
import phone from "../Data/telephone.png";
import portfolio from "../Data/portfolio.png";
import { Divider } from "@mui/material";

function Home() {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "http://localhost:3000/Resume.pdf";
    link.download = "dhirajResume.pdf"; // Optional filename for download
    link.click();
  };

  return (
    <div className="main-page-content bg-slate dark:bg-slate-800 -z-10 overflow-hidden">
      {/* <!-- ================================ home =============================== --> */}

      <div
        id="home"
        className=" flex  flex-col bg-slate  h-[650px] md:h-[600px] "
      >
        <div id="Homepage" className="block  m-auto">
          <h1 className=" text-[65px] md:text-[190px] font-bold mt-[10px]  md:pt-[110px]  mx-3   ">
            devDhiraj12
          </h1>
          <h1 className=" text-[65px] md:text-[190px] font-bold -mt-[99px]  md:-mt-[290px] mx-3  ">
            devDhiraj12
          </h1>

          <div>
            <ul className=" flex flex-row justify-around  m-auto   md:mx-20 md:w-[600px] mt-5 md:mt-0   ">
              <li className=" w-[50px] md:w-[50px] p-2 md:p-3  bg-white border-2   hover:-translate-y-4 duration-700 hover:duration-300  rounded-[50%]">
                <a href="https://www.linkedin.com/in/dhiraj-dagabaj-1a3573248/">
                  <img src={linkedin} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[50px] md:w-[50px] p-2 md:p-3  bg-white border-2 shadow-inner hover:-translate-y-4 duration-700 hover:duration-300 rounded-[50%]">
                <a href="https://github.com/devDhiraj12">
                  <img src={github} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[50px] md:w-[50px] p-2 md:p-3  bg-white border-2 shadow-inner hover:-translate-y-4 duration-700 hover:duration-300 rounded-[50%]">
                <a href="https://twitter.com/Dhiraj82866985">
                  <img src={twitter} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[50px] md:w-[50px] p-2 md:p-3  bg-white border-2 shadow-inner hover:-translate-y-4 duration-700 hover:duration-300 rounded-[50%]">
                <a href="https://www.bing.com/search?q=gmail%20login&pc=0SLN&ptag=C19N9998D051822A00ED787AAB&form=CONBDF&conlogo=CT3210127">
                  <img src={gmail} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[50px] md:w-[50px] p-2 md:p-3  bg-white border-2 shadow-inner hover:-translate-y-4 duration-700 hover:duration-300 rounded-[50%]">
                  <img
                    src={resume}
                    onClick={() => downloadPdf()}
                    alt="under-heading"
                  />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- ================================ about =============================== --> */}

      <div id="about" className="bg-slate inset-0 ">
        <div className="pt-12 md:pt-24 md:p-12 ">
          <div className=" bg-midnight  mb-20  rounded-3xl shadow-2xl mx-auto justify-center w-[80%] h-42 md:h-46  drop-shadow-2xl  ">
            <h1 className=" text-lg  md:text-3xl  text-bold font-serif font-bold text-metal mx-[30%] md:mx-[35%] w-full   mt-10    pt-5">
              What I Do
            </h1>
            <h3 className=" text-sm md:text-lg  text-slate w-full p-6  pt-2 indent-12 md:indent-32  md:mt-5">
              At present time I'm working on a multi-role, as a Web Developer I
              design and create various websites. And as UI/UX Designer I create
              many designs for Web Applications and Mobile applications. I
              create the beauty of the site. I'm responsible for the site's
              technical aspects, such as its performance and capacity, which are
              measures of a website's speed and how much traffic the site can
              handle. In addition, I also create content for the site.
            </h3>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-4  gap-8 ">
            <div className=" bg-white   m-auto  w-[80%] hover:-translate-y-3 duration-700 md:w-[300px] h-[200px] px-5 md:h-[250px]  text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 m-auto  ">
                <img src={write} alt="about-img" />
              </ul>
              <h2 className="p-2 underline font-serif">Working Hard</h2>

              <p className=" p-1 md:p-3">
                Always believe in hard-work in my profession
              </p>
            </div>
            <div className="flex flex-col bg-white   m-auto hover:-translate-y-3 duration-700  w-[80%] md:w-[300px] h-[200px] px-5 md:h-[250px]  text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 m-auto mb-2  ">
                <img src={note} alt="about-img" />
              </ul>
              <h2 className="p-2 underline font-serif">UI/UX Design</h2>

              <p className=" p-1 md:p-3">
                Love to do UI/UX design for new product
              </p>
            </div>
            <div className="flex flex-col bg-white  m-auto hover:-translate-y-3 duration-700  w-[80%] md:w-[300px] h-[200px] px-5 md:h-[250px]  text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 m-auto mb-2  ">
                <img src={design} alt="about-img" />
              </ul>
              <h2 className="p-2 underline font-serif">Web Design</h2>

              <p className=" p-1 md:p-3">
                Passionate about Web Design from start{" "}
              </p>
            </div>
            <div className="flex flex-col bg-white  m-auto hover:-translate-y-3 duration-700  w-[80%] md:w-[300px] h-[200px] px-5 md:h-[250px]  text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 m-auto mb-2  ">
                <img src={setting} alt="about-img" />
              </ul>
              <h2 className="p-2 underline font-serif">Web Developement</h2>

              <p className=" p-1 md:p-3">
                Created all types of modern web development.{" "}
              </p>
            </div>
          </div>
          <div className=" block md:flex w-full mt-24 m-10">
            <ul className=" w-[250px] -ml-2  my-4 sm:m-12 md:w-[300px]">
              <img src={dhiraj} alt="about-img" />
            </ul>
            <div className=" w-[90%] md:w-[65%] mx-auto -ml-7 md:ml-0 md:p-5">
              <div className=" mx-auto p-7 font-mono py-4  text-white decoration-8 text-xl md:text-4xl font-semibold  bg-midnight">
                <h1>Hello ! This is Dhiraj.</h1>
              </div>
              <div className="tracking-wider p-7 pt-9 w-[100%]">
                <p className=" text-sm  md:text-xl indent-16	md:indent-32 ">
                  I am a web developer from Pune, India. I enjoy building
                  everything from small business sites to rich interactive web
                  apps. if you are a business seeking a web presence or an
                  employer looking to hire, you can get in touch with me{" "}
                  <a className="underline2" href="#contact">
                    {" "}
                    here.
                  </a>{" "}
                  I design and build digital products with simple and beautiful
                  code. I specialize in custom web theme development and love
                  what I do.
                  <br />
                  <br />
                  Since beginning my journey as a web developer in my college
                  days, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products for both business and consumer use. I'm
                  quietly confident, naturally curious, and perpetually working
                  on improving my chops one design problem at a time.
                </p>
              </div>
              <div>
                <button
                  className="md:px-5 duration-700 p-2 rounded-lg mx-8 md:mx-12 bg-white hover:bg-metal shadow-lg"
                  onClick={() => downloadPdf()}
                >
                  See Resume
                </button>
                <a
                  className="md:px-5 duration-700 p-2 rounded-lg  md:mx-4 bg-white hover:bg-metal shadow-lg"
                  href="#contact"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="underline1"></div>
      <div className="underline2"></div>

      {/* <!-- ================================ skills =============================== --> */}

      <div id="skills">
        <div className=" inset-0">
          <div className="pt-12 md:pt-24 md:p-12 ">
            <div className=" bg-midnight  mb-20  rounded-3xl  shadow-2xl justify-center w-[80%] h-42 md:h-36  drop-shadow-2xl mx-[10%] ">
              <h1 className=" text-lg md:text-4xl justify-self-start text-bold font-serif font-bold text-metal mx-[30%] md:mx-[40%] mt-10 pt-5 ">
                My Skill
              </h1>

              <h3 className=" text-sm md:text-lg text-slate w-full p-6 indent-8 md:mx-[15%] pt-2 md:mt-5">
                i value simple content structure, clean design pattern, and
                thoughful interactions.
              </h3>
            </div>
            <p className=" w-[80%] m-auto md:w-[85%] mt-20 md:mx-12 text-sm md:text-lg  indent-12 text-black  font-medium  md:tracking-wider  md:leading-relaxed text-justify">
              UI/UX involves planning and iterating a site's structure and
              layout. Once the proper information architecture is in place, I
              design the visual layer to create a beautiful user experience.
              Front End Development is building out the visual components of a
              website. Using HTML, CSS, and Javascript, I build fast,
              interactive websites. This also may include a CMS, apis, or other
              integrations. The work that I am most interested in is 0-1 work
              (helping you get your idea into the world).
            </p>

            <div
              id="language"
              className="font-semibold  md:w-[85%] text-black p-4 text-sm md:text-lg  ml-6 md:mx-16 mt-12   leading-7"
            >
              <h1 className="text-2xl py-4 font-bold">Technical Skills :--</h1>
              <li> Programming Languages : CORE JAVA, JAVA8.</li>
              <li>Web Technology : HTML, CSS, JAVASCRIPT.</li>
              <li>Frameworks : Spring Boot, Hibernate, REACT.JS</li>
              <li>Database Skills : MySQL, MongoDB, MySQL Workbench.</li>
              <li>Software : Intellij IDEA, Eclipse, Spring Tool Suit.</li>
              <li>Tools : GitHub, Maven, Gradle, Tailwind CSS, Matrial Ui</li>
              <li>
                Others : Apache Tomcatserver, Rest Api, Web Services,
                Microservices, JSON,Lombok,Swagger, React-Redux.
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="underline1"></div>
      <div className="underline2"></div>

      {/* <!-- ================================ education =============================== --> */}

      <div id="education" className="bg-slate inset-0 ">
        <div className="pt-12 md:pt-24 md:p-12 ">
          <div className=" bg-midnight  mb-20  rounded-3xl shadow-2xl justify-center w-[80%] h-42 md:h-36  drop-shadow-2xl mx-[10%] ">
            <h1 className=" text-lg  md:text-3xl  text-bold font-serif font-bold text-metal mx-[20%] md:mx-[35%] w-full   mt-10    pt-5">
              Educational Story
            </h1>
            <h3 className=" text-sm md:text-lg  text-slate w-full p-6 indent-8  pt-2 md:mx-[15%]   md:mt-5">
              I like to code things to scratch, and enjoying bringing ideas to
              life in the browser.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-5 md:ml-10">
            <div className="flex flex-col mx-auto p-3 bg-white w-[80%] hover:-translate-y-3 duration-700 md:w-[300px] h-[250px] md:h-[300px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 mx-auto  ">
                <img src={school} alt="edu-img" />
              </ul>
              <h2 className="p-2 underline font-serif">School</h2>
              <h2 className="p-2 ">2009-2018</h2>
              <p>
                Complete my school life from Sundarbai Marathe Vidyalaya,
                Kharadi, Pune, 411014.
              </p>
            </div>
            <div className="flex flex-col m-auto p-3 bg-white hover:-translate-y-3 duration-700  w-[80%] md:w-[300px] h-[250px] md:h-[300px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 mx-auto  ">
                <img src={college} alt="edu-img" />
              </ul>
              <h2 className="p-2 underline font-serif">Graduation</h2>
              <h2 className="p-2 ">2019-2022</h2>
              <p>
                Achieved my Graduation Degree from{" "}
                <a
                  className="hover:underline"
                  href="https://ghrimrp.raisoni.net/"
                >
                  G H Raisoni Institude Of Management & Research, pune
                </a>
              </p>
            </div>
            <div className="flex flex-col m-auto p-3 bg-white hover:-translate-y-3 duration-700  w-[80%]  md:w-[300px] h-[250px] md:h-[300px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 mx-auto  ">
                <img src={code} alt="edu-img" />
              </ul>
              <h2 className="p-2 underline font-serif">Training & Skill</h2>
              <h2 className="p-2 ">2022-2023</h2>
              <p>
                Learining Full-Stack Java Course From{" "}
                <a className="hover:underline" href="http://www.codekul.com/">
                  Codekul Classes,
                </a>{" "}
                Kothrud, Pune
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="underline1"></div>
      <div className="underline2"></div>

      {/* <!-- ================================ services =============================== --> */}

      <div id="services">
        <div className=" inset-0">
          <div className="pt-12 md:pt-24 md:p-12 ">
            <div className=" bg-midnight  mb-20  rounded-3xl  shadow-2xl justify-center w-[80%] h-42 md:h-36  drop-shadow-2xl mx-[10%] ">
              <h1 className=" w-[90%] text-lg md:text-4xl justify-self-start text-bold font-serif font-bold text-metal mx-[20%] md:mx-[40%] mt-10 mb-2 pt-5 ">
                Service List
              </h1>

              <h3 className=" text-sm md:text-lg text-slate w-full p-7 pt-0  md:mx-[30%] md:mt-5">
                I always want to make things that make a difference
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 m-3  gap-12">
              <div className="   px-5  mx-auto  w-[80%] bg-white overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4 m-auto duration-700 hover:scale-110    "
                  src={Design1}
                  alt="services-img"
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  Design + Developement
                </h2>

                <p className=" text-center p-3 text-lg mt-2 font-semibold">
                  Clean, modern designs - optimized for performance, search
                  engines, and converting users to customers.{" "}
                </p>
              </div>
              <div className="   mx-auto px-5 w-[80%] bg-white overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design2}
                  alt="services-img"
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  eCommerce
                </h2>

                <p className=" text-center p-3 text-lg mt-2 font-semibold">
                  Integration of eCommerce platforms, payment gateways, custom
                  product templates, and more.
                </p>
              </div>
              <div className="      mx-auto  px-5 w-[80%] bg-white overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design3}
                  alt="services-img"
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  Analytics
                </h2>

                <p className=" text-center p-3 text-lg mt-2 font-semibold">
                  Get insights into who is browsing your site so that you can
                  make smarter business decisions.
                </p>
              </div>
              <div className="   mx-auto px-5 w-[80%] bg-white overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design4}
                  alt="services-img"
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  Mobile-Friendly
                </h2>

                <p className=" text-center p-3 text-lg mt-2 font-semibold">
                  A responsive design makes your website accessible to all
                  users, regardless of their device.
                </p>
              </div>
              <div className="    mx-auto px-5 w-[80%] bg-white overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design5}
                  alt="services-img"
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  website-Rank
                </h2>

                <p className=" text-center p-3 text-lg mt-2 font-semibold">
                  Looking to improve your page performance, SEO, or user
                  experience? Request a free site audit.
                </p>
              </div>
              <div className="    mx-auto px-5 w-[80%] bg-white overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[50%] mx-auto  p-4  duration-700 hover:scale-110    "
                  src={Design6}
                  alt="services-img"
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  JAVA
                </h2>

                <p className="text-center p-3 text-lg mt-2 font-semibold">
                  commonly found in everything from desktop applications, web
                  servers and application servers, games, and database
                  connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="underline1"></div>
      <div className="underline2"></div>

      {/* <!-- ================================ contact =============================== --> */}

      <div id="contact">
        <div className="pt-12 md:pt-24 md:p-12 ">
          <div className=" bg-midnight  mb-20  rounded-3xl  shadow-2xl justify-center w-[80%] h-42 md:h-36  drop-shadow-2xl mx-[10%] ">
            <h1 className=" w-[90%] text-lg md:text-4xl justify-self-start text-bold font-serif font-bold text-metal mx-[20%] md:mx-[35%] mt-10 pt-5 ">
              Contact Me
            </h1>

            <h3 className=" text-sm md:text-lg text-slate w-full p-7 pt-0  md:mx-[15%] md:mt-5">
              I always open to discussing product design work or partnership
              opportunities.
            </h3>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-4 gap-8 mt-16">
            <div className="w-[250px]  mx-auto text-center h-[250px]">
              <img
                className="w-[60px] ml-24  m-9 "
                src={location}
                alt="contact-img"
              />
              <h1 className="text-3xl font-bold m-4">Location</h1>
              <h3>Pune, Maharashtra, india</h3>
            </div>
            <div className="w-[250px] mx-auto text-center h-[250px]">
              <img
                className="w-[60px] ml-24 m-9 "
                src={email}
                alt="contact-img"
              />
              <h1 className="text-3xl font-bold m-4">Email</h1>
              <h3>dhirajdagabaj0412@gmail.com</h3>
            </div>
            <div className="w-[250px] mx-auto text-center h-[250px]">
              <img
                className="w-[60px] ml-24 m-9 "
                src={phone}
                alt="contact-img"
              />
              <h1 className="text-3xl font-bold m-4">Phone</h1>
              <h3>+91 9096940153</h3>
            </div>
            <div className="w-[250px] mx-auto text-center h-[250px]">
              <img
                className="w-[60px] ml-24 m-9 "
                src={portfolio}
                alt="contact-img"
              />
              <h1 className="text-3xl font-bold m-4">Portfolio</h1>
              <h3>https://github.com/devDhiraj12</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
