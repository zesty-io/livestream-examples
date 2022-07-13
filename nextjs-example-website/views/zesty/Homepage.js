import AwesomeHeader from 'components/elements/AwesomeHeader'
import Header2 from 'components/elements/Header2'
import React from 'react'
import { getCookie } from 'cookies-next';

export default function Homepage({content}){
    let thumbnailWidth = 150
    let campaignCookie = getCookie('utm_campaign'); // => 'value'
    return (
        <> 
            <img src={content.image?.data 
                ? content.image.data[0].url : 
                'https://qb1jbcfx.media.zestyio.com/IMG_3832.JPG?width=150'
                } 
                />
            <h1>{content.title}</h1>
            <h2>Campaign Cookie: {campaignCookie}</h2>
            {campaignCookie == 'showpuppies' && <img width="50%" src="https://cf.ltkcdn.net/dogs/images/orig/236742-1600x1030-cutest-puppy-videos.jpg" />}
            {campaignCookie == 'showcats' && <img width="50%" src="https://static7.depositphotos.com/1000291/676/i/450/depositphotos_6768780-stock-photo-little-british-shorthair-kittens-cat.jpg" />}
            

            {
                content.sub_title && <Header2 text={content.sub_title} />
            }
            
            <h3>
            {
                content.sub_title || `This is my backup sub title`
            }
            </h3>

            { 
                content.sub_title 
                && content.title 
                && content.image?.data
                && <AwesomeHeader 
                    title={content.title} 
                    subtitle={content.sub_title}
                    image={content.image.data[0].url} />
                
            }


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