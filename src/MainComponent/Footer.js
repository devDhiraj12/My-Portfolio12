import React from "react";
import linkedin from "../Data/linkedin.png";
import github from "../Data/github.png";
import twitter from "../Data/twitter.png";
import gmail from "../Data/gmail.png";
import resume from "../Data/cv.png";
import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  Button,
  Collapse,
  IconButton,
  Input,
  Snackbar,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import axios from "axios";

function Footer() {
  // const[user,setuser]=React.useState()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setOpen(true);
    axios
      .post("http://localhost:8899/api/saveData", data)
      .then((response) => response.data)
      .then((res) => {
        console.log("Data saved!!!");
      });
    document.getElementById("formdata").reset();
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="footerBack  h-[650px] md:h-full">
      <div className="   grid  grid-cols-1 md:grid-cols-3 gap-12  p-5 md:p-8 text-center">
        <div className=" ">
          <ul className="  nameBtn mt-4 mb-16 w-[350px] mx-auto  md:py-5 font-serif text-[50px] drop-shadow-4xl md:text-3xl font-bold  ">
            <li>
              <a href="/#home">devDhiraj12</a>
            </li>
          </ul>
          <div className="underline1"></div>
          <div className="underline2"></div>
          <div>
            <ul className=" flex justify-around mt-7 ">
              <li className=" w-[35px]   md:hover:-translate-y-2 duration-700 hover:duration-300  ">
                <a href="https://www.linkedin.com/in/dhiraj-dagabaj-1a3573248/">
                  <img src={linkedin} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[35px]  hmd:over:-translate-y-2 duration-700 hover:duration-300 ">
                <a href="https://github.com/devDhiraj12">
                  <img src={github} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[35px]  hmd:over:-translate-y-2 duration-700 hover:duration-300 ">
                <a href="https://twitter.com/Dhiraj82866985">
                  <img src={twitter} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[35px]  hmd:over:-translate-y-2 duration-700 hover:duration-300 ">
                <a href="https://www.bing.com/search?q=gmail%20login&pc=0SLN&ptag=C19N9998D051822A00ED787AAB&form=CONBDF&conlogo=CT3210127">
                  <img src={gmail} alt="under-heading" />
                </a>
              </li>
              <li className=" w-[35px]  hmd:over:-translate-y-2 duration-700 hover:duration-300 ">
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
                size="small"
                autoComplete="off"
                error={""}

              />
              <TextField
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                label="Email Id"
                size="small"
                autoComplete="off"
                error={""}
              />
              <TextField
                {...register("review", { maxLength: 1199 })}
                label="Suggest"
                multiline
                rows={2}
                autoComplete="off"

                // variant="filled"
              />

              <Input type="submit" variant="filled" />
            </form>
          </Box>
        </div>
      </div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="sucessfully shared"
          action={action}
        />
      </div>
    </div>
  );
}

export default Footer;
