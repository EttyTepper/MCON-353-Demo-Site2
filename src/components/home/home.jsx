import './home.css';
import { Button } from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CS from "../../images/computerscience.jpg";
import TouroCollegeImg from "../../images/tourocollege.png";

export const Home = () =>{
  return (
    
    <div id="accordian">
     <div id='name'>Etty Tepper</div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I attended Bais Yaakov D'Rav Meir High School, and I am currently in Touro College. 
            I am going for my bachelors in Computer Science. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Work</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I work at Shaare Torah Girls High School as a secretary. The job is fun and fulfilling. 
            I get to help students, parents, and teachers with their different needs.
            It can get busy at times, but that's what makes the job so much fun.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Hobbies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I enjoy dancing, singing, and listening to music. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div id="cards">
      <Card className="cs" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        image={CS}
        alt="computer science"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Computer Science
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://en.wikipedia.org/wiki/Computer_science" target="_blank" size="small">Learn More</Button>
          </CardActions>
    </Card>
    <Card className="cs" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        image={TouroCollegeImg}
        alt="Touro College"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Touro College
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://www.touro.edu/" target="_blank" size="small">Learn More</Button>
          </CardActions>
    </Card>
    </div>
    </div>
  );
}



