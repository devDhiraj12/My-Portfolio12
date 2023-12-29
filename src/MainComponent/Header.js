import {
  Box,
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React, { useEffect } from "react";
import login from "../Data/login.png";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="   w-64 flex flex-col pt-12 px-7  "
    >
      <List className="">
        <ListItem>
          <Link
            className=" text-2xl text-metal py-2"
            href="/#home"
            underline="none"
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className=" text-2xl text-metal py-2"
            href="/#about"
            underline="none"
          >
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className=" text-2xl text-metal py-2"
            href="/#skills"
            underline="none"
          >
            Skills
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className=" text-2xl text-metal py-2"
            href="/#education"
            underline="none"
          >
            Education
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className=" text-2xl text-metal py-2"
            href="/#services"
            underline="none"
          >
            Services
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className=" text-2xl text-metal py-2"
            href="/#contact"
            underline="none"
          >
            Contact
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className=" text-2xl text-metal py-2"
            href="/signup"
            underline="none"
          >
            Admin
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  const avatarStyle = { backgroundColor: "#cc9819" };

  const gotoadmin = () => {
    navigate(`/signup`);
  };

  return (
    <div>
      <nav className="fixed flex flex-rows justify-between h-20 w-full z-20   pt-6 md:pt-2 text-white text-bold bg-midnight shadow-inner ">
        <ul className=" flex ml-5 md:mt-3  md:ml-20  text-3xl md:text-4xl text-metal font-bold  ">
          <li>
            <a className="font" href="/#home">
              devDhiraj12
            </a>
          </li>
        </ul>

        <div className="inline-block md:hidden   ">
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon className="text-white" />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <ul className=" hidden md:flex flex-rows text-xl justify-between gap-12  mr-10 mt-4 ">
          <li className="hover:text-metal duration-300">
            <a href="/#home">Home</a>
          </li>
          <li className="hover:text-metal duration-300">
            <a href="/#about">About</a>
          </li>
          <li className="hover:text-metal duration-300">
            <a href="/#skills">Skills</a>
          </li>
          <li className="hover:text-metal duration-300">
            <a href="/#education">Education</a>
          </li>
          <li className="hover:text-metal duration-300">
            <a href="/#services">Services</a>
          </li>
          <li className="hover:text-metal duration-300">
            <a href="/#contact">Contact</a>
          </li>
          <li className="-mx-8">
            <img
              className="w-12 -mt-2 mx-2 transition ease-in duration-300 hover:scale-125 "
              alt="nevigate"
              onClick={gotoadmin}
              src={login}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
