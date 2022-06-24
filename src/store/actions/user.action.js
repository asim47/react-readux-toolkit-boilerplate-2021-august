import axios from "axios"
import * as ReducerActions from "../reducers"


export const GettingTodos = () => async (dispatch, getState) => {
    try {

        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

        dispatch(ReducerActions.setTodos(res.data))

    } catch (error) {
        console.log(error)
    }
}