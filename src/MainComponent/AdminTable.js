import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AdminTable() {
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8899/api/userinfo")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        setdata(json);
      });
  }, [  ]);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className=" py-12  bg-slate p-3 md:p-12  ">
      <h1 className="font-bold text-xl md:text-2xl m-8 mt-16 text-midnight underline">
        User's Information :
      </h1>
      <div >
        <ul className="h-[400px] overflow-scroll border-2 border-midnight">
          {data.map((item) => (
            <Accordion elevation={24}
              expanded={expanded === item}
              onChange={handleChange(item)}
              // sx={{ backgroundcolor:  }}
              style={{ backgroundColor: "#eeeeee", margin: "0"  }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className="hidden md:flex" sx={{ width: "33%", flexShrink: 1 }}>
                  {item._id}
                </Typography>
                <Typography sx={{   color: "text.secondary" }}>
                  Name: {item.fullname}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary" }}>
                  {item.email}
                </Typography>
                <Typography sx={{ width: "100%", padding: "5px" }}>{item.review}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminTable;
