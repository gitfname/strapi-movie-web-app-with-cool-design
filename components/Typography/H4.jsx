import _Heading from "./_Heading";

export default function H4({ children, props = {}, className = "", fontSize = 24, fontWeight = 5 }) {
    return (
        <_Heading
            variant="h4"
            props={props}
            className={className}
            fontSize={fontSize}
            fontWeight={fontWeight}>
            {children}
        </_Heading>
    )
}