import React, { FunctionComponent, useEffect, useState } from "react";

import clsx from "clsx";
import styles from "./obstacle.module.scss";
import { useGameContext } from "../contexts/GameContext";

interface Props {}

const Obstacle: FunctionComponent<Props> = ({}) => {
  const [obstaclePosition, setObstaclePosition] = useState(1000);
  const [dynamicObstacles, setDynamicObstacles] = useState(<></>);
  const { state, dispatch } = useGameContext();
  const { gameOver, playerPosition } = state;

  useEffect(() => {
    if (!gameOver) {
      // let randomTimer!: NodeJS.Timeout;
      // clearInterval(randomTimer);

      const randomTime = Math.random() * 3000;
      const randomTimer: NodeJS.Timeout = setTimeout(() => {
        if (gameOver) {
          return () => clearInterval(randomTimer);
        }

        setDynamicObstacles(<Obstacle />);
      }, randomTime);
      return () => clearInterval(randomTimer);
    }
  }, [gameOver, playerPosition]);

  useEffect(() => {
    let obstacleTimer!: NodeJS.Timeout;
    clearInterval(obstacleTimer);

    if (!gameOver) {
      // generate obstacles
      let position = obstaclePosition;
      obstacleTimer = setInterval(() => {
        console.log("generate obstacle");
        if (gameOver || position < -30) {
          return () => clearInterval(obstacleTimer);
        }
        position -= 10;
        setObstaclePosition(position);
      }, 20);
    }
    return () => clearInterval(obstacleTimer);
  }, [gameOver]);

  useEffect(() => {
    if (
      !gameOver &&
      obstaclePosition > 0 &&
      obstaclePosition < 60 &&
      playerPosition < 60
    ) {
      dispatch({ type: "game-over" });
    }
  }, [obstaclePosition, playerPosition, gameOver]);

  const obstacleInlineStyles = {
    left: `${obstaclePosition}px`,
  };
  return (
    <>
      <div
        className={clsx(obstaclePosition > -30 && styles.obstacle)}
        style={{
          ...obstacleInlineStyles,
        }}
      ></div>
      {dynamicObstacles}
    </>
  );
};

export default Obstacle;
