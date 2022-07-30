
import {CARDS, CARDS_ITEM, INTL, ITEM_PRODUCT} from "../Actions";
import {LOCALES} from "../../Intl/locales";
import {ReducerService} from "./ReducerService";

const initialState = {
    mainIntl : LOCALES.RUSSIAN,
    itemProduct : [],
    cards : [],
    cardsItem : []
}

export const StoreReducer = (state = initialState ,action ) => {
    switch (action.type) {
        case INTL :
            return {
                ...state,
                mainIntl: action.payload
            }
        case ITEM_PRODUCT :
            return {
                ...state,
                itemProduct: action.payload
            }
        case CARDS :
            return {
                ...state,
                cards: action.payload
            }
        case CARDS_ITEM :
            return {
                ...state,
                cardsItem: action.payload
            }
        default:
            return state
    }
}

export const reducerActions = {
    getCardAction: (data) => ({
        type: CARDS,
        payload: data
    }),
    getCardItem: (data) => ({
        type: CARDS_ITEM,
        payload: data
    })
}

export const createCards = () => async (dispatch) => {
    try {
        const response = await ReducerService.getCards();
        dispatch(reducerActions.getCardAction(response.data));
    } catch (e) {
        console.log(e.err)
    }
};

export const CreateItem = (id) => async (dispatch)=>{
  try {
      const response = await ReducerService.getItem(id)
      dispatch(reducerActions.getCardItem(response.data))
  }catch (e) {
      console.log(e.error)
  }
}

