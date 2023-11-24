//default props

function Button({ text = 'Click Me!', color='yellow', fontSize=15, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }
    return <button onClick={handleClick} style={buttonStyle}>{text}</button>
}

export default Button;