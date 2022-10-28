/** @jsxImportSource @emotion/react */
import { useCallback, useState, useEffect } from "react";
import { css } from "@emotion/react";
import { COLOR } from "styles/color";
import { ReactComponent as Arrow } from "assets/svg/arrow.svg";

interface PaginationPropTypes {
  currentPage: number;
  lastPage: number;
  onPage: (id: string) => void;
}

function Pagination({ currentPage, lastPage, onPage }: PaginationPropTypes) {
  const [isFirst, setFirst] = useState(true);
  const [isLast, setLast] = useState(false);

  const handlePage = useCallback(
    (id: string) => () => {
      onPage(id);
    },
    [onPage]
  );

  useEffect(() => {
    setFirst(() => {
      return currentPage === 1;
    });

    setLast(() => {
      return currentPage === lastPage;
    });
  }, [lastPage, currentPage]);

  return (
    <section>
      <div css={currentpage}>
        <span>
          {currentPage} <span className="totalPage">/ {lastPage}</span>
        </span>
      </div>
      <div css={buttonBox}>
        <button
          css={css`
            ${arrowStyle};
            transform: rotate(180deg);
          `}
          className={isFirst ? "inactive" : "active"}
          disabled={isFirst}
          onClick={handlePage("prev")}
        >
          <Arrow />
        </button>
        <button
          css={arrowStyle}
          className={isLast ? "inactive" : "active"}
          disabled={isLast}
          onClick={handlePage("next")}
        >
          <Arrow />
        </button>
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

  &.inactive {
    path {
      fill: ${COLOR.icon.disalbed};
    }
  }
`;
