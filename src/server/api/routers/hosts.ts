import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const hostsRouter = createTRPCRouter({
  all: publicProcedure
    .query(async () => {
      const hosts = await prisma.host.findMany();
      return hosts;
    }),
});
