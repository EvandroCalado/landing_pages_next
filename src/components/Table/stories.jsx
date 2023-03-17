import Table from ".";

import dataSections from "../../api/data.json";
const section = dataSections[0].sections[5].table;

const TableStories = {
  title: "Table",
  component: Table,
  args:  [section] ,
};

export const Template = (args) => {
  return (
    <div>
      <Table {...args} />
    </div>
  );
};

export default TableStories;
