/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { COLOR } from "styles/color";
import PlayerComp from "views/common/Player";
import Pagination from "views/pagination";

export interface PlayerInfoType {
  acwr: number;
  user: {
    id: number;
    pictureUrl: string | null;
    name: string;
    position: string;
  };
}

interface CardViewCompPropType {
  list: Array<PlayerInfoType>;
  totalCount: number;
  defaultACWR: number;
  handleACWR: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function CardViewComp({
  list,
  totalCount,
  defaultACWR,
  handleACWR,
}: CardViewCompPropType) {
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [animateDirection, setAnimateDirection] = useState("");

  const handlePageButton = (id: string) => {
    switch (id) {
      case "prev":
        setAnimateDirection("prev");
        return setCurrentPage((prev) => {
          return (prev -= 1);
        });
      default:
        setAnimateDirection("next");
        return setCurrentPage((prev) => {
          return (prev += 1);
        });
    }
  };

  const handlePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setPerPage(() => {
      return Number(value.slice(0, value.length - 1));
    });
  };

  useEffect(() => {
    setLastPage(Math.ceil(totalCount / perPage));
  }, [totalCount, perPage]);

  return (
    <section css={wrppaer}>
      <h4 css={title}>부상위험도 높은 선수({totalCount}명)</h4>
      <article css={subtitle}>
        <div>
          기준: 부상위험도(ACWR){" "}
          <select css={acwrBox} onChange={handleACWR}>
            <option>{defaultACWR}</option>
            <option>1.6</option>
            <option>1.7</option>
            <option>1.8</option>
            <option>1.9</option>
            <option>2.0</option>
          </select>{" "}
          이상
        </div>
        <div>
          <select css={perPageBox} onChange={handlePerPage}>
            <option>5명</option>
            <option>10명</option>
          </select>
        </div>
      </article>
      <article css={content}>
        {list
          .slice((currentPage - 1) * perPage, currentPage * perPage)
          .map(({ acwr, user: { id, pictureUrl, name, position } }) => {
            return (
              <PlayerComp
                key={`${id} ${position}`}
                pictureURL={pictureUrl}
                name={name}
                position={position}
                acwr={acwr}
                animateDirection={animateDirection}
              />
            );
          })}
      </article>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPage={handlePageButton}
      />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 12px;
  color: ${COLOR.text.secondary};
`;

const acwrBox = css`
  margin: 0 2px;
  padding-bottom: 1px;
  border-bottom: 1px solid black;
  font-size: 12px;
  appearance: none;

  &:hover {
    cursor: pointer;
  }
`;

const perPageBox = css`
  padding: 2px;
  border: 1px solid ${COLOR.text.secondary};
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const content = css`
  min-height: 304px;
`;
