import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => "hello"),
})

export type Approuter = typeof appRouter
