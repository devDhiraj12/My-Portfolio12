import {
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HomeIcon from "@mui/icons-material/Home";
import Home from "./Home";

function Header() {
  const [menu, setmenu] = React.useState("Home");
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
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/#home" underline="none">
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/#about" underline="none">
              About
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/#skills" underline="none">
              Skills
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/#education" underline="none">
              Education
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/#services" underline="none">
              Services
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/#contact" underline="none">
              Contact
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <nav className="fixed flex flex-rows justify-between h-16 w-full z-20  p-3  text-white text-bold bg-midnight shadow-inner ">
        <ul className=" md:ml-8 font-serif text-lg md:text-3xl text-metal font-bold  ">
          <li>
            <a href="/#home">devDhiraj12</a>
          </li>
        </ul>

        <div className="inline-block md:hidden  text-2xl ">
          {["right"].map((anchor) => (
            <React.Fragment>
              <Button className="text-2xl" onClick={toggleDrawer(anchor, true)}>
                {" "}
                <RxHamburgerMenu />
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
        <ul className=" hidden md:flex flex-rows justify-between gap-10  mr-8 mt-2 ">
          <li className="hover:text-metal">
            <a  href="/#home">Home</a>
          </li>
          <li className="hover:text-metal">
            <a href="/#about">About</a>
          </li>
          <li className="hover:text-metal">
            <a href="/#skills">Skills</a>
          </li>
          <li className="hover:text-metal">
            <a href="/#education">Education</a>
          </li>
          <li className="hover:text-metal">
            <a href="/#services">Services</a>
          </li>
          <li className="hover:text-metal">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      { menu === "Home" && '/}
      { menu === "About" && '/#about'}
      { menu === "Education" && '/#education'}
      { menu === "Services" && '/#services'}
      { menu === "Contact" && '/#contact'}
      { menu === "Skills" && '/#skills'}
      </Box> */}
    </div>
  );
}

export default Header;
