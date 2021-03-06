import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import classNames from "classnames";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "store";
import { syncFromGameData } from "store/game";
import { setShowStatisticsModal } from "store/modal";
import { ROW_COUNT } from "utils/const";
import { getGameDataFromLS, initGameData } from "utils/GameData";
import {
  getStatisticsData,
  initStatisticsData,
  saveStatisticsData,
  StatisticsData
} from "utils/StatisticsData";
import { ResultSummary } from "./ResultSummary";
import "./StatisticsModal.scss";

interface Props {
  onClickShare: () => void;
  onClickNewInfiniteGame: () => void;
  onClickNewBattleGame: () => void;
}

const StatisticsModal = (props: Props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const gameType = useSelector((state: RootState) => state.game.gameType);

  const showStatisticsModal = useSelector(
    (state: RootState) => state.modal.showStatisticsModal
  );

  const curResultSummary = useSelector(
    (state: RootState) => state.game.curReslutSummary
  );

  const prevReslutSummary = useSelector(
    (state: RootState) => state.game.prevReslutSummary
  );

  const [statisticsData, setStatisticsData] =
    useState<StatisticsData>(initStatisticsData);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [nextTime, setNextTime] = useState<string>("");
  const [intervalId, setIntervalId] = useState<any>(null);
  const [lastWinRow, setLastWinRow] = useState<number>(-1);

  const onClose = () => {
    dispatch(setShowStatisticsModal(false));
  };

  useEffect(() => {
    if (showStatisticsModal) {
      const statisticsData = getStatisticsData(gameType);
      setStatisticsData(statisticsData);

      const gameData = getGameDataFromLS(gameType);
      setLastWinRow(gameData.evaluationList.indexOf("sssss"));
      setIsFinish(gameData.state === "FINISH");
      if (gameType === "NORMAL" && gameData.state === "FINISH") {
        const intervalId_ = setInterval(() => {
          const now = moment();
          let nextTime = moment();
          if (now.get("h") < 12) {
            nextTime = moment().hour(12).startOf("h");
          } else {
            nextTime = moment().add("d", 1).startOf("d");
          }

          const hours = Math.floor(
            moment.duration(nextTime.diff(now)).asHours()
          );
          const minutes = Math.floor(
            moment.duration(nextTime.diff(now)).asMinutes() % 60
          );
          const seconds = Math.floor(
            moment.duration(nextTime.diff(now)).asSeconds() % 60
          );

          setNextTime(
            `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );
        }, 1000);

        setIntervalId(intervalId_);
      }
    } else {
      clearInterval(intervalId);
    }
  }, [gameType, showStatisticsModal]);

  const winCount = useMemo(() => {
    if (gameType === "BATTLE") {
      return statisticsData.win ?? 0;
    } else {
      return Object.values(statisticsData.success).reduce((p, c) => p + c, 0);
    }

    return 0;
  }, [statisticsData]);

  const played = useMemo(() => {
    if (gameType === "BATTLE") {
      return (
        (statisticsData.win ?? 0) +
        statisticsData.fail +
        (statisticsData.draw ?? 0)
      );
    } else {
      return statisticsData.fail + winCount;
    }

    return 0;
  }, [statisticsData, winCount]);

  const winRate = useMemo(() => {
    if (played === 0) {
      return 0;
    }

    return Math.round((winCount / played) * 100);
  }, [winCount, played]);

  const maxSuccess = useMemo(() => {
    return Math.max(...Object.values(statisticsData.success));
  }, [statisticsData]);

  const onClickNewInfiniteGame = () => {
    props.onClickNewInfiniteGame();
    onClose();
  };

  const onClickNewBattleGame = () => {
    props.onClickNewBattleGame();
    onClose();
  };

  const onClickPlayWordle = () => {
    onClose();
    dispatch(syncFromGameData(initGameData));
    history.push("/");
  };

  const onClickReset = () => {
    if (gameType === "BATTLE") {
      if (window.confirm("????????? ????????? ???????????????????")) {
        setStatisticsData(initStatisticsData);
        saveStatisticsData(gameType, initStatisticsData);
      }
    }
  };

  return (
    <Modal
      className="statistics-modal"
      show={showStatisticsModal}
      onHide={onClose}
      centered
      scrollable
    >
      <Modal.Header className="border-0">
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
      </Modal.Header>

      <Modal.Body>
        <section>
          <h2 className="d-flex justify-content-center align-items-center">
            ??????
            {gameType === "BATTLE" && (
              <button className="reset-btn btn ms-1 p-0" onClick={onClickReset}>
                <RestartAltIcon />
              </button>
            )}
          </h2>
          <div className="summary">
            <div className="summary-item">
              <div className="value">{played}</div>
              <div className="title">??????</div>
            </div>
            <div className="summary-item">
              <div className="value">{winRate}</div>
              <div className="title">??????(%)</div>
            </div>
            {(gameType === "NORMAL" ||
              gameType === "INFINITE" ||
              gameType === "CUSTOM") && (
              <>
                <div className="summary-item">
                  <div className="value">{statisticsData.currentStreak}</div>
                  <div className="title">?????? ??????</div>
                </div>
                <div className="summary-item">
                  <div className="value">{statisticsData.maxStreak}</div>
                  <div className="title">?????? ??????</div>
                </div>
              </>
            )}
            {gameType === "BATTLE" && (
              <>
                <div className="summary-item">
                  <div className="value">{statisticsData.win ?? 0}</div>
                  <div className="title mx-2">???</div>
                </div>
                <div className="summary-item">
                  <div className="value">{statisticsData.draw ?? 0}</div>
                  <div className="title mx-2">???</div>
                </div>
                <div className="summary-item">
                  <div className="value">{statisticsData.fail}</div>
                  <div className="title mx-2">???</div>
                </div>
              </>
            )}
          </div>
        </section>

        <section>
          <h2>?????? ??????</h2>
          <div className="guess-distribution">
            {Array(ROW_COUNT)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="guess-distribution-item">
                  <span>{i + 1}</span>
                  <ProgressBar
                    className={classNames({ last: i === lastWinRow })}
                    now={(statisticsData.success[i] / maxSuccess) * 100}
                    label={statisticsData.success[i] ?? 0}
                  />
                </div>
              ))}
          </div>
        </section>

        {isFinish && (
          <>
            <section>
              <div className="bottom">
                <div className="text-center border-right">
                  {gameType === "NORMAL" && (
                    <>
                      <h2>?????? ????????????</h2>
                      <div className="next-time">&nbsp;{nextTime}&nbsp;</div>
                    </>
                  )}
                  {gameType === "INFINITE" && (
                    <Button
                      className="share-btn"
                      size="lg"
                      onClick={onClickNewInfiniteGame}
                    >
                      ??? ?????? ??????
                    </Button>
                  )}
                  {gameType === "CUSTOM" && (
                    <Button
                      className="share-btn"
                      size="lg"
                      onClick={onClickPlayWordle}
                    >
                      ??????????????????
                    </Button>
                  )}
                  {gameType === "BATTLE" && (
                    <Button
                      className="share-btn"
                      size="lg"
                      onClick={onClickNewBattleGame}
                    >
                      ??? ?????? ??????
                    </Button>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    className="share-btn"
                    size="lg"
                    onClick={props.onClickShare}
                  >
                    ?????? <ShareOutlinedIcon />
                  </Button>
                </div>
              </div>
            </section>

            {gameType === "NORMAL" && (
              <div className="border-top pt-4">
                {curResultSummary && (
                  <section>
                    <h2>?????? ?????? ?????? ({curResultSummary?.solution})</h2>
                    <ResultSummary resultSummary={curResultSummary} />
                  </section>
                )}

                <section>
                  <h2>?????? ?????? ?????? ({prevReslutSummary?.solution})</h2>
                  <ResultSummary resultSummary={prevReslutSummary} />
                </section>
              </div>
            )}
          </>
        )}

        <section className="border-top pt-4 word-break-keep-all">
          <ul>
            <li>
              ?????? ?????? ????????? ????????? ???????????? ???????????? ???????????????!{" "}
              <small>
                (?????? ?????? <MenuIcon fontSize="small" /> {`->`}{" "}
                <b>?????? ?????????</b>)
              </small>
            </li>
            <li>
              ????????? ????????? <MenuBookIcon fontSize="small" /> ????????? ?????????
              ???????????? ??????????????????.{" "}
            </li>
            <li>
              <b>?????? ??????, ?????? vs AI</b> ????????? ?????? ???????????????. ?????? ?????????{" "}
              <MenuIcon fontSize="small" /> ??????????????? ?????? ????????? ??? ???
              ????????????. <br />
              <small>
                * ?????? vs AI ??????: AI??? ????????? ????????? ????????? ???????????? ??????
                ????????? ????????? ??????, ?????? ?????? ??????
                <RestartAltIcon fontSize="small" />{" "}
                <small>(????????? AI??? ????????????..)</small>
              </small>
            </li>
          </ul>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export { StatisticsModal };
