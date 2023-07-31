export type StateType = {
    value: number
    minValue: number
    maxValue: number
    error: string
    inputMinTitle: number
    inputMaxTitle: number
    displaySet: boolean
}
export type ActionType = ResetACType | MinTitleChangeACType |
    MaxTitleChangeACType | SetHandlerACType | IncHandlerACType | DisplaySetACType
type ResetACType = ReturnType<typeof resetAC>
type MinTitleChangeACType = ReturnType<typeof minTitleChangeAC>
type MaxTitleChangeACType = ReturnType<typeof maxTitleChangeAC>
type SetHandlerACType = ReturnType<typeof setHandlerAC>
type IncHandlerACType = ReturnType<typeof incHandlerAC>
type DisplaySetACType = ReturnType<typeof displaySetAC>

export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}
export const minTitleChangeAC = (value: string) => {
    return {
        type: 'MIN_TITLE',
        payload: {value}
    } as const
}
export const maxTitleChangeAC = (value: string) => {
    return {
        type: 'MAX_TITLE',
        payload: {value}
    } as const
}
export const setHandlerAC = () => {
    return {
        type: 'SET_HANDLER'
    } as const
}
export const incHandlerAC = () => {
    return {
        type: 'INC_HANDLER'
    } as const
}
export const displaySetAC = () => {
    return {
        type: 'DISPLAY_SET'
    } as const
}
const defaultState: StateType = {
    value: 0,
    minValue: 0,
    maxValue: 10,
    inputMinTitle: 0,
    inputMaxTitle: 10,
    error: '',
    displaySet: false
} as const
export const reducer = (state: StateType = defaultState, action: ActionType): StateType => {
    switch (action.type) {
        case 'RESET': {
            return {
                ...state,
                value: state.minValue ? state.minValue : 0,
                inputMinTitle: state.minValue ? state.minValue : 0,
                inputMaxTitle: state.maxValue ? state.maxValue : 10,
                error: ''
            }
        }
        case 'MIN_TITLE': {
            return {
                ...state,
                inputMinTitle: +action.payload.value <= state.inputMaxTitle &&
                +action.payload.value >= -1 ?
                    +action.payload.value : state.inputMinTitle,
                error: +action.payload.value >= state.inputMaxTitle || state.inputMaxTitle < 1 ? 'Err1' :
                    +action.payload.value < 0 ? 'Err2' : state.value >= state.maxValue ? state.value.toString() : ''
            }
        }
        case 'MAX_TITLE': {
            return {
                ...state,
                inputMaxTitle: +action.payload.value >= state.inputMinTitle &&
                +action.payload.value >= 0 ?
                    +action.payload.value : state.inputMaxTitle,
                error: +action.payload.value < 1 || +action.payload.value <= state.inputMinTitle ? 'Err1' :
                    state.inputMinTitle < 0 ? 'Err2' : state.value >= state.maxValue ? state.value.toString() : ''
            }
        }
        case 'SET_HANDLER': {
            return state.error.slice(0, 2) !== 'Er' ? {
                ...state,
                minValue: state.inputMinTitle,
                maxValue: state.inputMaxTitle,
                value: state.inputMinTitle,
                displaySet:false,
                error: ''
            } : state
        }
        case 'INC_HANDLER': {
            return state.error.slice(0, 2) !== 'Er' ? {
                ...state,
                value: state.value < state.maxValue ? state.value + 1 : state.maxValue,
                error: !state.error && state.value >= state.maxValue - 1 ? state.value.toString() : state.error
            } : state
        }
        case 'DISPLAY_SET': {
            return {...state, displaySet:true}
        }
        default:
            return state
    }
}
