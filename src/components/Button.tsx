import '../css/Button.css';

interface ButtonProps {
    icon: string;
    text: string;
    onClick?: () => void;
    pulse?: boolean
}

export default function Button({ icon, text, onClick, pulse }: ButtonProps) {



    return (
        <button
            className={pulse ? 'pulse' : ''}
            type="button"
            aria-label='button'
            onClick={onClick}
        >

            <div>
                <img src={icon} alt="icon" />
            </div>

            <p>{text}</p>
        </button>
    )
}
