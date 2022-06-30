/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Clippings
 * Name: clippings
 * Model ZUID: 6-ae86879df8-2zwl2h
 * File Created On: Thu Jun 30 2022 08:39:27 GMT-0700 (Pacific Daylight Time)
 *
 * Model Fields:
 *
  * site_name (text)
 * logo (images)
 * footer_text (text)
 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-cac2a4c1f3-6jx3t9.manager.zesty.io/schema/6-ae86879df8-2zwl2h
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function Clipping({ content }) {
    return (
        <>
            {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
            <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
            <div>{content.meta.web.seo_meta_description}</div>
            {/* End of Zesty.io output example */}
        </>
    );
}

export default Clipping;
