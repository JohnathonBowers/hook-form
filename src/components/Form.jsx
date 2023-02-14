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
                <div className="form-row">
                    <label>Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
                        <tr>
                            <td>Email: </td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td>{password}</td>
                        </tr>
                        <tr>
                            <td>Confirm Password: </td>
                            <td>{confirmpassword}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form;