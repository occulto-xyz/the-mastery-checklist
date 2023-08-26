import * as z from 'zod'

export const taskSchema = z.object({
    taskName: z.string().min(1).max(50),
    difficulty: z.string().min(1).max(10),
    importance: z.string().min(1).max(10)
});

export type Task = z.infer<typeof taskSchema>;