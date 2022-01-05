import React from 'react'
const container = {
    width: 300,
    borderRadius:10,
    backgroundColor:'white'
}

function Post({author, content, time}) {
    console.log(author.avatar)
    
    return (
        <div style ={container}>
            <div style={{display: 'flex', alignItems:'center', paddingBottom: '10px'}}>
                <div>
                    <img src="unnamed.jpg" alt='' height="100"/>
                </div>
                <div>
                {author.name}
                <br/>
                {author.title}
                <br/>
                {time}
                </div>
            </div>
            <div style={{textAlign:'justify', padding:10}}>
            {content}
            </div>
            <div style={{padding:'10px'}}></div>
        </div>
    )
}

export default Post
