import * as Styled from './styles';

export type TableProps = {
  table: { head: string; body: string; footer: string }[];
};

const Table = ({ table = [] }: TableProps) => {
  return (
    <Styled.Container>
      <Styled.Table>
        <caption>Pricing table</caption>
        <thead>
          <tr>
            {table.map((item) => (
              <th key={item.head}>{item.head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {table.map((item) => (
              <td key={item.body}>{item.body}</td>
            ))}
          </tr>
          <tr>
            {table.map((item) => (
              <td key={item.body}>{item.body}</td>
            ))}
          </tr>
          <tr>
            {table.map((item) => (
              <td key={item.body}>{item.body}</td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            {table.map((item) => (
              <td key={item.footer}>{item.footer}</td>
            ))}
          </tr>
        </tfoot>
      </Styled.Table>
    </Styled.Container>
  );
};

export default Table;
