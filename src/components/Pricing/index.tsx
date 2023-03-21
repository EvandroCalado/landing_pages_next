import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';
import * as Styled from './styles';
import Table from '../Table';

export type TableProps = {
  head: string;
  body: string;
  footer: string;
};

export type PricingProps = {
  title: string;
  description_one: string;
  description_two: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
  table: TableProps[];
};

const Pricing = ({
  title,
  description_one,
  description_two,
  background,
  sectionId,
  table,
}: PricingProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase as="h1" colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description_one}</TextComponent>
        <TextComponent>{description_two}</TextComponent>
        <Table table={table} />
      </Styled.Container>
    </SectionBackground>
  );
};

export default Pricing;
