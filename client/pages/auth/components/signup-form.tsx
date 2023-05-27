import React from "react";
import { Group, Input, Label } from "../../../components/form";
import useForm from "../../../hooks/useForm";
import { Button } from "../../../components/button";
import authService from "../services/auth.service";

interface RegisterDataProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const { data, onChange, isFieldsFilled } = useForm<RegisterDataProps>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFieldsFilled()) {
      console.log("Todos os campos devem ser preenchidos.");
      return;
    }

    if (!isPasswordsEquals()) {
      console.log("As senhas digitadas nao são iguais.");
      return;
    }

    await authService.register({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  const isPasswordsEquals = () => {
    return data.password === data.confirmPassword;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group>
        <Label>Nome</Label>
        <Input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={onChange}
          value={data.name}
        />
      </Group>
      <Group>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Digite seu email"
          onChange={onChange}
          value={data.email}
        />
      </Group>
      <Group>
        <Label>Senha</Label>
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={onChange}
          value={data.password}
        />
      </Group>
      <Group>
        <Label>Confirme a senha</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Digite sua senha novamente"
          onChange={onChange}
          value={data.confirmPassword}
        />
      </Group>
      <Button type="submit">Criar</Button>
    </form>
  );
}
