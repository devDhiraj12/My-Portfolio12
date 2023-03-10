import React from "react";
import linkedin from "../Data/linkedin.png";
import github from "../Data/github.png";
import twitter from "../Data/twitter.png";
import gmail from "../Data/gmail.png";
import resume from "../Data/cv.png";
import { Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import axios from "axios";

function Footer() {
  // const[user,setuser]=React.useState()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // setuser(data)
    axios
      .post("http://localhost:8899/api/saveData", data)
      .then((response) => response.data)
      .then((res) => {
        console.log("Data saved!!!");
      });
    document.getElementById("formdata").reset();
  };

  return (
    <div className="bg-slate ">
      <div className="  border-2 border-red-500  grid  grid-cols-1 md:grid-cols-3 gap-12 mt-0  m-2 p-5 md:p-8 text-center">
        <div className=" ">
          <ul className="  mt-12 font-serif text-lg md:text-3xl font-bold  ">
            <li>
              <a href="/#home">devDhiraj12</a>
            </li>
          </ul>
          <div className="underline1"></div>
          <div className="underline2"></div>
          <div>
            <ul className=" grid  grid-cols-5 mt-3 md:mt-7 gap-4  ">
              <li className=" w-[20px] md:w-[25px]  hover:-translate-y-2 duration-700 hover:duration-300  ">
                <a href="https://www.linkedin.com/in/dhiraj-dagabaj-1a3573248/">
                  <img src={linkedin} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[20px] md:w-[25px] hover:-translate-y-2 duration-700 hover:duration-300 ">
                <a href="https://github.com/devDhiraj12">
                  <img src={github} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[20px] md:w-[25px] hover:-translate-y-2 duration-700 hover:duration-300 ">
                <a href="https://twitter.com/Dhiraj82866985">
                  <img src={twitter} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[20px] md:w-[25px] hover:-translate-y-2 duration-700 hover:duration-300 ">
                <a href="dhirajdagabaj0412@gmail">
                  <img src={gmail} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[20px] md:w-[25px] hover:-translate-y-2 duration-700 hover:duration-300 ">
                <a href="http://localhost:3000/Resume.docx">
                  <img src={resume} alt="under-heading" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- ================================ react form =============================== --> */}

        <div className=" text-left ">
          <Box>
            <form
              id="formdata"
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-3 m-4"
            >
              <TextField
                {...register("fullname", { required: true, maxLength: 20 })}
                label="Full Name"
                maxRows={7}
                size="small"
                helperText="Incorrect entry."

              />
              <TextField
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                label="Email Id"
                size="small"
              />
              <TextField
                {...register("review", { maxLength: 1199 })}
                label="Suggest"
                multiline
                rows={2}
                // variant="filled"
              />

              <Input type="submit" variant="filled" />
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Footer;
