import { React, useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'; 

export default function CookieTest() {
    let sortFilterDefault = 'DESC'; // set up default value

    // Declare a new state variable, which we'll call "sortFilter"
    // the inistial default value we pass is 'DESC' for decending sort
    const [sortFilter, setSortFilter] = useState(sortFilterDefault);
    
    // function to use with select to set value
    const handleChange = (event) => {
        const sort = event.target.value;
        setSortFilter(sort);
        setCookie('sort', sort);
    };


    // useEffect runs on the client after DOM renders  
    useEffect(() => {
        let cookieValue = getCookie('sort') ? getCookie('sort') : sortFilterDefault ;
        setSortFilter(cookieValue);
    })

    return <div>
            <select onChange={handleChange}>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
            </select>
        {sortFilter == 'DESC' && <h1>We are Descending</h1>}
        {sortFilter == 'ASC' && <h3>We are Ascending</h3>}
        Cookie Test hello world Current Cookie 'sort' value: {sortFilter}
        
        </div>
}