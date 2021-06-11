import React from "react";
import topBarIcon from "../../assets/logo_miniX.svg";

function Header(): React.ReactElement {
  return (
    <div className="w-overSpread bg-topBar-black h-15">
      <div className="py-2.5 pl-12">
        <img src={topBarIcon} />
      </div>
    </div>
  );
}

export default Header;