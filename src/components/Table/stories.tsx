import { Meta, Story } from '@storybook/react/types-6-0';
import Table, { TableProps } from '.';

import dataSections from '../../api/data.json';
const section = dataSections[0].sections[5].table;

const TableStories: Meta = {
  title: 'Table',
  component: Table,
  args: [section],
};

export const Template: Story<TableProps> = (args) => {
  return (
    <div>
      <Table {...args} />
    </div>
  );
};

export default TableStories;
