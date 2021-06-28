import React from 'react'

export const Login = () => {
    return (
        <div>
            	<form id="login" className="input-group">
			<input type="text" className="input-field" placeholder="Username" required/>
			<input type="text" className="input-field" placeholder="Password" required/>
			<input type="checkbox" className="check-box" /><span>Rember Password</span> 
			<button type="submit" className="submit-btn">Log in</button>
		</form>
        </div>
    )
}
