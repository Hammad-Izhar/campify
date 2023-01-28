import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const experiencesRouter = createTRPCRouter({
  getWithinArea: publicProcedure
    .input(
      z.object({
        minLatitude: z.number(),
        minLongitude: z.number(),
        maxLatitude: z.number(),
        maxLongitude: z.number(),
      })
    )
    .query(
      async ({
        input: { minLatitude, minLongitude, maxLatitude, maxLongitude },
      }) => {
        const experiences = await prisma.experience.findMany({
          where: {
            latitude: {
              lt: minLatitude,
              gt: minLatitude,
            },
            longitude: {
              lt: maxLongitude,
              gt: minLongitude,
            },
          },
          select: {
            cost: true,
            description: true,
            images: true,
            latitude: true,
            longitude: true,
            name: true,
            wyg: true,
            wyn: true,
            host: true,
          },
        });
        return experiences;
      }
    ),
});
