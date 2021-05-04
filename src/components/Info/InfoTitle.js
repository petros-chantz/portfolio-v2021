import { TextHuge } from "../Text";
import { Container } from "../Container";
import { Link } from "../Link";

export default function InfoTitle() {
  return (
    <Container>
      <TextHuge>Hey there,</TextHuge>
      <TextHuge>
        {" "}
        <Link
          href="https://www.linkedin.com/in/petroschantz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Petros
        </Link>{" "}
        here!
      </TextHuge>
    </Container>
  );
}
