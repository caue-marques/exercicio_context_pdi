import ButtonProps from '../../interfaces/ButtonProps'

const Button = ({text, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default Button