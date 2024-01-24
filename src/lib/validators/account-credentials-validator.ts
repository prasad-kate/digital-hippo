import { z } from "zod"

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long" }),
})

export type TAuthCredentialValidator = z.infer<typeof AuthCredentialsValidator>
