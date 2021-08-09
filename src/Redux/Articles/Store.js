import {createStore, applyMiddleware, combineReducers} from 'redux'// import. CombineReducers, c'est pour mettre plusieurs reducers ensemble. applymiddleware, c'est pour gerer notre systeme API
import articleReducer from './articleReducer' // Import du reducer
import thunk from 'redux-thunk'

const rootReducer = combineReducers({  // On utilisera un seul reducer. Cependant on a mis plusieurs si jamais on veut en rajouter
    articleReducer
})

//thunk permettra de faire des appels asynchrones, donc exécuter la fonction getArticles(dans articleReducer.js) et ensuite envoyer un dispatch. 
const store = createStore(rootReducer, applyMiddleware(thunk)) // applymiddleware(thunk) qu'on va exécuter lorsqu'on voudra passer une fonction à un dispacth pour pouvoir faire un appel asynchrone

export default store; // Pourqu'il soit appelé ailleur