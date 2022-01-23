import DropDown from "../dropdown/DropDown"
import CreditItems from "./CreditItems"

const Credits = () => {
    return (
        <div className="credits">
            <ul className="credits-list">
                <CreditItems text="credits">
                    <DropDown />
                </CreditItems>
            </ul>
        </div>
    )
}

export default Credits
