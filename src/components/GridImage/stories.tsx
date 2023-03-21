import { Meta, Story } from '@storybook/react/types-6-0';
import GridImage, { GridImageProps } from '.';

import { args } from './args';

const GridImageStories: Meta = {
  title: 'GridImage',
  component: GridImage,
  args: args,
};

export const Template: Story<GridImageProps> = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};

export default GridImageStories;
