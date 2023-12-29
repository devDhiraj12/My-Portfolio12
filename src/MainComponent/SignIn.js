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
import FormHelperText from '@mui/material/FormHelperText';

import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";




const SignIn = () => {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const textstyle = { margin: "10px 0" };
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Sign in with your username or password');

  const onSubmit = (data) =>{
     axios
     .post("http://localhost:8899/api/matchAdmin", data)
     .then((response) => response.data)
     .then((res) => {
      switch (res.message) {
        case 'valid':
          navigate(`/AdminTable`);
          break;
        case 'Invalid':
          setHelperText('Invalid username or password');
          setError(true);
          break;
      
        default:
          break;
      }
     });
    //  navigate(`/users`);
    };

  return (
    <div className="h-[730px] bg-slate">
      <div className="flex justify-between list-none p-4">
        <li>
          <Avatar alt="Cindy Baker" src="src/Data/dhirajicon.jpg" />
        </li>
      </div>

      <Grid>
        <Paper
          className=" md:px-10  px-4  py-12 h-[400px] md:h-[500px] w-[240px] md:w-[340px]  m-auto mt-20 "
          elevation={10}
        >
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockPersonOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
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
                    <FormHelperText error={error}>{helperText}</FormHelperText>

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
          <Typography className="md:py-5">
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            create new account ?    <Link href="/Admin">Sign in</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default SignIn;
