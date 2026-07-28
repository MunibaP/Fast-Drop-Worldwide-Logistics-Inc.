import "./Button.css";

const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon,
    onClick,
    href
}) => {

    const classes = `fd-btn ${variant} ${size}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {icon}
                <span>{children}</span>
            </a>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {icon}
            <span>{children}</span>
        </button>
    );

};

export default Button;