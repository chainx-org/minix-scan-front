import React, { useState } from "react";
import { DirectToPage } from "../../hooks/DirectPage"
import { InputContext } from "../../hooks/InputProvider";
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
            <div className="my-2 mx-2 w-6 h-6 bg-gray-arrow cursor-pointer rounded-rounded" onClick={reduceBlock}>
                <div className="text-center text-textColor-white ">{`<`}</div>
            </div>
            <div className="py-2">
                {title}#{blockValue}
            </div>
            <div className="my-2 mx-2 w-6 h-6 bg-gray-arrow cursor-pointer rounded-rounded" onClick={increaseBlock}>
                <div className="text-center text-textColor-white">{`>`}</div>
            </div>
        </div>
    );
}

export default TopTitleButton;
