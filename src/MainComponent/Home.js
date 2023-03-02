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

function Home() {
  return (
    <div className="main-page-content bg-slate -z-10 overflow-hidden">
      {/* <!-- ================================ home =============================== --> */}

      <div
        id="home"
        className=" flex flex-col bg-black h-[300px] md:h-[600px] "
      >
        <div id="Homepage" className="block">
          <h1 className=" text-[30px] md:text-[150px] font-bold pt-[110px]  mx-10 sm:mx-44  ">
            devDhiraj12
          </h1>
          <h1 className=" text-[30px] md:text-[150px] font-bold -mt-[225px] mx-10 sm:mx-44 ">
            devDhiraj12
          </h1>

          <div className="absolute mt-40 md:mt-0 justify-center align-middle">
            <ul className=" grid grid-cols-5  mx-[20px] md:mx-[500px] mt-10 md:-mt-3 gap-5 md:gap-5 ">
              <li className=" w-[30px] md:w-[40px] p-2 md:p-3  bg-white  hover:-translate-y-2 duration-700 hover:duration-300  rounded-[50%]">
                <a href="https://www.linkedin.com/in/dhiraj-dagabaj-1a3573248/">
                  <img src={linkedin} />
                </a>
              </li>
              <li className=" w-[30px] md:w-[40px] p-2 md:p-3  bg-white hover:-translate-y-2 duration-700 hover:duration-300 rounded-[50%]">
                <a href="https://github.com/devDhiraj12">
                  <img src={github} />
                </a>
              </li>
              <li className=" w-[30px] md:w-[40px] p-2 md:p-3  bg-white hover:-translate-y-2 duration-700 hover:duration-300 rounded-[50%]">
                <a href="https://twitter.com/Dhiraj82866985">
                  <img src={twitter} />
                </a>
              </li>
              <li className=" w-[30px] md:w-[40px] p-2 md:p-3  bg-white hover:-translate-y-2 duration-700 hover:duration-300 rounded-[50%]">
                <a href="dhirajdagabaj0412@gmail">
                  <img src={gmail} />
                </a>
              </li>
              <li className=" w-[30px] md:w-[40px] p-2 md:p-3  bg-white hover:-translate-y-2 duration-700 hover:duration-300 rounded-[50%]">
                <a href="http://localhost:3000/Resume.docx">
                  <img src={resume} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- ================================ about =============================== --> */}

      <div id="about" className="bg-slate inset-0 ">
        <div className="pt-12 md:pt-24 md:p-12 ">
          <div className=" bg-midnight  mb-20  rounded-3xl shadow-2xl justify-center w-[95%] h-42 md:h-46  drop-shadow-2xl mx-[3%] ">
            <h1 className=" text-lg  md:text-3xl  text-bold font-serif font-bold text-metal mx-[10%] md:mx-[35%] w-full   mt-10    pt-5">
              What I Do
            </h1>
            <h3 className=" text-sm md:text-lg  text-slate w-full p-12  pt-0 mx-[0%]  md:mt-5">
              At present time I'm working on a multi-role, as a Web Developer I
              design and create various websites. And as UI/UX Designer I create
              many designs for Web Applications and Mobile applications. I
              create the beauty of the site. I'm responsible for the site's
              technical aspects, such as its performance and capacity, which are
              measures of a website's speed and how much traffic the site can
              handle. In addition, I also create content for the site.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4  gap-8 ml-12 md:ml-5">
            <div className=" bg-white w-[150px] hover:-translate-y-3 duration-700 md:w-[250px] h-[250px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 ml-[30px] md:ml-[60px] md:ml-[37%]  ">
                <img src={write} />
              </ul>
              <h2 className="p-2 underline font-serif">Working Hard</h2>

              <p className=" p-1 md:p-3">
                Always believe in hard-work in my profession
              </p>
            </div>
            <div className="flex flex-col bg-white w-[150px] hover:-translate-y-3 duration-700 md:w-[250px] h-[250px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 ml-[30px] md:ml-[60px] md:ml-[37%]  ">
                <img src={note} />
              </ul>
              <h2 className="p-2 underline font-serif">UI/UX Design</h2>

              <p className=" p-1 md:p-3">
                Love to do UI/UX design for new product
              </p>
            </div>
            <div className="flex flex-col bg-white w-[150px] hover:-translate-y-3 duration-700 md:w-[250px] h-[250px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 ml-[30px] md:ml-[60px] md:ml-[37%]  ">
                <img src={design} />
              </ul>
              <h2 className="p-2 underline font-serif">Web Design</h2>

              <p className=" p-1 md:p-3">
                Passionate about Web Design from start{" "}
              </p>
            </div>
            <div className="flex flex-col bg-white w-[150px] hover:-translate-y-3 duration-700 md:w-[250px] h-[250px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 ml-[30px] md:ml-[60px] md:ml-[37%]  ">
                <img src={setting} />
              </ul>
              <h2 className="p-2 underline font-serif">Web Developement</h2>

              <p className=" p-1 md:p-3">
                Created all types of modern web development.{" "}
              </p>
            </div>
          </div>
          <div className=" block md:flex w-full mt-24 m-10">
            <ul className=" w-[200px] md:w-[300px]">
              <img src={dhiraj} />
            </ul>
            <div className="  md:w-[80%] -ml-7 md:ml-0 md:p-5">
              <div className=" md:-mt-5 m-5 p-7 font-mono  text-4xl font-semibold  bg-white">
                <h1>Hello ! This is Dhiraj</h1>
              </div>
              <div className="tracking-wider p-7 pt-1 w-[90%]">
                <p className="wow 	 fadeIn">
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
                <a
                  className="md:px-5 duration-700 p-2 rounded-lg mx-2 md:mx-4 bg-white hover:bg-metal shadow-lg"
                  href="http://localhost:3000/Resume.docx"
                >
                  See Resume
                </a>
                <a
                  className="md:px-5 duration-700 p-2 rounded-lg mx-2 md:mx-4 bg-white hover:bg-metal shadow-lg"
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

              <h3 className=" text-sm md:text-lg text-slate w-full p-2 mx-[15%]  md:mt-5">
                i value simple content structure, clean design pattern, and
                thoughful interactions.
              </h3>
            </div>
            <p className=" w-[80%] ml-6 md:w-[85%] mt-20 md:mx-12 text-sm md:text-lg  indent-12 text-black  font-medium  md:tracking-wider  md:leading-relaxed text-justify">
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
              className="font-semibold  md:w-[85%] text-black  text-sm md:text-lg  ml-6 md:mx-16 mt-12 lisl trt-decimaacking-wider leading-7"
            >
              <h1 className="text-pink-500">Technical Skills :--</h1>
              <li> Programming Languages : CORE JAVA, JAVA8.</li>
              <li>Web Technology : HTML, CSS, JAVASCRIPT.</li>
              <li>Frameworks : Spring Boot, Hibernate, REACT.JS</li>
              <li>Database Skills : MySQL, MongoDB, MySQL Workbench.</li>
              <li>Software : Intellij IDEA, Eclipse, Spring Tool Suit.</li>
              <li>Tools : GitHub, Maven, Gradle, Tailwind CSS, Matrial Ui</li>
              <li>
                Other : Apache Tomcatserver, Rest Api, Web Services,
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
            <h1 className=" text-lg  md:text-3xl  text-bold font-serif font-bold text-metal mx-[10%] md:mx-[35%] w-full   mt-10    pt-5">
              Educational Story
            </h1>
            <h3 className=" text-sm md:text-lg  text-slate w-full p-2  pt-0 mx-[10%]  md:mt-5">
              I like to code things to scratch, and enjoying bringing ideas to
              life in the browser.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-5 md:ml-10">
            <div className="flex flex-col bg-white w-[200px] hover:-translate-y-3 duration-700 md:w-[300px] h-[300px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 ml-[60px] md:ml-[37%]  ">
                <img src={school} />
              </ul>
              <h2 className="p-2 underline font-serif">School</h2>
              <h2 className="p-2 ">2009-2018</h2>
              <p>
                Complete my school life from Sundarbai Marathe Vidyalaya,
                Kharadi, Pune, 411014.
              </p>
            </div>
            <div className="flex flex-col bg-white hover:-translate-y-3 duration-700 w-[200px] md:w-[300px] h-[300px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 ml-[60px] md:ml-[37%]  ">
                <img src={college} />
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
            <div className="flex flex-col bg-white hover:-translate-y-3 duration-700 w-[200px] md:w-[300px] h-[300px] text-center  text-slate-400 text-sm md:text-lg font-semibold  ">
              <ul className="w-20 p-3 mt-2 ml-[60px] md:ml-[37%]  ">
                <img src={code} />
              </ul>
              <h2 className="p-2 underline font-serif">Training & Skill</h2>
              <h2 className="p-2 ">2022-2023</h2>
              <p>
                Currently learining Full-Stack Java Course From{" "}
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
              <h1 className=" w-[90%] text-lg md:text-4xl justify-self-start text-bold font-serif font-bold text-metal mx-[20%] md:mx-[35%] mt-10 pt-5 ">
                Service List
              </h1>

              <h3 className=" text-sm md:text-lg text-slate w-full p-7 pt-0  md:mx-[20%] md:mt-5">
                I always want to make things that make a difference
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="   bg-white  overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design1}
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  Design + Developement
                </h2>

                <p className=" p-3 text-center md:p-8 mt-2 font-semibold">
                  Clean, modern designs - optimized for performance, search
                  engines, and converting users to customers.{" "}
                </p>
              </div>
              <div className="    bg-white  overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design2}
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  eCommerce
                </h2>

                <p className=" p-3 text-center md:p-8 mt-2 font-semibold">
                  Integration of eCommerce platforms, payment gateways, custom
                  product templates, and more.
                </p>
              </div>
              <div className="    bg-white  overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design3}
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  Analytics
                </h2>

                <p className=" p-3 text-center md:p-8 mt-2 font-semibold">
                  Get insights into who is browsing your site so that you can
                  make smarter business decisions.
                </p>
              </div>
              <div className="    bg-white  overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design4}
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  Mobile-Friendly
                </h2>

                <p className=" p-3 text-center md:p-8 mt-2 font-semibold">
                  A responsive design makes your website accessible to all
                  users, regardless of their device.
                </p>
              </div>
              <div className="    bg-white  overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[400px] p-4  duration-700 hover:scale-110    "
                  src={Design5}
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  website-Rank
                </h2>

                <p className=" p-3 text-center md:p-8 mt-2 font-semibold">
                  Looking to improve your page performance, SEO, or user
                  experience? Request a free site audit.
                </p>
              </div>
              <div className="    bg-white  overflow-hidden">
                {/* <img src={#}/> */}
                <img
                  className="w-[210px] mx-6 md:mx-16 p-4  duration-700 hover:scale-110    "
                  src={Design6}
                />
                <h2 className="p-2  md:-mb-5 underline text-center font-serif  text-sm md:text-lg font-semibold">
                  JAVA
                </h2>

                <p className=" p-3 text-center md:p-8 mt-2 font-semibold">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="w-[250px] text-center h-[250px]">
            <img className="w-[60px] ml-24  m-9 " src={location} />
            <h1 className="text-3xl font-bold m-4">Location</h1>
            <h3>Pune, Maharashtra, india</h3>
          </div>
          <div className="w-[250px] text-center h-[250px]">
            <img className="w-[60px] ml-24 m-9 " src={email} />
            <h1 className="text-3xl font-bold m-4">Email</h1>
            <h3>dhirajdagabaj0412@gmail.com</h3>
          </div>
          <div className="w-[250px] text-center h-[250px]">
            <img className="w-[60px] ml-24 m-9 " src={phone} />
            <h1 className="text-3xl font-bold m-4">Phone</h1>
            <h3>+91 9096940153</h3>
          </div>
          <div className="w-[250px] text-center h-[250px]">
            <img className="w-[60px] ml-24 m-9 " src={portfolio} />
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
