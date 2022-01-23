 import  {HiAtSymbol, HiEmojiHappy} from 'react-icons/hi'

import DropDownItem from "./DropDownItem"

const DropDown = () => {
    return (
        <div className="dropdown">
            <DropDownItem right={<HiEmojiHappy/>} left={<HiAtSymbol/>}>
                css-tricks.com
            </DropDownItem>
            <DropDownItem right={<HiEmojiHappy/>} left={<HiAtSymbol/>}>
                fireship.io
            </DropDownItem>
        </div>
    )
}

export default DropDown
