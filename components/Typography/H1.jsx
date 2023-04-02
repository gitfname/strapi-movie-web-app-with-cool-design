import _Heading from "./_Heading";

export default function H1({ children, props = {}, className = "", fontSize = 48, fontWeight = 5 }) {
    return (
        <_Heading
            variant="h1"
            props={props}
            className={className}
            fontSize={fontSize}
            fontWeight={fontWeight}>
            {children}
        </_Heading>
    )
}