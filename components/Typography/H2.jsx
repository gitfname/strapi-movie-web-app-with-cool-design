import _Heading from "./_Heading";

export default function H2({ children, props = {}, className = "", fontSize = 40, fontWeight = 5 }) {
    return (
        <_Heading
            variant="h2"
            props={props}
            className={className}
            fontSize={fontSize}
            fontWeight={fontWeight}>
            {children}
        </_Heading>
    )
}