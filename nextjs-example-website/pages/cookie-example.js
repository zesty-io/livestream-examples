import { React, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export default function Homepage({content}){
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

    // client execution after dom renders
    useEffect(() => {
        // using a ternary conditional to have a fallback value
        setSortFilter(getCookie('sort'));
       
    })
    
    return (
        <div>
            Header...
            <div>
                <select onChange={handleChange}>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
            
               {sortFilter == 'ASC' && <table>
                   table data sorting ascending order
                   <table>
                    <tr><td>1</td></tr>
                    <tr><td>2</td></tr>
                    <tr><td>3</td></tr>
                   </table>
               </table>}
               
               {sortFilter == 'DESC' && <table>
                   table data sorting decending order
                   <table>
                    <tr><td>3</td></tr>
                    <tr><td>2</td></tr>
                    <tr><td>1</td></tr>
                   </table>
               </table>}
            </div>
            Footer...
        </div>
    );

}