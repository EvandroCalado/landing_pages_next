import * as Styled from './styles';
import SectionBackgound from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

export type GridSectionElementProps = {
  title: string;
  description: string;
};

export type GridSectionProps = {
  title: string;
  description: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
  grid: GridSectionElementProps[];
};

const GridSection = ({
  title,
  description,
  grid,
  sectionId,
  background = false,
}: GridSectionProps) => {
  return (
    <SectionBackgound background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Text>{description}</Styled.Text>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridElement key={item.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {item.title}
              </Heading>
              <TextComponent>{item.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackgound>
  );
};

export default GridSection;
