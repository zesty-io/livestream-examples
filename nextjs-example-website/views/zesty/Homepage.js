import React from 'react'

export default function Homepage({content}){
    let thumbnailWidth = 150
    return (
        <> 
            <img src={content.image.data[0].url} />
            <h1>{content.title}</h1>
            <h2>{content.sub_title}</h2>
            <div dangerouslySetInnerHTML={{__html:content.content}}></div>
            <h1>My Articles</h1>
            <div style={{display:'flex'}}>
                {content.top_articles.data.map(article => 
                    <div style={{backgroundColor: '#eee', width: thumbnailWidth, padding: '10px', marginRight: '10px'}}>
                        <a href={article.meta.web.uri}>
                            <img src={`${article.article_images.data[0].url}?crop=1:1&width=${thumbnailWidth}`} width={thumbnailWidth} />
                            <h6>{article.meta.web.seo_meta_title}</h6>
                        </a>
                    </div>
                )}
            </div>
            
        </> 
    )
}