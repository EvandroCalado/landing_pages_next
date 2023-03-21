import { Meta, Story } from '@storybook/react/types-6-0';
import SectionBackground, { SectionBackgroundProps } from '.';

const SectionBackgroundStories: Meta = {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          dolorum perspiciatis ipsam provident temporibus aspernatur nulla,
          minima atque aut saepe voluptates vel natus eos voluptatum numquam sed
          iste a. Ducimus.
        </p>
      </div>
    ),
  },
};

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};

export default SectionBackgroundStories;
