import { prisma } from "../src/server/db";
import { ObjectID } from "bson";
import { getImagesFromQuery } from "./bingImageSearch";

async function clearDb() {
  await prisma.host.deleteMany();
}

async function makeRobExperiences(id: string) {
  await prisma.experience.createMany({
    data: [
      {
        hostId: id,
        name: "Rush Pond Fishing Adventure",
        cost: 109.99,
        description: "Go fishing at rush pond!",
        latitude: 43.3500298,
        longitude: -73.7019347,
        tags: ["Fishing", "Canoing", "Outdoors"],
      },
      {
        hostId: id,
        name: "Hick on Buck Mountain",
        cost: 109.99,
        description: "Go fishing at rush pond!",
        latitude: 43.3510298,
        longitude: -73.7319347,
        tags: ["Hiking", "Outdoors"],
      },
      {
        hostId: id,
        name: "Something really far outside of the search zone",
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
  // TESTING
  await getImagesFromQuery("Adirondack Mountains, New York");
  const rob_host_id = new ObjectID().toString();
  await prisma.host.upsert({
    where: {
      id: rob_host_id,
    },
    create: {
      id: rob_host_id,
      dob: new Date("12/09/2001"),
      name: "Robert Scheidegger",
    },
    update: {},
  });
  await makeRobExperiences(rob_host_id);
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
