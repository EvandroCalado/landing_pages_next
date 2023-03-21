import { Meta, Story } from '@storybook/react/types-6-0';
import SectionContact, { SectionContactProps } from '.';

const SectionContactStories: Meta = {
  title: 'SectionContact',
  component: SectionContact,
  args: {
    children: 'SectionContact',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template: Story<SectionContactProps> = (args) => {
  return (
    <div>
      <SectionContact {...args} />
    </div>
  );
};

export default SectionContactStories;
