/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLOR } from "style/color";

import { ReactComponent as ArrowActive } from "asset/svg/arrow_active.svg";

function PlayerComp() {
  let imgURL = "";

  return (
    <section css={wrapper}>
      <div css={avatarBox}>{imgURL ? <ArrowActive /> : "A"}</div>
      <div css={textBox}>
        <p css={nameStyle}>김선수</p>
        <p css={position}>공격수</p>
      </div>
      <div css={acwr}>1.5</div>
    </section>
  );
}

export default PlayerComp;

const wrapper = css`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 6px 8px;
`;

const avatarBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border: 1px solid ${COLOR.semantic.border};
  border-radius: 50%;
  color: ${COLOR.grey400};
  background-color: ${COLOR.grey100};
  font-size: 14px;
  font-weight: 700;

  svg {
    border-radius: 50%;
  }
`;

const textBox = css`
  width: 187px;
  margin-right: 16px;
`;

const nameStyle = css`
  display: flex;
  align-items: center;
  height: 24px;
  font-weight: 500;
`;

const position = css`
  display: flex;
  align-items: center;
  height: 18px;
  font-size: 12px;
  color: ${COLOR.text.secondary};
`;

const acwr = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 23px;
  border: 1px solid #f2a496;
  border-radius: 43px;
  color: #f2a496;
  background-color: #f9d1ca;
  font-size: 14px;
`;
