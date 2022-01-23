import { useState } from "react"

const CreditItems = (item) => {

    const [open, setOpen] = useState(false)

    return (
        <li className="credits-list-item">
            <a href="#" className="credits-item-button" onClick={() => setOpen(!open)}>
                {item.text}
            </a>

            {open && item.children}
        </li>
    )
}

export default CreditItems
