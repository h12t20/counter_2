import {
    ActionType,
    maxTitleChangeAC,
    minTitleChangeAC,
    setHandlerAC,
    StateType
} from "../Redux/reducer";
import {connect} from "react-redux";
import {Set} from "./Set";
import {ChangeEvent} from "react";

const mapStateToProps = (state: StateType) => ({
    inputMinTitle: state.inputMinTitle,
    inputMaxTitle: state.inputMaxTitle,
    error: state.error
})
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        inputMinChangeHandler: (e: ChangeEvent<HTMLInputElement>) => dispatch(minTitleChangeAC(e.currentTarget.value)),
        inputMaxChangeHandler: (e: ChangeEvent<HTMLInputElement>) => dispatch(maxTitleChangeAC(e.currentTarget.value)),
        setHandler: () => {dispatch(setHandlerAC())}
    }
}
export const SetContainer = connect(mapStateToProps, mapDispatchToProps)(Set)