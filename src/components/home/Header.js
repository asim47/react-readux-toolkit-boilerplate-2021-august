import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from "../../store/actions"

const Header = () => {

    const dispatch = useDispatch()


    const [IsLoading, setIsLoading] = useState(true)
    const [MyData, setMyData] = useState([])


    const todos = useSelector((state) => state.User.Todos)

    console.log(todos)

    useEffect(() => {
        getTodos()
    }, [])


    useEffect(()=>{
        // if(!todos) setMyData([])
        setMyData(todos)
    },[todos])


    async function getTodos() {
        setIsLoading(true)
        await dispatch(Actions.GettingTodos())
        setIsLoading(false)
    }

    if (IsLoading) return <h1>Loading......</h1>
    return (
        <>
            {
                MyData.length == 0 ? <h1>No Data Found!</h1> : null
            }
            {
                MyData.length > 0 && MyData.map((value, index) => {
                    return (
                        <div key={index}>
                            <h1>
                                {value.title}
                            </h1>
                            <br />
                            <hr />
                        </div>
                    )
                })
            }

        </>
    )
}

export default Header
