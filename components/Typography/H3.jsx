import _Heading from "./_Heading";

export default function H3({ children, props = {}, className = "", fontSize = 32, fontWeight = 5 }) {
    return (
        <_Heading
            variant="h3"
            props={props}
            className={className}
            fontSize={fontSize}
            fontWeight={fontWeight}>
            {children}
        </_Heading>
    )
}