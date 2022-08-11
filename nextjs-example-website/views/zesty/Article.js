/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Articles
 * Name: articles
 * Model ZUID: 6-b0eaa497e4-blg8q5
 * File Created On: Thu Jun 30 2022 08:39:27 GMT-0700 (Pacific Daylight Time)
 *
 * Model Fields:
 *
  * title (text)
 * article_body (markdown)
 * article_images (images)
 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-cac2a4c1f3-6jx3t9.manager.zesty.io/schema/6-b0eaa497e4-blg8q5
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';
import { AutoLayout } from "@zesty-io/react-autolayout";


function Article({ content }) {
    let imageSize = 500;
    return (
        <>
        <AutoLayout content={content} />
            Hello World!!
            {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
            <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
            <div>{content.meta.web.seo_meta_description}</div>
            <div>
                {content.article_images.data.map(image => 
                    <img width={imageSize} src={`${image.url}?width=${imageSize}&orient=lv&saturation=-100`}/>
                )}
            </div>
            {/* End of Zesty.io output example */}
        </>
    );
}

export default Article;
