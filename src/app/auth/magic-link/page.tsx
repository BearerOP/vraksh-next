"use client";
import {
  Background,
  Button,
  Column,
  Flex,
  Heading,
  Input,
  Text,
  TiltFx,
  useToast,
} from "@/once-ui/components";
import { verifyEmailApi } from "@/utlis/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MagicLink() {
  const router = useRouter();
  const { addToast } = useToast();
  const [code, setCode] = useState<string>("");

  async function verifyEmail(code:string){
    
    try {
      const data = await verifyEmailApi(code);
      console.log("API Response:", data);
      addToast({ message: "Email verified successfully", variant: "success" });
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
      
    } catch (error) {
      addToast({ message: "Error checking username", variant: "danger" });
    } finally {
      console.log("Finally block");
    }

  }

  return (
    <>
      <TiltFx fillWidth paddingX="32" paddingTop="64">
        <Column
          border="neutral-alpha-weak"
          paddingX="32"
          radius="xl"
          overflow="hidden"
          paddingY="104"
          paddingBottom="160"
          fillWidth
          position="relative"
        >
          <Background
            mask={{
              cursor: true,
              radius: 32,
            }}
            position="absolute"
            grid={{
              display: false,
              color: "neutral-alpha-medium",
              width: "2rem",
              height: "2rem",
            }}
            dots={{
              color: "accent-on-background-medium",
              display: true,
              opacity: 100,
              size: "32",
            }}
            gradient={{
              colorEnd: "static-transparent",
              colorStart: "accent-solid-strong",
              display: false,
              height: 100,
              opacity: 100,
              tilt: 0,
              width: 150,
              x: 0,
              y: 0,
            }}
          />
          <Background
            mask={{
              x: 0,
              y: 100,
              radius: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              color: "brand-alpha-strong",
              width: "12",
              height: "12",
            }}
            gradient={{
              display: true,
              opacity: 100,
              height: 100,
              width: 100,
              tilt: 0,
              x: 0,
              y: 100,
              colorStart: "brand-solid-strong",
              colorEnd: "brand-background-medium",
            }}
          />
          <Column horizontal="center" gap="32" fillWidth position="relative">
            <Heading align="center" as="h2" variant="display-default-l">
              Confirm your email
            </Heading>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              align="center"
            >
              We have sent you a magic link to your email address.
              <br /> Click on the link to confirm your email or enter the given
              code here below.
            </Text>
            {/* <CodeBlock
              compact
              maxWidth={40}
              codeInstances={[
                {
                  code: `git clone https://github.com/once-ui-system/nextjs-starter.git`,
                  language: "tsx",
                  label: "tsx",
                },
              ]}
            /> */}
            <Flex maxWidth={20} center align="center" gap="8" fillWidth>
            <Input
              id="code"
              label="Code"
              // errorMessage="enter valid code"
              value={code}
              width={10}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button label="Confirm" variant="primary" onClick={async()=>{
              console.log(code);
               await verifyEmail(code);
            }} />
            </Flex>
          </Column>
        </Column>
      </TiltFx>
    </>
  );
}
