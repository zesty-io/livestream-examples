import React, { useState, useEffect } from 'react';
const remoteJSON = 'https://qb1jbcfx-dev.webengine.zesty.io/?zpw=12345&toJSON';
const icecreamRemote = 'https://qb1jbcfx-dev.webengine.zesty.io/-/instant/6-9c9dffface-pz885z.json?zpw=12345';

export default function Fetching({ content, remoteData, remoteIcecream=[] }) {
    
    
    const [helloStatement, setHelloStatement] = useState('Hello Zesty Peoples');
    const [articles, setArticles] = useState([]);
    const [icecreams, setIcecreams] = useState(remoteIcecream);

    async function fetchData(url) {
        console.log('fetching data from: ', url);
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        setHelloStatement(data.title);
        setArticles(data.top_articles.data);
    } 

    function reverseIcecream() {
        setIcecreams(icecreams.reverse())
    }

    // Updating the dom/render with remote data using useEffect
    useEffect(() => {
        // Update the document title using the browser API
        document.title = helloStatement;

        // fetch request
        let data = fetchData(remoteJSON);
        reverseIcecream()
    },[]);    

    console.log("props from SSR", content, remoteData, remoteIcecream)

    return <>
        <h1>{helloStatement}</h1>
        <h2>{content.hello}</h2>
        <p>How are you this morning</p>
        
        <ul>
            {articles.map(article => <li key={article.meta.zuid}>{article.title}</li>)}
        </ul>
        <ul>
            {icecreams.map(flavor => <li>
                                        <h2>{flavor.content.flavor_name}</h2>
                                        <img src={flavor.content.image.data[0].url} width="100" />
                                    </li>
            )}
        </ul>

    </>
}

export async function getServerSideProps(context) {
    
    // fetching articles
    let res = await fetch(remoteJSON);
    let data = await res.json();

    //fetching icecream
    let iceres = await fetch(icecreamRemote);
    let icedata = await iceres.json();

    console.log(context)
    return {
        props: {
            content: { hello : "Hello Props" },
            remoteData: data,
            remoteIcecream: icedata.data
        }, // will be passed to the page component as props
    }
}