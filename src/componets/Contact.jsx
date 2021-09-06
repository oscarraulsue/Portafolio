import { makeStyles, Typography} from '@material-ui/core';
import React from 'react'

const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
          <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          
         </div>
      </div>

    )
}


const useStyles = makeStyles((theme) =>({
    sectioncontent: {
        maxWidth: "90vw",
        margin: "0 auto",
        color:"black",
    },
    section: {
      minHeight: '100vh',
    },
    sectiondark: {
        backgroundColor: "#343",
        
    }
  }))
export default Contact
