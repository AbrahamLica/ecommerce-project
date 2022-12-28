export type ShopReducerInitialStateType = {
    cartOpen: boolean
    qtdItensCarrinho: number
    valorTotal: number
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
}