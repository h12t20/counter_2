export type StateType = {
    value: number
    minValue: number
    maxValue: number
    error: string
    inputMinTitle: number
    inputMaxTitle: number
    displaySet: boolean
}
export type ActionType = ReturnType<typeof resetAC> | ReturnType<typeof minTitleChangeAC> |
    ReturnType<typeof maxTitleChangeAC> | ReturnType<typeof setHandlerAC> | ReturnType<typeof incHandlerAC> |
    ReturnType<typeof displaySetAC>
export const resetAC = () => ({type: 'RESET'}) as const
export const minTitleChangeAC = (value: string) => ({type: 'MIN_TITLE', value}) as const
export const maxTitleChangeAC = (value: string) => ({type: 'MAX_TITLE', value}) as const
export const setHandlerAC = () => ({type: 'SET_HANDLER'}) as const
export const incHandlerAC = () => ({type: 'INC_HANDLER'}) as const
export const displaySetAC = () => ({type: 'DISPLAY_SET'}) as const

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
                inputMinTitle: +action.value <= state.inputMaxTitle &&
                +action.value >= -1 ?
                    +action.value :  +action.value < -1 ? -1:state.inputMaxTitle,
                error: +action.value >= state.inputMaxTitle || state.inputMaxTitle < 1 ? 'Err1' :
                    +action.value < 0 ? 'Err2' : state.value >= state.maxValue ? state.value.toString() : ''
            }
        }
        case 'MAX_TITLE': {
            return {
                ...state,
                inputMaxTitle: +action.value >= state.inputMinTitle &&
                +action.value >= 0 ?
                    +action.value :  +action.value <0 ? 0: state.inputMinTitle,
                error: +action.value < 1 || +action.value <= state.inputMinTitle ? 'Err1' :
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
