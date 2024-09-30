
interface ButtonProps {
    className : string,
    value : string,
    onClick : (e: any) => void
}

export default function Button({className , value , onClick} : ButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    )
}