import _Heading from "./_Heading";

export default function H5({ children, props = {}, className = "", fontSize = 16, fontWeight = 5 }) {
    return (
        <_Heading
            variant="h5"
            props={props}
            className={className}
            fontSize={fontSize}
            fontWeight={fontWeight}>
            {children}
        </_Heading>
    )
}