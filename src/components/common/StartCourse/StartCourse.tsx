interface StartCourseProps {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    text?: string;
}

export default function StartCourse({ onClick, className = '', disabled = false, text = "Iniciar Curso" }: StartCourseProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`font-semibold transition-colors ${className}`}
            style={{
                display: 'flex',
                width: '390px',
                height: '64px',
                padding: '16px 56px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                border: disabled ? '1px solid #E5E7EB' : '1px solid #860ABA',
                background: disabled ? '#E5E7EB' : '#860ABA',
                color: disabled ? '#A1A1AA' : '#fff',
                cursor: disabled ? 'not-allowed' : 'pointer',
            }}
            disabled={disabled}
            onMouseEnter={e => {
                if (!disabled) {
                    e.currentTarget.style.background = "#6B0899";
                    e.currentTarget.style.borderColor = "#6B0899";
                }
            }}
            onMouseLeave={e => {
                if (!disabled) {
                    e.currentTarget.style.background = "#860ABA";
                    e.currentTarget.style.borderColor = "#860ABA";
                }
            }}
        >
            {text}
        </button>
    );
}
