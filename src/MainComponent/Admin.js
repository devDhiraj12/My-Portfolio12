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
const Admin = () => {
  const paperStyle = {
    // padding: 30,
    // height: 400,
    // width: 280,
    
    // margin: "30px 300px",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const textstyle = { margin: "10px 0" };
  return (
    <div className="adminpage  h-[570px] ">
      <div className="flex justify-between list-none p-4">
      
        <li className="mt-1 font-serif text-lg md:text-3xl font-bold text-metal">
          <h1>Login Page</h1>
        </li>
        <li>
          <Avatar alt="Cindy Baker" src="src/Data/dhirajicon.jpg" />
        </li>
      </div>

      <Grid>
        <Paper className="px-10  py-5 h-[400px] w-[280px] mx-72 mt-8 " elevation={10} style={paperStyle}>
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
            label="Password"
            style={textstyle}
            placeholder="Enter password"
            type="password"
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
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Admin;
