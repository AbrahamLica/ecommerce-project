import {  createContext, useReducer } from "react";
import { ActionType, ShopReducerInitialStateType, ContextType, InitialStateContextType, ChildrenType } from "../Types/types";
import { data } from "../Data/data";

////////////////////////  REDUCER  ////////////////////////////////

export const ShopReducerInitialState: ShopReducerInitialStateType = {
    qtdItensCarrinho: 0,
    valorTotal: 0,
    array: data
}

export function reducerShop(state: ShopReducerInitialStateType, action: ActionType) {
    switch (action.type) {
        case 'OPEN_CADASTRO':
            return {...state, isOpenModalCadastro: action.payload.modalCadastro}
            break;      
    }
    return state
}


/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
    shop: ShopReducerInitialState,
}

export const Context = createContext<ContextType>({
    state: ContextInitialState,
    dispatch: () => null
})  

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
    shop: reducerShop(state.shop, action),
})

export function ContextProvider({children}: ChildrenType) {

    const [state, dispatch] = useReducer(mainReducer, ContextInitialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}