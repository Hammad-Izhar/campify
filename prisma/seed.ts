import { prisma } from "../src/server/db";
import { ObjectID } from "bson";

var seed = 1;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function makeid(length: number = 12) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(random() * charactersLength));
    counter += 1;
  }
  return result;
}

async function main() {
  const hostId_1 = new ObjectID().toString();
  await prisma.host.upsert({
    where: {
      id: hostId_1.toString()
    },
    create: {
      id: hostId_1.toString(),
      dob: new Date("12/09/2001"),
      name: "Robert Scheidegger",
    },
    update: {}
  });
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