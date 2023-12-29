import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import axios from "axios";

import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Admin = () => {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const textstyle = { margin: "10px 0" };

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>{
     axios
     .post("http://localhost:8899/api/createAdmin", data)
     .then((response) => response.data)
     .then((res) => {
       console.log("Admin Created!!!");
     });
     navigate(`/SignIn`);
    };

  return (
    <div className="bg-slate   h-[730px] ">
      <div className="flex justify-between list-none p-4">
        <li>
          <Avatar alt="Cindy Baker" src="src/Data/dhirajicon.jpg" />
        </li>
      </div>

      <Grid>
        <Paper
          className=" md:px-10  px-4 py-5 md:py-16 h-[400px] md:h-[500px] w-[240px] md:w-[340px]  m-auto mt-20 "
          elevation={10}
        >
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockPersonOutlinedIcon />
            </Avatar>
            <h2>Create account</h2>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("username", {
                required: true,
              })}
              label="username"
              style={textstyle}
              placeholder=" username"
              type="username"
              name="username"
              fullWidth
              required
              size="small"
            />
            <TextField
              {...register("password", {
                required: true,
              })}
              label="Password"
              style={textstyle}
              placeholder=" password"
              type="password"
              name="password"
              fullWidth
              required
              size="small"
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Log in
            </Button>
          </form>
        
         <div className="mt-12">
         <Typography>
            Already have an account ?<Link href="/signin">Sign in</Link>
          </Typography>
         </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default Admin;
