import "./SectionTitle.css";

const SectionTitle = ({
    label,
    title,
    subtitle,
    center = false,
    light = false,
}) => {
    return (
        <div
            className={`section-title ${center ? "center" : ""} ${
                light ? "light" : ""
            }`}
        >
            {label && (
                <span className="section-label">
                    {label}
                </span>
            )}

            <h2 className="heading-lg">
                {title}
            </h2>

            {subtitle && (
                <p className="text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;