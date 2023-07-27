import { useEffect, useState } from "react"
import axios from 'axios'

export const Comments = () => {
    const [commentsec, setCommentSec] = useState([]);
    const [search, setSearch] = useState("")
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                setCommentSec(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])



    return (
        <div className="container">

            <h1 className="heading">Fetch Data From API</h1>
            <input type="text" placeholder="search..." className='search' onChange={(e) => setSearch(e.target.value)} />
            <div className='box-container'>
                {
                    commentsec.filter((item) => {
                        if (search === "") {
                            return item
                        }
                        else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                        else if (item.email.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                        else if (item.body.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    })
                        .map((item, index) => (
                            <div className='box'>

                                <h3><span className='idspan'>ID : {item.id}</span></h3>
                                <p><span>Name :</span> {item.name}</p>
                                <p><span>E-Mail :</span> {item.email}</p>
                                <p><span>Body :</span> {item.body}</p>

                            </div>
                        ))}
            </div>
        </div>
    )
}

