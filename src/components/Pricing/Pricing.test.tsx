import Pricing from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

import { args } from './args';

describe('<Pricing />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Pricing {...args} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
