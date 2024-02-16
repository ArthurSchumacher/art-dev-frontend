"use server";

import { SendEmailDto } from "@/types/send-email.dto";
import axios from "axios";

export async function sendEmail(email: SendEmailDto) {
  const res = await axios
    .post(`${process.env.API_URL}/sendMail`, JSON.stringify(email), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });

  return res;
}
