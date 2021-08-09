import React from 'react'
import Home1 from '../Home/Home'
import {useSelector, useDispatch} from 'react-redux' // Les deux Hook qui vont nous aider à dispatch et utiliser le state
import {useEffect, useState} from 'react'
import {getArticles} from '../../Redux/Articles/articleReducer'

export default function Article(props) {
 
    return (
            <>
            <h1>ttttttttttttttttttttttttttttttttttttt</h1>
            <h1>ttttttttttttttttttttttttttttttttttttt</h1>
            <h1>ttttttttttttttttttttttttttttttttttttt</h1>
            <h1>ttttttttttttttttttttttttttttttttttttt</h1>
               {/* <h1>bonjour {match.params.item} </h1> */}
               <h1>Titre: {props.location.search1} </h1>
               <h2>Contenu{props.location.search} </h2>
            </>


        // <div>
        //        <Home1>{props.articles.title}</Home1> {/* children car on ne sait pas encore ce qu'on mettra à l'interieur */}
        // </div>
        
    )
}
