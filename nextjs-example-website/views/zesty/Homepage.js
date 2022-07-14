import AwesomeHeader from 'components/elements/AwesomeHeader'
import Header2 from 'components/elements/Header2'
import { React, useEffect } from 'react'
import { getCookie } from 'cookies-next';

export default function Homepage({content}){
    let thumbnailWidth = 150
    let campaignCookie ='';
    useEffect(() => {
        campaignCookie = getCookie('utm_campaign');
    });

    return (
        <div> 
            <img src={content.image?.data 
                ? content.image.data[0].url : 
                'https://qb1jbcfx.media.zestyio.com/IMG_3832.JPG?width=150'
                } 
                />
            <h1>{content.title}</h1>
            <h2>Campaign Cookie: {campaignCookie}</h2>
            {campaignCookie == 'showpuppies' 
                && <img width="50%" src="https://cf.ltkcdn.net/dogs/images/orig/236742-1600x1030-cutest-puppy-videos.jpg" />}
            {campaignCookie == 'showcats' 
                && <img width="50%" src="https://static7.depositphotos.com/1000291/676/i/450/depositphotos_6768780-stock-photo-little-british-shorthair-kittens-cat.jpg" />}
            

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
            <h1>My Articles - sorted by title</h1>
            <div style={{display:'flex'}}>
                {content.top_articles.data.sort((a,b) => a.title.localeCompare(b.title)).map(article => 
                    <div key={`title${article.meta.zuid}`} style={{backgroundColor: '#eee', width: thumbnailWidth, padding: '10px', marginRight: '10px'}}>
                        <a href={article.meta.web.uri}>
                            <img src={`${article.article_images.data[0].url}?crop=1:1&width=${thumbnailWidth}`} width={thumbnailWidth} />
                            <h6>{article.meta.web.seo_meta_title} - Sort Order: {article.sort_order}</h6>
                        </a>
                    </div>
                )}
            </div>
            <h1>My Articles - sorted by sort order</h1>
            <div style={{display:'flex'}}>
                {content.top_articles.data.sort((a,b) => a.sort_order - b.sort_order).map(article => 
                    <div key={`sort${article.meta.zuid}`} style={{backgroundColor: '#eee', width: thumbnailWidth, padding: '10px', marginRight: '10px'}}>
                        <a href={article.meta.web.uri}>
                            <img src={`${article.article_images.data[0].url}?crop=1:1&width=${thumbnailWidth}`} width={thumbnailWidth} />
                            <h6>{article.meta.web.seo_meta_title} - Sort Order: {article.sort_order}</h6>
                        </a>
                    </div>
                )}
            </div>

            <h1>My Articles - filter by string length (string over 20) and sort order Desc</h1>
            <div style={{display:'flex'}}>
                {content.top_articles.data.sort((a,b) => b.sort_order - a.sort_order).filter((o) => o.title.length < 20).map(article => 
                    <div key={`sortfilter${article.meta.zuid}`} style={{backgroundColor: '#eee', width: thumbnailWidth, padding: '10px', marginRight: '10px'}}>
                        <a href={article.meta.web.uri}>
                            <img src={`${article.article_images.data[0].url}?crop=1:1&width=${thumbnailWidth}`} width={thumbnailWidth} />
                            <h6>{article.meta.web.seo_meta_title} - Sort Order: {article.sort_order}</h6>
                        </a>
                    </div>
                )}
            </div>
            
        </div> 
    )
}