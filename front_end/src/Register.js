import React from 'react'

export const Register = () => {
    return (
        <div>
            		<form id="register" className="input-group">
			<input type="text" className="input-field" placeholder="User ID" required/>
			<input type="text" className="input-field" placeholder="Email ID" required/>
			<input type="text" className="input-field" placeholder="Password" required/>
			<input type="checkbox" className="check-box" /><span>Rember Password</span> 
			<button type="submit" className="submit-btn">Register</button>
		</form>
        </div>
    )
}
