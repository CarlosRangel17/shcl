import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import clsx from "clsx";
import styles from "./offlineGame.module.scss";

interface Props {
  [rest: string]: unknown; // ...rest property
}

const OfflineGame: FunctionComponent<Props> = ({ ...rest }) => {
  const [jump, setJump] = useState(false);
  const keydownHandler = useCallback((event: KeyboardEvent) => {
    const { key } = event;
    if (key === "5") {
      console.log("set jump true");
      setJump(true);
    }
  }, []);

  useEffect(() => {
    if (jump) {
      const duration = 300;
      let timer!: NodeJS.Timeout;
      clearInterval(timer);
      timer = setInterval(() => {
        console.log("set jump false");
        setJump(false);
      }, duration);

      return () => clearInterval(timer);
    }
  }, [jump]);

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <div className={clsx(styles.game, styles.desert)} {...rest}>
      <div className={clsx(styles.trex, jump && styles.jump)}></div>
      <div className={clsx(styles.cactus, styles.block)}></div>
    </div>
  );
};

export default OfflineGame;
