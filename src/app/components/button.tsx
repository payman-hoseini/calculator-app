
interface ButtonProps {
    className : string,
    value : string,
    onClick : (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({className , value , onClick} : ButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    )
}