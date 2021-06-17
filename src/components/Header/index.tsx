import React from "react";
// import topBarIcon from "../../assets/logo_miniX.svg";

function Header(): React.ReactElement
{
  const jumpToHomePage = () =>
  {
    window.location.href = window.location.origin + "/";
  }
  return (
    <div className="w-overSpread bg-topBar-black h-15">
      <div className="text-2xl text-white-light font-semibold py-2.5 pl-12" onClick={jumpToHomePage}>
        MiniX
      </div>
    </div>
  );
}

export default Header;