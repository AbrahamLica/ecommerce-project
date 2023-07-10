export type ShopReducerInitialStateType = {
    modalOpen: boolean
    openCart: boolean
    array: DataType[]
    pos: number
}

export type ActionType = {
    type: string
    payload: {
        [key: string]: any;
    }
}

export type ChildrenType = {
    children: React.ReactNode
}

export type DataType = {
    id: number
    name: string
    src: any 
    valor: number
}

export type ContextType = {
    state: InitialStateContextType;
    dispatch: React.Dispatch<any>;
}

export type InitialStateContextType = {
    shop: ShopReducerInitialStateType
    cart: ItemsCartReducerInitialStateType[]
}

//////////////////////////////////////////////////////

export type ItemsCartReducerInitialStateType = {
    itemName?: string
    qtdItem?: number
    valorUnidade?: number
    valorTotal?: number
    src?: string
}