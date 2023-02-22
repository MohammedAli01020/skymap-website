import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, updateName} from "@/store/counterSlice";

export default function Counter() {

    const state = useSelector((state) => state.counter)

    const dispatch = useDispatch()
    return(<>

        <h1>{state.value}</h1>

        <h2>{state.name}</h2>


        <input type={"text"} onChange={e => {
            console.log(e.target.value)
            dispatch(updateName(e.target.value))

        }}/>
        <button style={{padding: 20, margin: 10}} onClick={e=> {
            e.preventDefault()
            dispatch(increment())
        }}>add</button>
        <button style={{padding: 20, margin: 10}} onClick={e=> {
            e.preventDefault()
            dispatch(decrement())
        }}>minus</button>
    </>);

}