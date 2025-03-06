import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'

export const checkUsername = async (username: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/check-username?username=${username}`
      );
      console.log(response.data);
      return response.data; // Ensure only relevant data is returned
    } catch (error) {
      console.error("Error checking username:", error);
      throw error; // Throw the error so it can be caught by claimUsername
    }
  };

  type VerifyMagicLinkResponse = {
    success: boolean;
    message: string;
    token: string;
  }

  export const verifyEmailApi = async (code: string) => {

    try {
      const response = await axios.get<Promise<VerifyMagicLinkResponse>>(
        `http://localhost:8080/api/verify-magic-link?code=${code}`
      );
      console.log(response.data);
      return response.data; // Ensure only relevant data is returned
    } catch (error) {
      console.error("Error verifying email:", error);
      throw error; // Throw the error so it can be caught by claimUsername
    }
  }
    type SendMagicLinkResponse = {
      success: boolean;
      message: string;
    }

  export const sendMagicLink = async (email: string) => {
    try {
      const response = await axios.post<Promise<SendMagicLinkResponse>>(
        `http://localhost:8080/api/send-magic-link`,
        { email }
      );
      console.log(response.data);
      return response.data; // Ensure only relevant data is returned
    } catch (error) {
      console.error("Error sending magic link:", error);
      throw error; // Throw the error so it can be caught by claimUsername
    }
  }
  