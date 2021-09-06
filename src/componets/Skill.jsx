import {Grid, Link, CardMedia, Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import dailybits from '../imgenes/Imagen1.png'
import paginaTributo from '../imgenes/Imagen2.png'
import ducumentacion from '../imgenes/Imagen3.png'
import paginaProducto from '../imgenes/Imagen4.png'
const dataPro = [
    {
        titulo: 'Daily Bits',
        link: "https://oscarraulsue.github.io/daily_bits/",
        imagen: dailybits,
    },
    {
        titulo: 'Pagina tributo Michael Schumacher',
        link: "https://oscarraulsue.github.io/Pagina-Tributo/",
        imagen: paginaTributo
    },
    {
        titulo: 'Documentación Tecnica',
        link: "https://oscarraulsue.github.io/DocumentacionTecnica/",
        imagen: ducumentacion
    },
    {
        titulo: '¿Quien Soy?',
        link: "https://oscarraulsue.github.io/paginaProducto/",
        imagen: paginaProducto
    }
]

const Skill = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
          <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Grid container className={classes.grid}>
            {
                dataPro.map(({titulo, link, imagen}, index)=>(
                    <Grid item key={index} xs={8} sm={8} md={6}>
                        <Card className={classes.card1}>
                            <CardMedia image={imagen} className={classes.caratula} titulo="caratula"/>
                            <CardContent>
                            <Link href={link} color="primary" target="_blank">
                            {titulo}
                            </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
          </Grid>
         </div>
      </div>
    )
}


const useStyles = makeStyles((theme) =>({

    section: {
      minHeight: '100vh',
      color:"black",
  
    },
    sectiondark: {
        backgroundColor: "#343",
        
      
    },
    grid:{
        marginTop: theme.spacing(4),
        margin: "0 7rem",
        [theme.breakpoints.down("sm")]:{
            margin: "0 auto",
        },
        [theme.breakpoints.down("xs")]:{
            margin: "0 auto",
        },
    },
    sectioncontent:{
    maxWidth: "90vw",
    margin: "0 auto",


    },
    card1:{
        maxWidth: 355,
        height: 205,
        backgroundColor: "rgb(218, 238, 162)",
        margin: theme.spacing(0.5),
        
    },
    caratula:{
        height: 140,

        margin: theme.spacing(1),
    }
  }))
export default Skill
