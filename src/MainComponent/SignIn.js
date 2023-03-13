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

import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const textstyle = { margin: "10px 0" };
  const navigate = useNavigate();
  const { register } = useForm();

  const pass = {
    password: "",
  };

  const [password, setpassword] = React.useState(pass);

  const varify = (event) => {
    setpassword({ ...password, [event.target.name]: event.target.value });
  };

  const signin = () => {
    console.log(password);
    if (password === "dhiraj0412") {
    //   navigate(`/users`);
    } else {
      console.log("please enter valid password");
    }
  };

  return (
    <div className="adminpage   h-[570px] ">
      <div className="flex justify-between list-none p-4">
        <li>
          <Avatar alt="Cindy Baker" src="src/Data/dhirajicon.jpg" />
        </li>
      </div>

      <Grid>
        <Paper
          className=" md:px-10  px-4  py-5 h-[400px] w-[240px] md:w-[280px]  md:mx-72 mx-[10%] mt-8 "
          elevation={10}
        >
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockPersonOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            style={textstyle}
            placeholder="Enter username"
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
            placeholder="Enter password"
            type="password"
            name="password"
            fullWidth
            required
            size="small"
            onChange={varify}
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
            onClick={signin}
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          
        </Paper>
      </Grid>
    </div>
  );
};

export default SignIn;
