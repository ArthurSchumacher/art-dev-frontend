import { SendEmailDto } from "@/types/send-email.dto";
import axios from "axios";

export async function sendEmail(email: SendEmailDto) {
  const res = await axios
    .post(`${process.env.API_URL}/sendEmail`, JSON.stringify(email))
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });

  return res;
}
