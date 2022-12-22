import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  Content,
  LoginText,
} from "./styles";
import { IFormData } from "../login/types";

const signUpSchema = yup
  .object({
    nome: yup
      .string()
      .min(3, "Nome com no mínimo 3 caracteres")
      .required("Campo obrigatório."),
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

const Cadastro = () => {
  const navigate = useNavigate();

  const handleOnClickLogin = () => {
    navigate("/login");
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit = async (FormData: IFormData) => {
    try {
      if (isValid) {
        const user = JSON.stringify({
          nome: FormData.nome,
          email: FormData.email,
          password: FormData.password,
        });
        const customConfig = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await api.post(`/users`, user, customConfig);
        if (data.nome) {
          alert(`${data.nome} cadastrado(a) com sucesso!`);
        }
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
      <Header />;
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                errorMessage={errors?.nome?.message}
                control={control}
                placeholder="Nome Completo"
                type="text"
              />
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
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <Content>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </Content>
              <LoginText onClick={handleOnClickLogin}>Já tenho conta. Fazer login</LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
