import { makeStyles } from "@material-ui/core";
import About from "./componets/About";
import Contact from "./componets/Contact";
import MyWork from "./componets/MyWork";
import  Navbar  from "./componets/Navbar";
import Skill from "./componets/Skill";




function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Navbar />
    <About title = "¿Quien Soy" id="about" dark ={true} />
    <Skill title = "Mis Proyectos" id="skill" dark ={false} />
    <MyWork title = "Testimonios" id="myWork" dark ={true} />
    <Contact title = "Contacto" id="contact" dark ={false} />
    </div>
  );
}
const useStyles = makeStyles((theme) =>({
  root: {

  }
}))
export default App;
