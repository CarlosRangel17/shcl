import React, { FunctionComponent } from "react";

import GameProvider from "../contexts/GameContext";
import PlayerRunGame from "./PlayerRunGame";

interface Props {
  mode: "classic" | "sleep-expert";
  jumpKey: string;
  [rest: string]: unknown; // ...rest property
}

const OfflineGame: FunctionComponent<Props> = ({
  mode = "classic",
  jumpKey = "5",
}) => {
  return (
    <GameProvider>
      <PlayerRunGame mode={mode} jumpKey={jumpKey} />
    </GameProvider>
  );
};

export default OfflineGame;
