import { Button, Divider, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import oscar from '../imgenes/fotoPerfil.png';
import TypeWriterEffect from 'react-typewriter-effect'
import curriculo from "../imgenes/OSCAR RAUL SUE ALVARADO cv...pdf"
const About = ({title, dark, id}) => {
    const classes = useStyles();
    return (
            <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
            <Typography variant="h3">{title}</Typography>
            <Card className={classes.card}>
                <CardMedia image={oscar} className={classes.cardMedia} titel = "foto"/>
                <CardContent className={classes.cardContent}>
                <TypeWriterEffect
                text= "¡Hola a todos!"
                textStyle={{fontSize: "2rem", fontWeight: "bold",color: "rgb(5, 43, 28)"}}
                cursorColor="rgb(218, 238, 162)"
                startDelay={100}
                typeSpeed= {80}
                />
                <Typography variant="h7">
                 <TypeWriterEffect
                text= "Soy Oscar Raul Sue"
                textStyle={{fontSize: "3.5rem",color:"#459", fontWeight: "bold" }}
                cursorColor="rgb(218, 238, 162)"
                startDelay={2000}
                typeSpeed= {80}
                />
                </Typography>
                <Divider />
                <Typography variant="h6">
                <TypeWriterEffect variant="h6" color="textSecondary"
                text= "Un Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas."
                textStyle={{fontSize: "1.2rem", marginTop: "4rem",}}
                cursorColor="rgb(218, 238, 162)"
                startDelay={3500}
                typeSpeed= {40}
                />
                </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="container" className={classes.btnCv}>
                   <a href={curriculo} download>
                    Descargar CV
                    </a>
                    </Button>
                </CardActions>
            </Card>
            </div>
            </div>
    )
}

const useStyles = makeStyles((theme) =>({
    sectioncontent: {
        maxWidth: "90vw",
        margin: "0 auto",
        
    },
    section: {
      height: '100vh',

    },
    sectiondark: {
        backgroundColor: "#343",
        color: "#fff",
        
    },
    card:{
        height: "80vh",
        display: "flex",
        marginLeft: theme.spacing(12),
        [theme.breakpoints.down("sm")]:{
            marginLeft: theme.spacing(8),
        },
        [theme.breakpoints.down("xs")]:{
            marginLeft: theme.spacing(4),
        },
        backgroundColor: "rgb(218, 238, 162)",
        position: "relative",
        },
    cardMedia:{
        width: "34vw",
        marginTop: theme.spacing(2),

    },
    cardContent:{
        
        marginTop: theme.spacing(2),
        
        "& h6":{
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]:{
                display: "none"
            }
        }

    },
    titelO:{
        color:"red",
        [theme.breakpoints.down("sm")]:{
            display: "none"
        }
    },
    btnCv:{
        position: "absolute",
        bottom: "1rem",
        right: "1rem",
        backgroundColor: "orange",
        padding: theme.spacing(2),
        "&:hover a":{
            
            color: "#333",
        },
        "& a": {
            fontWeight: 900,
            textDecoration:"none",
            color: "#fff",
        },
        "&:hover": {
            
            backgroundColor:"tomato",
            
        }

    }
  }))

export default About



