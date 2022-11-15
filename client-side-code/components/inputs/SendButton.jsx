import { useState } from "react"

const style = {
    /*
    background: "gray",
    border: "0.5mm",
    borderColor: "black",
    borderStyle: "solid",
    */
    borderRadius: "10mm",
    height: "7mm",
    width: "2.7cm"
}

function SendButton(props){
    return <button style={style} onClick={props.sendFunction}>
        {props.children}
    </button>
}

export default SendButton