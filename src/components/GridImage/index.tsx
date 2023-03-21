import * as Styled from './styles';
import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';

export type GridImageElementProps = {
  image: string;
  altText: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
  grid: GridImageElementProps[];
};

const GridImage = ({
  title,
  description,
  grid,
  sectionId,
  background = false,
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
          <TextComponent>{description}</TextComponent>
        </Heading>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridElement key={item.image}>
              <Styled.Image src={item.image} alt={item.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

export default GridImage;
