import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Comments = () => {
 
    const [comment, setComment] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                setComment(res.data)
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
                        comment.map(comment =>
                            <div className="col">
                                <div className="card" style={{ width: "18rem" }}>

                                    <div className="card-body">
                                        <div className="card-title" key={comment.id}>
                                            <h4 className="card-text">{comment.name}</h4>
                                            <h5 className="card-text">{comment.email}</h5>
                                            <h5 className="card-text">{comment.body}</h5>
                                            
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

export default Comments
