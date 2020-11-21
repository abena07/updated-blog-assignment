import React, {useState} from 'react'
import {v1 as uuid} from  "uuid"
import UpVotes from './UpVotes'
import DownVotes from './DownVotes'

function NewBlog() {
    const [title, setTitle]=useState("")
    const[ author, setAuthor]=useState("")
    const[content, setContent]=useState("")
    const[post, setPost]=useState([])


    const handleTitleInput=(event)=>{
        setTitle(event.target.value)
    }

    const handleAuthorInput=(event)=>{
        setAuthor(event.target.value)
    }

    const handleContentInput=(event)=>{
        setContent(event.target.value)
    }
    const handlePostInput=(event)=>{
        event.preventDefault()
        setPost([
            ...post,
            {
            id:uuid(),
            title : title,
            author: author,
            content: content
            }
        ])
        console.log(post)
        setTitle("")
        setContent("")
        setAuthor("")
    }

    return (
        
        <div>
            <form>
            <label><h3>New Post</h3></label>
            

            <label ><h4>Title </h4></label>
           <p> <input  value={title} onChange={handleTitleInput}/> </p>

            <label><h4>Author</h4></label>
           <p> <input value={author} onChange={handleAuthorInput}/> </p>

            <label><h5>Date</h5></label>
            <input />
        
            <label><h5> Content</h5></label>
            <input value={content} onChange={handleContentInput}/>
            <br></br>

            <button style={{color:"green"}}onClick={handlePostInput}> Post away!!</button>
            
            </form>
            
            <ul>
                {post.map((post)=>
                <li key={post.id}>

                    {post.title} {post.author} {post.content}
                    <UpVotes/>
                <DownVotes/>
                </li>)
                
                }

            </ul>
        </div>
    )
}

export default NewBlog
