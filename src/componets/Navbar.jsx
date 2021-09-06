import { AppBar, List , makeStyles,Drawer,Toolbar, IconButton, Divider } from '@material-ui/core';
import Logo from "../imgenes/logo.png";
import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import {useState} from "react"
import CancelIcon from '@material-ui/icons/Cancel';

const links = [
    {
        id: "about",
        text: '¿Quien Soy?',
        icon: <PermIdentityTwoToneIcon fontSize="large"/>
    },
    {
        id: "skill",
        text: 'Mis Proyectos',
        icon: <EmojiObjectsTwoToneIcon fontSize="large"/>
    },
    {
        id: "myWork",
        text: 'Testimonios',
        icon: <WorkTwoToneIcon fontSize="large"/>
    },
    {
        id: "contact",
        text: 'Contacto',
        icon: <InsertCommentTwoToneIcon fontSize="large"/>
    }
]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
          <AppBar position="sticky" className={classes.root}>
         <Toolbar className={classes.toolbar}>
         <a href= "about">
         
         <img src={Logo } className={classes.logo} alt= "Logo"/>
         </a>
         <List className={classes.list}>
         {
            links.map(({id,text}, index) =>(
                <Link key={index}
                 to ={id} spy ={true} 
                 ActiveClass = 'active' 
                 smooth={true} 
                 duration={500}
                  offset={-64}>{text}</Link>
            ))
         }
         </List>
         <IconButton edge="end"className={classes.listbottom} onClick={()=>setOpen(true)}>
        <MenuTwoToneIcon fontSize = "large" />
        </IconButton>
         </Toolbar>
          </AppBar>
          <Drawer anchor="right" open={open} onClose={()=>setOpen(false)} className={classes.menul}>
          <IconButton onClick={()=>setOpen(false)} className={classes.close}>
          <CancelIcon fontSize="large"  />
          </IconButton>
          <Divider />
          {
            links.map(({id,text,icon}, index) =>(
                <Link key={index} 
                to ={id} 
                className={classes.menul2}
                spy ={true} 
                ActiveClass = 'active' 
                smooth={true} 
                duration={500} 
                offset={-64}>
                    <span>
                    
                    {icon}
                   
                    </span>{text}
                
                </Link>
            ))
         }
          </Drawer> 
        </>  
    )
}


const useStyles = makeStyles((theme) =>({
    root:{
        backgroundColor: "#FFFF",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor:"#002",
        alignItems: "center",
        "& img":{
            height: '3rem',
            width: "8rem",
        }
    },
    Logo:{
         objectFit: "contain",
        "&:hover":{
            cursor:'pointer',
        }
    },
    list: {
        [theme.breakpoints.down("sm")]: {
            display:"none"
        },
        "& a":{
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: 'bold',
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            paddingLeft: "5px",
            borderBottom: "2px solid tomato",
            borderLeft: "2px solid tomato",
            boxShadow: "-2px 2px 5px tomato"
        }
    },
    listbottom: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#fff",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    menul2:{
        color: "blue",
        width: "30vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
    },
    menul:{

        "& a":{
            margin: theme.spacing(5,0,0,4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold",
        },
        "& a:hover":{
            color: "tomato",
            cursor: "pointer",
        }

    },
    close:{
        color: "red",
        position: "absolute",
        top: 0,
        right:10,
    }
  }))

export default Navbar

