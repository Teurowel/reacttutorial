import {useEffect} from "react";

function Form2(){
    useEffect(() => {
        console.log("Form2 created")
        return () => {
            console.log("Form2 destroyed")
        }
    }, [])
    console.log("FOrm2 rerender")
    return(
        <div>
            <h1>Form2</h1>
        </div>
    );
}

export default Form2