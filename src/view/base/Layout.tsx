/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

interface LayoutCompPropTypes {
  height: number;
  children: React.ReactNode;
}

function LayoutComp({ height, children }: LayoutCompPropTypes) {
  return (
    <div
      css={css`
        ${body};
        min-height: ${height}px;
      `}
    >
      <div className="body-container" css={wrapper}>
        <div className="section" css={sectionStyle}>
          {children}
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
`;
