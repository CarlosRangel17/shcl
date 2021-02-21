import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import Obstacle from "./Obstacle";
import SleepExpert from "../svg/SleepExpert";
import SleepExpertDrop from "../svg/SleepExpertDrop";
import SleepExpertJump from "../svg/SleepExpertJump";
import TRex from "../svg/TRex";
import clsx from "clsx";
import styles from "./offlineGame.module.scss";
import { useGameContext } from "../contexts/GameContext";

interface Props {
  mode: "classic" | "sleep-expert";
  jumpKey: string;
  [rest: string]: unknown; // ...rest property
}

const PlayerRunGame: FunctionComponent<Props> = ({
  mode = "classic",
  jumpKey = "5",
}) => {
  const { state, dispatch } = useGameContext();
  const { gameOver, playerPosition } = state;

  const [gravity] = useState(0.9);
  const [jump, setJump] = useState(false);
  const [drop, setDrop] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const keydownHandler = useCallback(
    (event: KeyboardEvent) => {
      // TODO: Not working with dispatch game over <?>
      if (gameOver) return;

      const { key } = event;
      if (!gameOver && !jump && key === jumpKey) {
        console.log("set jump true");
        setJump(true);
        setStartGame(true);
        // TODO: Not working with dispatch
        // dispatch({ type: "start-game" });
      }
    },
    [state, gameOver, startGame, jump]
  );

  const jumpHandler = (timerId: NodeJS.Timeout) => {
    console.log("jump!");
    let position = 0;
    let count = 0;
    const duration = 20;
    timerId = setInterval(() => {
      // move down
      if (count === 15) {
        setDrop(true);
        return clearInterval(timerId);
      }

      // move up
      console.log("up");
      count++;
      position += 30;
      position *= gravity;
      console.log("player position:", position);
      dispatch({ type: "player-position", playerPosition: position });
    }, duration);

    return () => clearInterval(timerId);
  };

  useEffect(() => {
    if (drop) {
      console.log("down");
      let downTimerId!: NodeJS.Timeout;
      clearInterval(downTimerId);

      let count = 15;
      let position = playerPosition;
      const duration = 20;
      downTimerId = setInterval(() => {
        if (count === 0) {
          position += gravity;
          setJump(false);
          setDrop(false);
          return clearInterval(downTimerId);
        }
        count--;
        position -= 5;
        position *= gravity;
        dispatch({ type: "player-position", playerPosition: position });
      }, duration);

      return () => clearInterval(downTimerId);
    }
  }, [drop]);

  useEffect(() => {
    if (jump) {
      let timerId!: NodeJS.Timeout;
      clearInterval(timerId);

      jumpHandler(timerId);
      return () => clearInterval(timerId);
    }
  }, [jump]);

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  const charcterMode = () => {
    switch (mode) {
      case "sleep-expert":
        if (drop) return <SleepExpertDrop width="60px" height="60px" />;
        if (jump) return <SleepExpertJump width="60px" height="60px" />;
        return <SleepExpert width="60px" height="60px" />;
      case "classic":
      default:
        return <TRex width="60px" height="60px" />;
    }
  };

  return (
    <div
      className={clsx(
        styles.stage,
        !startGame && styles["not-started"],
        gameOver && styles["game-over"]
      )}
    >
      <div
        className={clsx(styles.player, styles[""])}
        style={{
          bottom: `${playerPosition}px`,
        }}
      >
        {charcterMode()}
      </div>
      {startGame && <Obstacle />}
    </div>
  );
};

export default PlayerRunGame;
