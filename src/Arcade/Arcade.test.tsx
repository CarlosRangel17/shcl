import React from 'react';
import { render } from '@testing-library/react';

import Arcade from './index';

describe('Arcade Component', () => {
  it('renders a className', () => {
    const { container } = render(
      <Arcade className="test-class-name">Click Me</Arcade>,
    );
    expect(container.querySelector('.arcade-wrapper')?.classList).toContain('test-class-name')
  })
});
