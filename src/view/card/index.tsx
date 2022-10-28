/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLOR } from "style/color";

import PlayerComp from "view/common/Player";
import Pagination from "view/pagination";

function CardViewComp() {
  return (
    <section css={wrppaer}>
      <p css={title}>부상위험도 높은 선수(20명)</p>
      <p css={subtitle}>기준: 부상위험도(ACWR) 1.5 이상</p>
      <PlayerComp />
      <Pagination />
    </section>
  );
}

export default CardViewComp;

const wrppaer = css`
  padding: 24px 16px;
`;

const title = css`
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;

const subtitle = css`
  margin-bottom: 16px;
  font-size: 12px;
  color: ${COLOR.text.secondary};
`;
