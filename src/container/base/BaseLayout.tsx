import { useCallback, useState, useEffect } from "react";

import LayoutComp from "view/base/Layout";
import CardContainer from "container/card";

function BaseLayout() {
  const [height, setHeight] = useState(window.innerHeight);

  const getViewport = useCallback(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getViewport);
    return () => window.removeEventListener("resize", getViewport);
  }, [getViewport]);

  return (
    <LayoutComp height={height}>
      <CardContainer />
    </LayoutComp>
  );
}

export default BaseLayout;
