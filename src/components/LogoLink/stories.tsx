import { Meta, Story } from '@storybook/react/types-6-0';
import LogoLink, { LogoLinkProps } from '.';

const LogoLinkStories: Meta = {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    image: 'assets/images/logo.svg',
    link: 'https://google.com.br',
  },
};

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  image: '',
};

export default LogoLinkStories;
