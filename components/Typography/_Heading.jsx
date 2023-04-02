import PropTypes from "prop-types"

export default function _Heading({ children, variant, props, className, fontWeight = 5, fontSize = 16 }) {

    return (
        variant === "h1"
        ? <h1 style={{fontWeight: fontWeight+"00", fontSize}} {...props} className={className}> {children} </h1>
        : variant === "h2"
        ?<h2 style={{fontWeight: fontWeight+"00", fontSize}} {...props} className={className}> {children} </h2>
        : variant === "h3"
        ? <h3 style={{fontWeight: fontWeight+"00", fontSize}} {...props} className={className}> {children} </h3>
        : variant === "h4"
        ? <h4 style={{fontWeight: fontWeight+"00", fontSize}} {...props} className={className}> {children} </h4>
        : <h5 style={{fontWeight: fontWeight+"00", fontSize}} {...props} className={className}> {children} </h5>
    )

}

_Heading.propTypes = {
    variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
    props: PropTypes.object,
    className: PropTypes.string,
    fontWeight: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    fontSize: PropTypes.number
}