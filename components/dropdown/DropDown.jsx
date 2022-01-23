import DropDownItem from "./DropDownItem"

const DropDown = () => {
    return (
        <div className="dropdown">
            <DropDownItem>
                css-tricks.com
            </DropDownItem>
            <DropDownItem left="" right="">
                fireship.io
            </DropDownItem>
        </div>
    )
}

export default DropDown
