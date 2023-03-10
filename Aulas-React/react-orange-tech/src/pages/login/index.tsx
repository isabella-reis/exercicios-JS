import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  CreateText,
  ForgotText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { api } from "../../services/api";
import { IFormData } from "./types";

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("Campo obrigatório."),
    password: yup
      .string()
      .min(3, "Necessário pelo menos 3 caracteres.")
      .required("Campo obrigatório."),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const handleOnClickSignUp = () => {
    navigate("/cadastro")
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (FormData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${FormData.email}&senha=${FormData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválido.");
      }
    } catch {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápidos nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                type="email"
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText onClick={handleOnClickSignUp}>Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
