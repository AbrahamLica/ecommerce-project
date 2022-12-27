export type ShopReducerInitialStateType = {
    qtdItensCarrinho: number
    valorTotal: number
    array: DataType[]
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
    valor: string
}

export type ContextType = {
    state: InitialStateContextType;
    dispatch: React.Dispatch<any>;
}

export type InitialStateContextType = {
    shop: ShopReducerInitialStateType
}