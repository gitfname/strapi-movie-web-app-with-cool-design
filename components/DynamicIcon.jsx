
export default function DynamicIcon({icon, hoverIcon, w, h}) {
    return (
        <div style={{width: w, height: h}} className="relative group">
            <div className="absolute top-0 left-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                {icon}
            </div>

            <div className="absolute top-0 left-0 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100">
                {hoverIcon}
            </div>

        </div>
    )
}