import React from "react";
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
    return (
        <div className="topTitleBtn" onClick={() => operation()}>
            <div className="topTitleSpan">{value}</div>
        </div>
    );
}

export default TitleBtn;
