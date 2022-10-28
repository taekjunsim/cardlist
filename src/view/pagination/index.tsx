/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLOR } from "style/color";
import { ReactComponent as ArrowActive } from "asset/svg/arrow_active.svg";
import { ReactComponent as ArrowInActive } from "asset/svg/arrow_inactive.svg";

function Pagination() {
  return (
    <section>
      <div css={currentpage}>
        <span>
          1 <span className="totalPage">/ 3</span>
        </span>
      </div>
      <div css={buttonBox}>
        <div
          css={css`
            ${arrowStyle};
            transform: rotate(180deg);
          `}
        >
          <ArrowActive />
        </div>
        <div css={arrowStyle}>
          <ArrowActive />
        </div>
      </div>
    </section>
  );
}

export default Pagination;

const currentpage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 700;

  .totalPage {
    color: ${COLOR.text.secondary};
  }
`;

const buttonBox = css`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid ${COLOR.semantic.border};
`;

const arrowStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 36px;

  &:last-of-type {
    margin-right: 0;
  }
`;
