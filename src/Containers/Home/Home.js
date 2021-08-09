import React from 'react'
import './Home.css' 
import Card from '../../Components/Card/Card' //Importe card.js
import {useSelector, useDispatch} from 'react-redux' // Les deux Hook qui vont nous aider à dispatch et utiliser le state
import {useEffect, useState} from 'react'
import {getArticles} from '../../Redux/Articles/articleReducer' // c'est notre fonction asynchrone issue du reducer qui va nous permettre de recuperer les données venant de l'API
import {v4 as uuidv4} from 'uuid' // Permet d'avoir des id aléatoires
import {Link} from "react-router-dom"; //import librairie Pour mettre des liens à nos routes


export default function Home() {


//Ensuite on reçoit nos articles venant de la fonction articleReducer dans articleReducer.js avec le const {articles = useSelector (dans Home.js), et il mettra à jour le composant quand le state.articleReducer  changera, et ça affichera notre résultat à travers articles.map ci-dessous.
const {articles} = useSelector(state => ({ // selectionne notre state
    ...state.articleReducer // effect dabord selector ensuite mais c'est en parallele dc... l'objet state de notre articleReducer. On fait du destructuring (permet de recuperer des données d'un tableau ou d'un objet) pour prendre articles depuis notre objet ici présent(state.articleReducer). cependant je me rends compte qu'il recupere juste la structure du tableau/  objet et c'est le useEffect qui recupere les données issues du getArticle Mais comme c'est asynchrone ca fait les choses en paralleles  
}))
//console.log(articles)
const dispatch = useDispatch() // Methode permettant l'envoie des elements venant du fetch et  qu'on lancera quand le compcosant aura bien chargé (pour la première fois). D'où l'utilisation du useEffect

useEffect(() => { //Une fois que le use effect(dans home.js) apparait et a fini de charger pour la première fois le composant, il dispacth le getArticle. Ensuite il va trigger(déclencher) le middleware ( applymiddleware dans store.js) et exécuter le middleware thunk (dans store.js)
    if(articles.length === 0){ // Au premier chargement de la page, inscription est vide d'ou length est 0. Le use effect va donc gâce à son dispatch chargé le tableau.d'où en actualisant la page une deuxieme fois, le tableau est éjà rempli. La boucle nous sert à éviter le chargement du tableau à chaque fois. Car en mettant dispatch(getArticles()) hors de la boucle, chaque fois il chargera.<< C'est si le tableau n'est pas encore rempli, on effectue un dispatch avec le getArticle. Sinon on laisse. >>
        dispatch(getArticles());
    }
},[]) // Pour eviter d'appeler l'api à chaque MAJ du composant

const Suppression = (val) =>{  // pour la suppression
    dispatch({
        type: "DELETE",
        payload: val
    })
}




    return (
        <>
          <h1 className='home-title'>Tous les articles</h1>  
            <div className="container-cards">
                 {/* {console.log(articles)}  */}

                {articles.map(item => { // retourne nos données venant de articles sous forme de liste
                    return (
                        <Card key={uuidv4()}> { /* uuidv4: clé aléatoire; item.title (title est une propriété des éléments venant de note API): nous donne nos infos depuis notre APIimporte Card */}
                            {/*ou key={item.id} si on n'est pas dans un props*/ }
                            {/* { console.log(item) } */}
                            <h2>{item.name}</h2>
                            
                            {/* <Link to="/article" itemo={item.title}>
                                <li>Lire l'article</li>
                            </Link>   */}
                            <Link 
                            to={{
                                pathname: "/article",
                                search: item.body,
                                search1: item.name,
                                //search1: item.title,
                                //hash: "#the-hash",
                                //state: { fromDashboard: true }
                            }}
                            ><li>Lire l'article</li> 
                            </Link>
                            <Link 
                            to={{
                                pathname: "/ecrire",
                                search: item.body,
                                search1: item.name,
                               // search1: item.title,
                                search2: item.id
                                //hash: "#the-hash",
                                //state: { fromDashboard: true }
                            }}
                            ><li>Modifier l'article</li> 
                            </Link>
                            <li onClick = {() => Suppression(item.id)}>Supprimer l'article</li> 
                               {/* <a href={ `/article?article=${item.title}` }>lire l'article</a>  */}
                        </Card>  
                )
                })}  
            </div>
        </>
    )
}
