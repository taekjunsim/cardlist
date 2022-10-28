/** @jsxImportSource @emotion/react */
import { useCallback, useState, useEffect } from "react";
import { css } from "@emotion/react";

import CardContainer from "containers/card";

function LayoutComp() {
  const [height, setHeight] = useState(window.innerHeight);

  const getViewport = useCallback(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getViewport);
    return () => window.removeEventListener("resize", getViewport);
  }, [getViewport]);

  return (
    <div
      css={css`
        ${body};
        min-height: ${height}px;
      `}
    >
      <div className="body-container" css={wrapper}>
        <div className="section" css={sectionStyle}>
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

export default LayoutComp;

const body = css`
  display: flex;
  align-items: center;
`;

const wrapper = css`
  width: 1200px;
  margin: 0 auto;
`;

const sectionStyle = css`
  width: 343px;
  margin: 0 auto;
  overflow: hidden;
`;
