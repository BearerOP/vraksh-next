"use client";

import React, { useState } from "react";
import {
  Heading,
  Text,
  Button,
  Logo,
  Input,
  SmartLink,
  SmartImage,
  Line,
  Background,
  useToast,
  Column,
  Row,
  RevealFx,
} from "@/once-ui/components";
import { sendMagicLink } from "@/utlis/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const { addToast } = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Email is invalid.");
      return false;
    }
    setError("");
    return true;
  };

  async function sendMagicLinkApi() {
    if (!validateLogin()) return;

    try {
      const data = await sendMagicLink(email);
      console.log(data);
      if (data.success) {
        router.push("/auth/magic-link");
        addToast({ message: "Email sent successfully", variant: "success" });
      } else {
        addToast({ message: "Failed to send email", variant: "danger" });
      }
    } catch (error) {
      addToast({ message: "Error sending email", variant: "danger" });
    }
  }

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
          onBackground="neutral-medium"
        >
          Log in or
          <SmartLink href="/auth/signup">&thinsp;sign up</SmartLink>
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
            errorMessage={error}
          />
        </Column>
        <Button
          id="login"
          label="Log in"
          arrowIcon
          fillWidth
          onClick={sendMagicLinkApi}
        />
      </Column>
    </Row>
  );
}
