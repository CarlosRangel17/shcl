import React, { FunctionComponent } from 'react';

import styles from './offlineGame.module.scss';

interface Props {
  [rest: string]: unknown; // ...rest property
};

const OfflineGame: FunctionComponent<Props> = ({
  ...rest
}) => {
  return (
    <div className={styles['offline-game-wrapper']} {...rest}>
      OfflineGame
    </div>
  );
};

export default OfflineGame;
