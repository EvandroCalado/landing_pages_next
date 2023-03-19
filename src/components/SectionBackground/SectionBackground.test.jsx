import SectionBackground from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
