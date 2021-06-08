import React from "react";
import clearIcon from "../../assets/close-24px.png";
const clearInputFun = () => {
  alert("clear");
};
function ClearIcon(): React.ReactElement {
  return (
    <div>
      <img src={clearIcon} onClick={clearInputFun} />
    </div>
  );
}

export default ClearIcon;
