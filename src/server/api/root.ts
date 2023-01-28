import { createTRPCRouter } from "./trpc";
import { hostsRouter } from "./routers/hosts";
import { experiencesRouter } from "./routers/experiences";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  hosts: hostsRouter,
  experiences: experiencesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
