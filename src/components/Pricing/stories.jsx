import Pricing from '.';

import dataSections from "../../api/data.json"
const section = dataSections[0].sections[5]

const PricingStories = {
  title: 'Pricing',
  component: Pricing,
  args: {...section},
};

export const Template = (args) => {
  return (
    <div>
      <Pricing {...args} />
    </div>
  );
};

export default PricingStories;
