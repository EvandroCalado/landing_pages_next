import { Meta, Story } from '@storybook/react/types-6-0';
import GridTwoColumn, { GridTwoColumnProps } from '.';
import { args } from './args';

const GridTwoColumnStories: Meta = {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: args,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template: Story<GridTwoColumnProps> = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};

export default GridTwoColumnStories;
