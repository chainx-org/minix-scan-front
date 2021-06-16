import React, { useState } from "react";
interface itemProps
{
    operation: Function,
    value: String
}

function TitleBtn({
    operation,
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
        <div className="topTitleBtn" onClick={() => operation}>
            <div className="topTitleSpan">{value}</div>
        </div>
    );
}

export default TitleBtn;
