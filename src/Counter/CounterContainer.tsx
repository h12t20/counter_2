import {ActionType, incHandlerAC, resetAC, StateType} from "../Redux/reducer";
import {connect} from "react-redux";
import {Counter} from "./Counter";

const mapStateToProps = (state: StateType) => ({
    error: state.error,
    value: state.value
})
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        incHandler: () => dispatch(incHandlerAC()),
        resetHandler: () => dispatch(resetAC()),
    }
}
export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)