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
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className=" p-32  ">
      {/* <h1>AdminTable</h1> */}
      <Paper elevation={24}  >
        {data.map((item) => (
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                ID : {item._id}
              </Typography>
              <Typography
                sx={{ width: "33%", flexShrink: 0, fontVariant: "h1" }}
              >
                {item.fullname}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.email}</Typography>
              <Typography> review :{item.review}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </div>
  );
}

export default AdminTable;
