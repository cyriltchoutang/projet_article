import axios from "axios";

const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case "LOADARTICLES":{ //Loadarticle donne à articles,  action.payload qui sera un tableau d’objet.
            console.log('ttttttttttttttttttttttttttttttttttttttttttttttttttttttttt')
            return {
                ...state, // copie du state
                articles: action.payload // recuperera l'article (action.payload est un tableau d'objet)
          
            }
        }
        case "DELETE":{
            const newArr = [...state.articles];

            const newArr1 = newArr.filter(valeur => { // on retourne un tableau sans la valeur qu'on a sélectionné
                return valeur.id !== action.payload; // retourne moi seulement ce qui est different de cet id. D'ou tout le tableau sauf l'id
            })
            console.log(newArr1)
            return {
               articles: newArr1 
            }
        }
        case "MODIFARTICLE":{ //Modification
            const newArr = [...state.articles]; // copie de l'ancien tableau
           // Object.keys(newArr))
             newArr.map(valeur => {
                valeur.id === action.payload.id && (valeur.title = action.payload.title) 
                valeur.id === action.payload.id && (valeur.body = action.payload.body)
             })

            return {
                ...state, // copie du state  // cependant aucun impact. On peut même le mettre en comm daprès moi
                articles: newArr // recuperera l'article (action.payload est un tableau d'objet)
            }
        }
        
        case "ADDARTICLE":{
             //   console.log(state)
            //const newArr = [...state.articles]; // copie de l'ancien tableau
            //newArr.unshift(action.payload) // rajout de l'article au debut du tableau grâce à unshift
           // console.log(action.payload)
            //console.log(newArr)

            return  getArticles // retourne le state copié avec le nouvel article
                
            // articles: newArr
            //  ...state,
            // articles: newArr
           // }
        }
    }
    return state;
}

export default articleReducer;



export const getArticles = () => dispatch => {  // notre dispatcher qui nous permettra de recuperer les infos depuis une API

console.log('reeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    // fetch("https://jsonplaceholder.typicode.com/posts/") // recupere des textes venant d'une api
    // .then(response => response.json())
    // .then(data => {
    //     dispatch({ //Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
    //         type: 'LOADARTICLES',
    //         payload: data
    //     })
    // })


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
            .then(token => affichePokemon(token))
            .then(token => console.log(token))
       

// const creerPokemon = token => { 
//     axios
//     .post(
//             "http://localhost:3000/api/pokemons/",
//             {
//                 name: "balbi",
//                 hp: 7,
//                 cp:4,
//                 picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
//                 types: [
//                     "Plante",
//                     "Poisson",
//                         "Feu"
//                   ]
//             },
//             { headers: { Authorization: `Bearer ${token}` } }
//         )
//         .then((res) => res.data)
//         // .then(data => 
//         //      dispatch({ 
//         //         // Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
//         //                  type: 'LOADARTICLES',
//         //                  payload: data
//         //              }),
//         // //     tet()
//         // //     })
//         // )
//         .then(data => console.log(data))

// }

const affichePokemon = token => { 
  axios
    .get("http://localhost:3000/api/pokemons", {
         headers: { Authorization: `Bearer ${token}` }}
        )
        .then((res) => res.data)
        .then(data => data.data)
        .then(data => (  // Attention c'est une parenthese après le then et non l'accolade comme d'habitude
            dispatch({ //Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
                type: 'LOADARTICLES',
                payload: data
            }),
            console.log(data)
        ))
        .catch('errorrrrrrrrrrrrrrrrrrrr')
}



}

//  const fetchPokemonlist = (token) => {
//     return axios
//       .get("http://localhost:3000/api/personnesmessagespokemons", {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then((res) => res.data)
//       .then((res) => console.log(res));
//   };

// export const getArticles = () => dispatch => {  // notre dispatcher qui nous permettra de recuperer les infos depuis une API

//     const data = 
//     [  {
//         "userId": 1,
//         "id": 1,
//         "title": "bonjour le diamant",
//         "body": "jesere que tu vas bien"
//       },
//       {
//         "userId": 1,
//         "id": 2,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       }
//     ]

//         dispatch({ //Ce dipatch est LoadArticles (situé dans la fonction articleReducer dans articleReducer.js)
//             type: 'LOADARTICLES',
//             payload: data
//         })
// }