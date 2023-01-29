import { prisma } from "../src/server/db";
import { hostData } from "./chatgpt_host_data";
import { experienceData } from "./chatgpt_experience_data";
import images from "./imageData.json";

async function clearDb() {
  await prisma.host.deleteMany();
  await prisma.experience.deleteMany();
}

async function makeRobExperiences(id: string) {
  await prisma.experience.createMany({
    data: [
      {
        hostId: id,
        name: "Rush Pond Fishing Adventure",
        location: "Queensbury",
        cost: 109.99,
        description: "Go fishing at rush pond!",
        latitude: 43.3500298,
        longitude: -73.7019347,
        tags: ["Fishing", "Canoing", "Outdoors"],
      },
      {
        hostId: id,
        name: "Hick on Buck Mountain",
        location: "Queensbury",
        cost: 109.99,
        description: "Go fishing at rush pond!",
        latitude: 43.3510298,
        longitude: -73.7319347,
        tags: ["Hiking", "Outdoors"],
      },
      {
        hostId: id,
        name: "Something really far outside of the search zone",
        location: "Queensbury",
        cost: 109.99,
        description: "Really should not be visible",
        latitude: 143.3500298,
        longitude: -83.7019347,
      },
    ],
  });
}

async function main() {
  await clearDb();

  await prisma.host.createMany({ data: hostData });

  const hostIds = hostData.map((host) => host.id);
  const experiencesWithIds = experienceData.map((experience) => {
    return {
      ...experience,
      hostId: hostIds[Math.floor(Math.random() * hostIds.length)] ?? "",
      images: images[experience.location],
    };
  });

  await prisma.experience.createMany({ data: experiencesWithIds });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
