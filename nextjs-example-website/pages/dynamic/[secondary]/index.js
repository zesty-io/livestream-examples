import React from 'react';
import { useRouter } from 'next/router';

export default function Dynamic() {
    const router = useRouter()
    const { secondary } = router.query

    return <div>Secondary Level Dynamic Page: Path part:  {secondary}!</div>
}