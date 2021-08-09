import Navbar from './Components/Navbar/Navbar' // Import de notre Navbar
import Home from './Containers/Home/Home' // Import l'accueil
import AddArticle from './Containers/AddArticle/AddArticle' // Import Ecrire (formumlaire)
import Contact from './Containers/Contact/Contact' // Import la partie contact
import Article from './Containers/AfficheArticle/Article' //import article
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

function App() {
  return (
    // <div className="App">
    //   <Navbar/> {/*Faire apparaître notre Navbar*/}
    //   <Home/> {/* Faire apparaître notre accueil */}
    //   <Form/> {/*Faire apparaître notre formulaire à ecrire*/}
    //   <Contact/> {/*Faire apparaître la partie contact*/}
    // </div>

    <Router>

    <Navbar/> {/*  Pour avoir notre navgateur quelque soit la route */}

    <Switch>
      <Route path ="/" exact component={Home}/> {/*exact permet de trouver le chemin exact. Le swith permet d'eviter que les routes se match. path le chemin, et component le component*/}
      <Route path ="/ecrire" exact component={AddArticle}/> 
      <Route path ="/Contact" exact component={Contact}/> 
      <Route path ="/article" component={Article}/> 
    </Switch>    
    </Router>

  );
}

export default App;
