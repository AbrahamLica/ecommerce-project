export type ShopReducerInitialStateType = {
  modalOpen: boolean;
  modalDetailOpen: boolean;
  openCart: boolean;
  array: DataType[];
  pos: number;
  id: number;
  name: string,
  value: number,
  index: number
  src: string
};

export type DataType = {
  id: number;
  name: string;
  src: any;
  valor: number;
};

export type ActionType = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

export type ChildrenType = {
  children: React.ReactNode;
};

export type ContextType = {
  state: InitialStateContextType;
  dispatch: React.Dispatch<any>;
};

export type InitialStateContextType = {
  shop: ShopReducerInitialStateType;
  cart: ItemsCartReducerInitialStateType[];
};

//////////////////////////////////////////////////////

export type ItemsCartReducerInitialStateType = {
  id: number;
  name: any;
  itemName?: string;
  qtdItem?: any;
  valorUnidade?: any;
  valorTotal?: number;
  src?: string;
};
