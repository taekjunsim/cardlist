import { useCallback, useState, useEffect, useRef } from "react";
import axios from "axios";
import CardViewComp, { PlayerInfoType } from "views/card";

function CardContainer() {
  const defaultACWR = useRef(0);
  const [totalPlayerList, setTotalPlayerList] = useState<Array<PlayerInfoType>>(
    []
  );
  const [cautionPlayerList, setCautionPlayerList] = useState<
    Array<PlayerInfoType>
  >([]);

  defaultACWR.current = 1.5;

  const sortList = useCallback(
    (list: Array<PlayerInfoType>, cautionStandard: number) => {
      return list
        .filter(({ acwr }: { acwr: number }) => {
          return acwr >= cautionStandard;
        })
        .sort((a: PlayerInfoType, b: PlayerInfoType) => {
          return b.acwr - a.acwr;
        });
    },
    []
  );

  const getPlayersInfo = async () => {
    const {
      data: { entries },
    } = await axios.get(`./mock/players.json`);

    setTotalPlayerList(() => {
      return entries;
    });

    setCautionPlayerList(() => {
      return sortList(entries, defaultACWR.current);
    });
  };

  const handleACWR = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setCautionPlayerList(() => {
      return sortList(totalPlayerList, Number(value));
    });
  };

  useEffect(() => {
    getPlayersInfo();
  }, []);

  return (
    <CardViewComp
      list={cautionPlayerList}
      totalCount={cautionPlayerList.length}
      defaultACWR={defaultACWR.current}
      handleACWR={handleACWR}
    />
  );
}

export default CardContainer;
