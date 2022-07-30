import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {StoreReducer} from "./ReducersCard/Reducer";


export const store = createStore(
    StoreReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
