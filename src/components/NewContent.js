import React, { useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


export default function NewContent({updateTrigger}){
    const [contentText, updateContentText] = useState('');

    function postContent(){
        if(contentText.length > 0){
            const newContentObject = {
                id: uuidv4(),
                title: contentText,
                author: 'myblog'
            }
            axios.post('http://localhost:3000/contents', newContentObject).then(() => {
                updateTrigger(uuidv4)
            })
        } else {
            alert('please enter text')
        }
    }

    function editContent() {
        axios.put(`${'http://localhost:3000/contents'}/1`, {
            id: 1,
            title: 'edited',
            author: 'my-blog'
        })
        .then((response) => {
            updateTrigger(uuidv4)
        })
    }

    return (
        <div className="blog">
            <p id="display">{contentText}</p>
            <input placeholder="add new blog post" id="input" onChange={(e) => updateContentText(e.target.value)} /><br></br>
            <button id="post-button" onClick={() => postContent()}>Post</button>
            <button id="edit-button" onClick={() => editContent()}>Edit</button>
        </div>
    )
}