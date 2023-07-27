import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ToDo = () => {
    const [todo, setTodo] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setTodo(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <div className="container text-center">
                <div className='row'>
                    {
                        todo.map(todo =>
                            <div className="col">
                                <div className="card" style={{ width: "18rem" }}>

                                    <div className="card-body">
                                        <div className="card-title" key={todo.id}>
                                            <h5 className="card-text">{todo.title}</h5>
                                            <h5 className="card-text">{todo.completed}</h5>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default ToDo;