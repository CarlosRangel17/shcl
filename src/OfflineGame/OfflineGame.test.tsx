import React from 'react';
import { render } from '@testing-library/react';

import OfflineGame from './index';

describe('OfflineGame Component', () => {
  it('renders a className', () => {
    const { container } = render(
      <OfflineGame className="test-class-name">Click Me</OfflineGame>,
    );
    expect(container.querySelector('.offline-game-wrapper')?.classList).toContain('test-class-name')
  })
});
