import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="htmoney" />
        <button type="button">Nova trasação</button>
      </Content>
    </Container>
  );
}
