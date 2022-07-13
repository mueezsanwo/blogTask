import React from "react";

export default function Contents({contents = []}) {
    return (
        <div>
            <ul>
                {
                contents.map((content) => ( 
                    <li>{content.title}</li>
                ))
                }
            </ul>
        </div>
    )
}