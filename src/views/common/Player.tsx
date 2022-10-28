/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { COLOR } from "styles/color";

interface PlayerCompPropTypes {
  acwr: number;
  pictureURL: string | null;
  name: string;
  position: string;
  animateDirection: string;
}

function PlayerComp({
  acwr,
  pictureURL,
  name,
  position,
  animateDirection,
}: PlayerCompPropTypes) {
  return (
    <section className={animateDirection} css={wrapper}>
      <div css={avatarBox}>
        {pictureURL ? <img src={pictureURL} alt="avtar" /> : name.slice(0, 1)}
      </div>
      <div css={textBox}>
        <p css={nameStyle}>{name}</p>
        <p css={positionStyle}>{position}</p>
      </div>
      <div css={acwrStyle}>{acwr}</div>
    </section>
  );
}

export default PlayerComp;

const prevSlideIn = keyframes`
  from {
    left: 100%;
    width: 200%
  }

  to {
    left: 0%;
    width: 100%;
  }
`;

const nextSlideIn = keyframes`
  from {
    right: 100%;
    width: 200%
  }

  to {
    right: 0%;
    width: 100%;
  }
`;

const wrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 6px 8px;

  &.prev {
    animation: ${prevSlideIn} 0.5s ease;
  }

  &.next {
    animation: ${nextSlideIn} 0.5s ease;
  }
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

const positionStyle = css`
  display: flex;
  align-items: center;
  height: 18px;
  font-size: 12px;
  color: ${COLOR.text.secondary};
`;

const acwrStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 23px;
  border: 1px solid #f2a496;
  border-radius: 43px;
  color: #e6492d;
  background-color: #f9d1ca;
  font-size: 14px;
`;
