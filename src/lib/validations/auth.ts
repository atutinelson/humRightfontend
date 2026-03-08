import {email, z} from "zod";

export const loginSchema = z.object({
    email: z.string(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signUpSchema = z.object({
    email: z.string(),
    name:z.string(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})


export const createTipPlanSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Plan name must be at least 2 characters" })
    .max(100, { message: "Plan name is too long" }),

  price: z
    
    .number()
    .positive({ message: "Price must be greater than 0" }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(1000, { message: "Description is too long" }),

  oddRange: z
    .string()
    .min(1, { message: "Odd range is required" })
    .max(50, { message: "Odd range is too long" }),

  isActive: z.boolean(),
});

export const createPredictionSchema = z.object({
  tipText: z.string().min(5).max(1000),

  odd: z.number().positive().max(100),

  tipDate: z.coerce.date().refine((date) => {
    return date > new Date();
  }, "Tip date must be in the future"),

  isPublished: z.boolean().default(false),

  fixtureIds: z
    .array(z.number().int().positive())
    .min(1, { message: "Select at least one fixture" }),

  planId: z.number().int().positive().optional(),

  // Temporarily commented out until migration is run
  // confidence: z.number().int().min(1).max(10).optional(),
  // category: z.string().min(1).max(50).optional(),
  // priority: z.number().int().min(1).max(3).optional().default(1),
});

export const matchStatusEnum = z.enum([
  "SCHEDULED",
  "PLAYED",
  "CANCELLED"
]);

export const createFixtureSchema = z.object({
  matchDate: z.coerce.date(),

  homeTeam: z
    .string()
    .min(2, { message: "Home team must be at least 2 characters" })
    .max(100, { message: "Home team name is too long" }),

  awayTeam: z
    .string()
    .min(2, { message: "Away team must be at least 2 characters" })
    .max(100, { message: "Away team name is too long" }),

  competition: z
    .string()
    .min(2, { message: "Competition is required" })
    .max(150, { message: "Competition name is too long" }),
  fixtureTip: z.string().max(50, { message: "Fixture tip is too long" }).optional(),
  result: z
    .string()
    .max(20, { message: "Result format is too long" })
    .optional(),

  status: matchStatusEnum.default("SCHEDULED"),
})
.refine(
  (data) => data.homeTeam !== data.awayTeam,
  {
    message: "Home and away teams cannot be the same",
    path: ["awayTeam"],
  }
);

export const PromptFormSchema =z.object({
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  predictionId:z.number().int().positive({ 
    message: "Plan ID must be a positive integer" })
});

export const createJackpotSchema = z.object({
  name: z.string().min(1, "Name is required"),
  startDatetime: z.coerce.date(),
  endDatetime: z.coerce.date(),
  amount: z.number().positive(),
  fixtureIds: z
      .array(z.number().int().positive())
      .min(1, { message: "Select at least one fixture" })
});





export type JackpotForm = z.infer<typeof createJackpotSchema>;
export type PromptFormData = z.infer<typeof PromptFormSchema>;
export type CreateFixtureData = z.infer<typeof createFixtureSchema>;
export type CreatePredictionData = z.infer<typeof createPredictionSchema>;
export type CreateTipData = z.infer<typeof createTipPlanSchema>;
export type SignUpData = z.infer<typeof signUpSchema>;
export type LoginData = z.infer<typeof loginSchema>;