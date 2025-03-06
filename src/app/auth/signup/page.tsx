"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  Logo,
  Input,
  PasswordInput,
  SmartLink,
  SmartImage,
  Line,
  Background,
  useToast,
  Fade,
  IconButton,
  Column,
  Row,
  StyleOverlay,
  GlitchFx,
  RevealFx,
} from "@/once-ui/components";
export default function Login() {
  const { addToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
  };

  return (
    <Row
      marginY="32"
      background="overlay"
      fillWidth
      radius="xl"
      border="neutral-alpha-weak"
      overflow="hidden"
    >
      <Row fill hide="m">
        <SmartImage src="/images/login.png" alt="Preview image" sizes="560px" />
      </Row>
      <Column
        fillWidth
        horizontal="center"
        gap="20"
        padding="32"
        position="relative"
      >
        <Background
          mask={{
            x: 100,
            y: 0,
            radius: 75,
          }}
          position="absolute"
          grid={{
            display: true,
            opacity: 50,
            width: "0.5rem",
            color: "neutral-alpha-medium",
            height: "1rem",
          }}
        />
        <Logo wordmark={false} size="l" />
        <Heading as="h3" variant="display-default-s" align="center">
          <RevealFx speed="fast" delay={0} translateY={0}>
            Welcome to{" "}
            <span
              style={{
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              {" "}
              &thinsp;The Vraksh
            </span>
          </RevealFx>
        </Heading>
        <Text
          style={{
            zIndex: 1,
          }}
        >
          Sign up or
          <SmartLink href="/auth/login">&thinsp;log in</SmartLink>
        </Text>
        <Column fillWidth gap="8">
          <Button
            label="Continue with Google"
            fillWidth
            variant="secondary"
            weight="default"
            prefixIcon="google"
            size="l"
          />
          <Button
            label="Continue with GitHub"
            fillWidth
            variant="secondary"
            weight="default"
            prefixIcon="github"
            size="l"
          />
        </Column>
        <Row fillWidth paddingY="24">
          <Row onBackground="neutral-weak" fillWidth gap="24" vertical="center">
            <Line />/<Line />
          </Row>
        </Row>
        <Column gap="-1" fillWidth>
          <Input
            id="email"
            label="Email"
            labelAsPlaceholder
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            validate={validateLogin}
            errorMessage={false}
            radius="top"
          />
          <PasswordInput
            autoComplete="new-password"
            id="password"
            label="Password"
            labelAsPlaceholder
            radius="bottom"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            validate={validateLogin}
          />
        </Column>
        <Button
          id="signup"
          label="Sign Up"
          arrowIcon
          fillWidth
          onClick={() => {
            addToast({
              variant: "success",
              message: "Wohoo! It's a toast!",
            });
          }}
        />
      </Column>
    </Row>
  );
}
