// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GTM_ID, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    console.log('hello world')
    window.gtag('event', action, params)
}