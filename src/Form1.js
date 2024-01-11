import {useEffect, useState} from "react"
import PropTypes from "prop-types"

function Form1({isChecked}){
    useEffect(() => {
        console.log("Form1 created")
        return () => {
            console.log("Form1 destroyed")
        }
    }, [])

    const [name, setName] = useState("")
    const onNameTextChange = (event) => setName(event.target.value)
    console.log("FOrm1 rerender", isChecked)
    return (
        <div>
            <h1>Form 1</h1>
            <label htmlFor="nameText">Name:</label>
            <input id="nameText" type="text" placeholder="name" value={name} onChange={onNameTextChange}/>

            <div>
                <label>{isChecked ? "Checked" : "Notchecked"}</label>
            </div>
        </div>
    );
}

Form1.propTypes = {
    isChecked : PropTypes.bool.isRequired
}

export default Form1