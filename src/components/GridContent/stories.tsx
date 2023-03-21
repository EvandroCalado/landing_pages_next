import { Meta, Story } from '@storybook/react/types-6-0';
import GridContent, { GridContentProps } from '.';
import { args } from './args';

const GridContentStories: Meta = {
  title: 'GridContent',
  component: GridContent,
  args: args,
};

export const Template: Story<GridContentProps> = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

export default GridContentStories;
