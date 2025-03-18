import {z} from "zod";

export const userOnboardingSchema = z.object({
 displayName : z.string().min(3, "Name should be atleast 3 characters").max(15, "Name cannot exceed 15 characters"),
 bio : z.string().optional(),
 reports : z.boolean().default(false)
})