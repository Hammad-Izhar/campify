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
        tags: z.string().array().optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      })
    )
    .query(
      async ({
        input: {
          minLatitude,
          minLongitude,
          maxLatitude,
          maxLongitude,
          tags,
          startDate,
          endDate,
        },
      }) => {
        console.log("tags", tags);
        const experiences = await prisma.experience.findMany({
          where: {
            latitude: {
              lt: maxLatitude,
              gt: minLatitude,
            },
            longitude: {
              lt: maxLongitude,
              gt: minLongitude,
            },
            tags: tags && {
              hasSome: tags,
            },
            start_date: startDate && {
              gt: startDate,
            },
            end_date: endDate && {
              lt: endDate,
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
            id: true,
            hostId: true,
            tags: true,
            location: true,
          },
          take: 20,
        });
        console.log("experiences", experiences);
        return experiences;
      }
    ),
});
