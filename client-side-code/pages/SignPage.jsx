import SubmitButton from "../components/inputs/SubmitButton"
import "./SignPageStyle.css"

function Sign(){
    return (
    <div className='main-div'>
        <form className='form'>
            <label>
                Username: <br/>
                <input placeholder="Insert you username"/>
            </label>
            <label>
                Email: <br/>
                <input placeholder="Insert you email"/>
            </label>
            <label>
                Password: <br/>
                <input placeholder="Insert a password"/>
            </label>
            <label>
                Repeate password: <br/>
                <input placeholder="Reinsert the password"/>
            </label>
            <div>
                <SubmitButton>Sign up</SubmitButton>
                <SubmitButton>Sign in</SubmitButton>
            </div>
        </form>
    </div>)
}

export default Sign