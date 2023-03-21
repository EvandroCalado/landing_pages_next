import { Meta, Story } from '@storybook/react/types-6-0';
import GridSection, { GridSectionProps } from '.';
import { args } from './args';

const GridSectionStories: Meta = {
  title: 'GridSection',
  component: GridSection,
  args: args,
};

export const Template: Story<GridSectionProps> = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};

export default GridSectionStories;
