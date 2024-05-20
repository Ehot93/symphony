const Label = ({title, subtitle}) => {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <span>
                {title}
            </span>
            {subtitle && <span>{subtitle}</span>}
        </div>
    )
}

export default Label;