import React, { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div className='form-row'>
                    <label>First Name: </label>
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='form-row'>
                    <label>Last Name: </label>
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                </div>
            </form>
            <div>
                <h2>Your Form Data</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name: </td>
                            <td>{firstname}</td>
                        </tr>
                        <tr>
                            <td>Last Name: </td>
                            <td>{lastname}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form;