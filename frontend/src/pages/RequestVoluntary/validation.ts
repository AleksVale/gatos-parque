import { z } from 'zod'

export const createVoluntarySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string(),
  document: z
    .string()
    .min(14)
    .max(14)
    .transform((value) => {
      return value.replace(/[^\d]/g, '')
    }),
  reason: z.string().min(1),
  photoKey: z.string().nullable().optional(),
})

export type TCreateVoluntaryForm = z.infer<typeof createVoluntarySchema>
