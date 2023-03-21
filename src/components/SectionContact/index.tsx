import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';

export type SectionContactProps = {
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  button: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

const SectionContact = ({
  name,
  first_name,
  last_name,
  email,
  message,
  button,
  background,
  sectionId,
}: SectionContactProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" as="h2" uppercase colorDark={!background}>
          {name}
        </Heading>
        <Styled.InputsTop>
          <div>
            <label htmlFor={first_name}>First name</label>
            <input type="text" name={first_name} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor={last_name}>Last name</label>
            <input type="text" name={last_name} placeholder="Your last name" />
          </div>
          <div>
            <label htmlFor={email}>Email</label>
            <input type="email" name={email} placeholder="Your email" />
          </div>
        </Styled.InputsTop>
        <Styled.InputsBottom>
          <label htmlFor={message}>Message</label>
          <textarea
            name={message}
            cols={30}
            rows={10}
            placeholder="Your message"
          ></textarea>
        </Styled.InputsBottom>
        <Styled.Button>{button}</Styled.Button>
      </Styled.Container>
    </SectionBackground>
  );
};

export default SectionContact;
