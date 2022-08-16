import React, {useEffect, useState } from 'react';

export default function StaleDataOverride({content}){
    
    // setup state variable 
    const [pageContent, setPageContent] = useState(content);

    // change state from user input function example (see in render)
    function changePageContent(content) {
        setPageContent(content)
    }

    // async fetch function 
    async function fetchFreshData(){
        let url = 'https://qb1jbcfx-dev.webengine.zesty.io/-/gql/?zpw=12345'
        // fetch request to get new data
        let res = await fetch(url);
        let data = await res.json();
        setPageContent(data.base + ' ' + data.generation_time)
    }

    // useEffect to run once
    useEffect(() => {
        setPageContent('New content at first render')
        fetchFreshData();
    },[]);

    // render
    return <div style={{
                    padding: '20px', 
                    backgroundColor: '#e8e8e8',
                    margin: '100px'
                }}>
            <h1>Stale Data Override Example</h1>
            <h3>{pageContent}</h3>
            <button onClick={() => changePageContent('Fresh!')}>Change Content State</button>
        </div>
}

// This gets called on every request, its for SSR mode in next
export async function getServerSideProps(ctx) {
    
    // pretend to maek a server side request to get data
    let data = {
        content : 'This is stale data loading from the server side render'
    }
  
    // Pass data to the page via props
    return { props: data };
  }