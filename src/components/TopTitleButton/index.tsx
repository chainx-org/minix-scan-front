import React, { useState } from "react";
import { DirectToPage } from "../../helper/DirectPage"
import { InputContext } from "../Provider/InputProvider";
import TitleBtn from "./TitleBtn"
interface itemProps
{
    title: String,
    value: String
}

function TopTitleButton({
    title,
    value
}: itemProps): React.ReactElement<itemProps>
{
    const [blockValue, setBlockValue] = useState(Number(value) ? Number(value) : 0)
    const reduceBlock = () =>
    {
        setBlockValue(blockValue - 1)
    }

    const increaseBlock = () =>
    {
        setBlockValue(blockValue + 1)
    }
    return (
        <div className="flex justify-between py-2 h-16" >
            <TitleBtn operation={reduceBlock} value={`<`} />
            <div className="py-2">
                {title}#{blockValue}
            </div>
            <TitleBtn operation={reduceBlock} value={`>`} />
        </div>
    );
}

export default TopTitleButton;
