import React from 'react'

export default function FormExample(){
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
    });
    
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})        
    }

    return (
    <div>
        <form>
            <div>
                <label for="firstName">First Name</label>
                <input name="firstName" type="text" id="firstName" onKeyUp={handleChange} />
            </div>
            <div>
                <label for="lastName">Last Name</label>
                <input name="lastName" type="text" id="lastName" onKeyUp={handleChange} />
            </div>
            <h1>Your name is: {values.firstName} {values.lastName}</h1>

            <hr />
            <h3>Do you have a name?</h3>
            {values.firstName.length >= 1 && <h1>Yes</h1>}
            {values.firstName.length < 1 && <h1>No</h1>}
        </form>
    </div>
    )
}