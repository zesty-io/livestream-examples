import React from 'react';
import { useRouter } from 'next/router';
import Custom404 from 'pages/404';
export default function Dynamic() {
    const router = useRouter()
    const { secondary, tertiary } = router.query

    // use custom logic to 404 the page when there is bad data
    if (tertiary < 100) return <Custom404 />

    // output the render
    return <div>
        <ol>
            <li>Secondary Level: <strong>{secondary}</strong></li>
            <li>Tertiary Level: <strong>{tertiary}</strong></li>
        </ol>    
    </div>
}