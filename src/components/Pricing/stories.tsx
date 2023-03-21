import { Meta, Story } from '@storybook/react/types-6-0';
import Pricing, { PricingProps } from '.';

import { args } from './args';

const PricingStories: Meta = {
  title: 'Pricing',
  component: Pricing,
  args,
};

export const Template: Story<PricingProps> = (args) => {
  return (
    <div>
      <Pricing {...args} />
    </div>
  );
};

export default PricingStories;
