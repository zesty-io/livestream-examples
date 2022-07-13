import { React, useEffect }  from 'react'
import { setCookie } from 'cookies-next';


export default function utmTest() {
    useEffect(() => {
        const params = new Proxy(new URLSearchParams(window.location.search.toLowerCase()), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        let campaign = params.utm_campaign;
        console.log(campaign, params.hello)
        setCookie('utm_campaign', params.utm_campaign);
    })

    return <div>Hello World Campaign: </div>
}