const DropDownItem = (item) => {
    return (
        <a href="#" className="drop-item">
            <span className="drop-left">{item.left}</span>
            {item.children}
            <span className="drop-right">{item.right}</span>
        </a>
    )
}

export default DropDownItem
