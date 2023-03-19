import P from 'prop-types';
import * as Styled from './styles';
import Heading from '../Heading';
import Link from 'next/link';

const LogoLink = ({ text, image = '', link }) => {
  const isExternLink = link.match(/^\//) ? true : false;

  if (isExternLink) {
    <Heading size="small" uppercase>
      <Link href={link} passHref>
        <Styled.Container>
          {image ? <img src={image} alt={text} /> : text}
        </Styled.Container>
      </Link>
    </Heading>;
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {image ? <img src={image} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};

export default LogoLink;
