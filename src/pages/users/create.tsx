import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUSerFormSchema = yup.object().shape({
  name: yup.string().required("coloca teu nome >:("),
  email: yup
    .string()
    .email("coloca um email valido >:(")
    .required("coloca um email >:("),
  password: yup
    .string()
    .required("coloca uma senha >:(")
    .min(8, "senha muito curta >:("),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "senhas não conferem >:("),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUSerFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                label="Nome Completo"
                error={errors["name"]}
                {...register("name")}
              />
              <Input
                label="E-mail"
                error={errors["email"]}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                type="password"
                label="Senha"
                error={errors["password"]}
                {...register("password")}
              />
              <Input
                type="password"
                label="Confirmar senha"
                error={errors["passwordConfirmation"]}
                {...register("passwordConfirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState["isSubmitting"]}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
