const style = {
    position: "relative",
    borderRadius: "1mm",
    height: "7mm",
    width: "2.7cm"
}

function SubmitButton(props){
    return <button style={style} onSubmit={props.submit}>
        {props.children}
    </button>
}

export default SubmitButton