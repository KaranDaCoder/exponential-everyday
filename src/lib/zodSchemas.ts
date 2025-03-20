import { HabitCategory } from '@prisma/client';
import { z } from 'zod';

export const userOnboardingSchema = z.object({
  displayName: z
    .string()
    .regex(
      /^[a-zA-Z0-9]+$/,
      'Display name must only contain letters and numbers only, and no spaces or special characters.'
    )
    .min(3, 'Name should be at least 3 characters.')
    .max(12, 'Name cannot exceed 12 characters.'),

  bio: z
    .string()
    .max(
      300,
      "That's a lot about yourself! Please use 300 or fewer characters."
    )
    .optional(),

  reports: z.boolean().default(false),
  reminders: z.boolean().default(false),
});

export const HabitSchema = z.object({
  name: z
    .string()
    .regex(
      /^[a-zA-Z0-9]/,
      'Habit name must only contain letters and numbers only. No special characters.'
    )
    .min(3, 'Name should be at least 3 characters.')
    .max(30, 'Name cannot exceed 30 characters.'),
  category: z.nativeEnum(HabitCategory),
  description: z.string().optional(),
  start_date: z.date(),
});
