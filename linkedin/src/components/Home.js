import React from 'react'
import Post from './Post'

function Home() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('').then(JSON...)
        .then(data => {
            setData(data.feed)
            setLoading(false);
        })

    }, [])
    return (
        <div>
        {loading ? (<div>Loading</div>) :(<div> data.arr.map(d => {
            return(<Post)
        }))}
            Home
            <Post
            author={{name:"Koundinya Gangadharuni", avatar:"C:/Users/Lenovo/Documents/LinkedInClone/linkedin/unnamed.jpg", title:"Lifelong Learner, Completing the Projects with high accuracy and on-time"}}
            content="Welcome to the Koundinya LinkedIn Page, We will learn new things together and get deliver nice lectures"
            time="1d"
            />
        </div>
    )
}

export default Home
