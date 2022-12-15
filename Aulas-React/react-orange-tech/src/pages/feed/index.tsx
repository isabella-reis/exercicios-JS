import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImg from "../../assets/banner.png";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            name="Isabella Reis"
            image="https://avatars.githubusercontent.com/u/100042658?v=4"
          />
          <UserInfo
            percentual={86}
            name="Isabella Reis"
            image="https://avatars.githubusercontent.com/u/100042658?v=4"
          />
          <UserInfo
            percentual={55}
            name="Isabella Reis"
            image="https://avatars.githubusercontent.com/u/100042658?v=4"
          />
          <UserInfo
            percentual={42}
            name="Isabella Reis"
            image="https://avatars.githubusercontent.com/u/100042658?v=4"
          />
          <UserInfo
            percentual={50}
            name="Isabella Reis"
            image="https://avatars.githubusercontent.com/u/100042658?v=4"
          />
          <UserInfo
            percentual={25}
            name="Isabella Reis"
            image="https://avatars.githubusercontent.com/u/100042658?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
