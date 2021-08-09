
import React from 'react'
import Form from '../../Components/Form/Form' // Import du formulaire
export default function AddArticle(props) {
   // console.log(props.location.search)
    return (
        <>
            <Form 
            body1={props.location.search} // C'est pour la modification
            title1={props.location.search1}
            id={props.location.search2}
            />
        </>
    )
}
