interface StartCourseProps {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export default function StartCourse({
    onClick,
    className = "",
    disabled = false,
}: StartCourseProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded border px-[56px] py-[16px] font-semibold transition-colors ${className}`}
            style={{
                background: disabled ? "#E5E7EB" : "#860ABA",
                borderColor: disabled ? "#E5E7EB" : "#860ABA",
                color: disabled ? "#A1A1AA" : "#fff",
                cursor: disabled ? "not-allowed" : "pointer",
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
            Iniciar Curso
        </button>
    );
}
