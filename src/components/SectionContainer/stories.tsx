import { Meta, Story } from '@storybook/react/types-6-0';
import SectionContainer, { SectionContainerProps } from '.';

const SectionContainerStories: Meta = {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          dolorum perspiciatis ipsam provident temporibus aspernatur nulla,
          minima atque aut saepe voluptates vel natus eos voluptatum numquam sed
          iste a. Ducimus.
        </p>
      </div>
    ),
  },
  // argTypes: {
  //   children: { type: '' },
  // },
};

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};

export default SectionContainerStories;
