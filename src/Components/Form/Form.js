import axios from "axios";

import React from 'react'
import {useSelector, useDispatch} from 'react-redux' // Les deux Hook qui vont nous aider à dispatch et utiliser le state
import {useEffect, useState} from 'react' // useEffect Charge le composant
import {v4 as uuidv4} from 'uuid' // Permet d'avoir des id aléatoires
import './Form.css'

export default function Form(props) {


    const [article, setArticle] = useState({  // declaration du usestate qui permettra d'ajouter des infos dans notre formulaire
        title:"",
        body:"",
        id: uuidv4()
    })

    const [modif, setModif] = useState({  // Pour faire la modification
        title:props.title1,
        body:props.body1,
        id:props.id
    })

    const addNewTitle = e => { // Le but ici est d'actualiser notre state en faisant du towaysdatabanding (mal ecrit) 
               const newObjState = {...article, title: e.target.value} // on copie le state actuel au fur et à mesure qu'on saisi, et on change le titre avec notre valeur
        setArticle(newObjState)
    }

    const modifTitle = e => { // Le but ici est d'actualiser notre state en faisant du towaysdatabanding (mal ecrit) 
        const newObjState = {...modif, title: e.target.value} // on copie le state actuel, et on change le titre avec notre valeur
        setModif(newObjState)
    }

    const addNewBody = e => {
        const newObjState = {...article, body: e.target.value} // on copie le state actuel, et on change le titre avec notre valeur
        setArticle(newObjState)
    }

    const modifBody = e => {
        const newObjState = {...modif, body: e.target.value} // on copie le state actuel, et on change le titre avec notre valeur
        setModif(newObjState)
    }


    const dispatch = useDispatch() // On instancie le dispatch

    const handleForm = e => { //lors de l'envoie du formulaire
        e.preventDefault(); // rafraichissement facile JS
        

        const newArticle = { //  Nouvelle valeur saisie (useState) qui ne nous sert pas apparement
            title: article.title,
            body: article.body
        }
        //console.log(article.title)
        console.log(article)
        console.log(modif)
        if(props.title1){
console.log('aaaaaaaaaaaaaaaaaaaaa')

            axios
            .post(
                    "http://localhost:3000/api/login",
                    { username: "pikachu", password: "pikachu" },
                    { headers: { "Content-Type": "application/json" } }
                )
                 // .then(token => console.log(token))
        
                  
                //   .then(data => {
                //     dispatch({ 
                //        // Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
                //                 type: 'LOADARTICLES',
                //                 payload: data
                //             }),
                //     tet()
                //     })
                    .then((res) => res.data)
                    .then((data) => data.token)
                    //.then(token => ( 
                    //    creerPokemon(token),affichePokemon(token)))
                    .then(token => updatePokemon(token))
                    .then(token => console.log(token))

        const updatePokemon = token => {     
            axios.put(`http://localhost:3000/api/pokemons/${modif.id}`, 
                {
                    name: modif.title,
                    hp: 7,
                    cp:4,
                    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
                    types: [
                        "Plante",
                        "Poisson",
                            "Feu"
                    ]
                },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((res) => res.data)
            // .then(data => 
            //      dispatch({ 
            //         // Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
            //                  type: 'LOADARTICLES',
            //                  payload: data
            //              }),
            // //     tet()
            // //     })
            // )
            .then(data => console.log(data))

        axios
        .get("http://localhost:3000/api/pokemons", {
           headers: { Authorization: `Bearer ${token}` }}
          )
          .then((res) => res.data)
          .then(data => data.data)
          .then(data => (
              dispatch({ //Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
                  type: 'LOADARTICLES',
                  payload: data
              }),
              console.log(data)
          ))
          .catch('errorrrrrrrrrrrrrrrrrrrr')

        }    
        // dispatch({ // cas de la modification ensuite on dispatch pour les envoyer à articleReducer
        //     type: "MODIFARTICLE",
        //     payload: modif
        // })
        }else{
            console.log('bbbbbbbbbbbbbbbbbbbbbb')

            axios
    .post(
            "http://localhost:3000/api/login",
            { username: "pikachu", password: "pikachu" },
            { headers: { "Content-Type": "application/json" } }
        )
         // .then(token => console.log(token))

          
        //   .then(data => {
        //     dispatch({ 
        //        // Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
        //                 type: 'LOADARTICLES',
        //                 payload: data
        //             }),
        //     tet()
        //     })
            .then((res) => res.data)
            .then((data) => data.token)
            //.then(token => ( 
            //    creerPokemon(token),affichePokemon(token)))
            .then(token => creerPokemon(token))
            

        const creerPokemon = token => { 
                axios
                .post(
                        "http://localhost:3000/api/pokemons/",
                        {
                            name: article.title,
                            hp: 7,
                            cp:4,
                            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
                            types: [
                                "Plante",
                                "Poisson",
                                    "Feu"
                              ]
                        },
                        { headers: { Authorization: `Bearer ${token}` } }
                    )
                    .then((res) => res.data)
                    // .then(data => 
                    //      dispatch({ 
                    //         // Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
                    //                  type: 'LOADARTICLES',
                    //                  payload: data
                    //              }),
                    // //     tet()
                    // //     })
                    // )
                    .then(data => console.log(data))

            axios
              .get("http://localhost:3000/api/pokemons", {
                   headers: { Authorization: `Bearer ${token}` }}
                  )
                  .then((res) => res.data)
                  .then(data => data.data)
                  .then(data => (
                      dispatch({ //Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
                          type: 'LOADARTICLES',
                          payload: data
                      }),
                      console.log(data)
                  ))
                  .catch('errorrrrrrrrrrrrrrrrrrrr')
          }
        // dispatch({ // ensuite on dispatch pour les envoyer à articleReducer
        //     type: "ADDARTICLE",
        //     payload: article
        // })
        }

        setArticle({ // pour remettre le champs vide juste après
            title:"",
            body:""
        })

        setModif({ // pour remettre le champs vide juste après la modif
            title:"",
            body:""
        })


    }
    


    return (
        <>
          <h1 className="title-form">Ecrivez un article</h1>  
          <form onSubmit={handleForm} className="container-form"> {/*Handleform, fonction a exécuter au moment du click*/}
              <label htmlFor="title">Titre</label>
              
              { props.title1 ?

              <input 
              value={modif.title} // recupération du titre de l'article
              onInput={modifTitle} // Ajout du titre
              type="text" id="title"/>
              
              :
              <input 
              value={article.title} // recupération du titre de l'article
              onInput={addNewTitle} // Ajout du titre
              type="text" id="title"
              placeholder="Entrez le titre"/>

            }


              <label htmlFor="article">Votre article</label>

              { props.body1 ?
              <textarea 
              value={modif.body} //idem comme titre
              onInput={modifBody} //idem comme titre // Attention à ne pas mettre les parentheses. car en le faisant, ça rafraichi directement. si on veut faire passer une valeur en parametre, effectuer une fonction anonyme
              id="article"></textarea>
              :
              <textarea 
              value={article.body} //idem comme titre
              onInput={addNewBody} //idem comme titre
              id="article" placeholder="Votre article"></textarea>
              
              }

              <button>Envoyer l'article</button>
          </form>
        </>
    )
}
