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
export default function Home() {
  const { addToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row horizontal="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
  };

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="m" icon={false} href="" />
          <Row gap="12" hide="s">
            <Button
              href="https://x.com/ankit_189"
              prefixIcon="x"
              size="s"
              label="Twitter"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://github.com/BearerOP/vraksh-project"
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
            {/* <Row position="fixed" top="20" right="20">
              <StyleOverlay
                position="fixed"
                top="8"
                right="8"
                style={{ height: "calc(100vh - var(--static-space-16))" }}
              />
            </Row> */}
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="https://discord.com/invite/5EyAQ4eNdS"
              icon="discord"
              variant="tertiary"
            />
            <IconButton
              href="https://github.com/once-ui-system/nextjs-starter"
              icon="github"
              variant="tertiary"
            />
            <Row position="fixed" top="20" right="20">
              <StyleOverlay
                position="fixed"
                top="8"
                right="8"
                style={{ height: "calc(100vh - var(--static-space-16))" }}
              />
            </Row>
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />

          <Column
            fillWidth
            paddingX="32"
            gap="12"
            horizontal="center"
            position="relative"
          >

            {/* LOGIN */}
            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-weak"
              overflow="hidden"
            >
              <Row fill hide="m">
                <SmartImage
                  src="/images/login.png"
                  alt="Preview image"
                  sizes="560px"
                />
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
                <RevealFx
  speed="fast"
  delay={0}
  translateY={0}
>
                Welcome to <span style={
                    {
                        fontSize: '40px',
                        fontWeight: 'bold',
                    }
                }> &thinsp;The Vraksh</span>
    </RevealFx>
                </Heading>
                <Text onBackground="neutral-medium" marginBottom="24">
                  Log in or
                  <SmartLink href="/">sign up</SmartLink>
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
                  <Row
                    onBackground="neutral-weak"
                    fillWidth
                    gap="24"
                    vertical="center"
                  >
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
                  id="login"
                  label="Log in"
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
          </Column>
        </Column>


        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Logo wordmark={false} size="s" />
            <Text size="m">
              <Text onBackground="neutral-weak">2024 /</Text> Once UI
            </Text>
            <SmartLink href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">
              MIT License
            </SmartLink>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
