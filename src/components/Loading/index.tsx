import { Spin } from "antd";
import React from "react";

interface LoadingProps {
    loading: boolean;
    children?: React.ReactNode;
}
function LoadingStstus({children, loading}:LoadingProps): React.ReactElement {
  return (
    <>{ loading &&
        <Spin className={``}>
        {children}
    </Spin>}
    </>
  );
}

export default LoadingStstus;
