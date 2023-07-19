import { createContext, useReducer } from "react";
import {
  ActionType,
  ShopReducerInitialStateType,
  ContextType,
  InitialStateContextType,
  ChildrenType,
  ItemsCartReducerInitialStateType,
} from "../Types/types";
import { data } from "../Data/data";

////////////////////////  REDUCER SHOP  ////////////////////////////////

export const ShopReducerInitialState: ShopReducerInitialStateType = {
  modalOpen: false,
  modalDetailOpen: false,
  openCart: false,
  array: data,
  pos: 0,
  id: 0,
  name: "",
  value: 0,
  index: 0,
  src: "",
};

export function reducerShop(
  state: ShopReducerInitialStateType,
  action: ActionType
) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: action.payload.modalOpen,
        id: action.payload.id,
        name: action.payload.name,
        value: action.payload.value,
        index: action.payload.index,
        src: action.payload.src,
      };
      break;

    case "OPEN_MODAL_DETAILS":
      return {
        ...state,
        modalDetailOpen: action.payload.modalDetailOpen,
        src: action.payload.src,
      };
      break;

    case "CLOSE_MODAL_DETAILS":
      return {
        ...state,
        modalDetailOpen: action.payload.modalDetailOpen,
      };
      break;

    case "CLOSE_MODAL":
      return { ...state, modalOpen: action.payload.modalOpen };
      break;

    case "OPEN_CART":
      return { ...state, openCart: action.payload.openCart };
      break;

    case "CLOSE_CART":
      return { ...state, openCart: action.payload.openCart };
      break;
  }
  return state;
}

////////////////////////  REDUCER CART  ////////////////////////////////

export const ItemsCartReducerInitialState: ItemsCartReducerInitialStateType[] =
  [];

export function reducerCart(
  state: ItemsCartReducerInitialStateType[],
  action: ActionType
) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      let newState = [...state];
      newState.push({
        id: action.payload.id,
        itemName: action.payload.itemName,
        qtdItem: action.payload.qtdItem,
        valorUnidade: action.payload.valorUnidade,
        valorTotal: action.payload.valorTotal,
        src: action.payload.src,
        name: undefined,
      });
      return newState;
      break;

    case "REMOVE_ITEM_FROM_CART":
      let newStatee = [...state];
      newStatee = newStatee.filter((item) => item.id !== action.payload?.id);
      return newStatee;
      break;

    case "RESET_CARRINHO":
      return ItemsCartReducerInitialState;

    case "DECREASE_QT":
      let newStateee = [...state];
      newStateee[action.payload.pos].qtdItem = action.payload.qtdItem;
      return newStateee;
      break;
  }
  return state;
}

/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
  shop: ShopReducerInitialState,
  cart: ItemsCartReducerInitialState,
};

export const Context = createContext<ContextType>({
  state: ContextInitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
  shop: reducerShop(state.shop, action),
  cart: reducerCart(state.cart, action),
});

export function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(mainReducer, ContextInitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
