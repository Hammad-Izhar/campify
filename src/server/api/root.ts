import { createTRPCRouter } from "./trpc";
import { hostsRouter } from "./routers/hosts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  hosts: hostsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
