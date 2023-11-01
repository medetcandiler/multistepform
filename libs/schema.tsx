import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, 'this field is required'),
  lastName: z.string().min(1, 'this field is required'),
  email: z.string().min(1, 'this field is required').email()
})