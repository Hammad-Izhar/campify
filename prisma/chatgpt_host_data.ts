import type { Host } from "@prisma/client";
import { ObjectID } from "bson";

export const hostData = [
  {
    id: new ObjectID().toString(),
    name: "John Smith",
    dob: new Date("01/01/90"),
    bio: "An avid hiker and nature lover, I am always seeking new adventures in the great outdoors. From exploring mountain trails to camping under the stars, I find peace and inspiration in the beauty of nature.",
  },
  {
    id: new ObjectID().toString(),
    name: "Jane Doe",
    dob: new Date("03/15/80"),
    bio: "I am passionate about the natural world and spend as much time as I can outside, whether it's camping, backpacking, or simply taking a walk in the woods. The outdoors is my sanctuary and my source of inspiration.",
  },
  {
    id: new ObjectID().toString(),
    name: "Bob Johnson",
    dob: new Date("07/25/75"),
    bio: "For me, nothing beats the thrill of exploring the great outdoors. Whether it's camping in the mountains, backpacking through the wilderness, or simply enjoying a day hike, I find joy in every outdoor adventure I embark on.",
  },
  {
    id: new ObjectID().toString(),
    name: "Emily Davis",
    dob: new Date("04/12/85"),
    bio: "I am a true nature enthusiast, who finds peace and connection when camping and spending time in the outdoors. I believe that nature is the best way to heal, find inspiration and peace.",
  },
  {
    id: new ObjectID().toString(),
    name: "Michael Brown",
    dob: new Date("06/20/77"),
    bio: "I spend as much time as possible in the great outdoors. I love nothing more than a good camping trip and the beauty of nature is my constant source of inspiration.",
  },
  {
    id: new ObjectID().toString(),
    name: "Sarah Miller",
    dob: new Date("09/30/82"),
    bio: "I am a true outdoors enthusiast, who loves nothing more than camping, hiking, and exploring the natural world. From the mountains to the sea, I find joy in every outdoor adventure I embark on.",
  },
  {
    id: new ObjectID().toString(),
    name: "David Garcia",
    dob: new Date("11/05/79"),
    bio: "I am an outdoor lover, who finds inspiration and peace when camping and enjoying nature. Whether it's hiking, fishing, or just enjoying the scenery, I find myself at home in the great outdoors.",
  },
  {
    id: new ObjectID().toString(),
    name: "Jessica Martinez",
    dob: new Date("02/14/84"),
    bio: "I live for the outdoors, and I am happiest when camping, hiking, and exploring the natural world. The beauty of nature never ceases to amaze me and I always find new inspiration in the great outdoors.",
  },
  {
    id: new ObjectID().toString(),
    name: "Jason Robinson",
    dob: new Date("08/03/81"),
    bio: "I am a passionate outdoor enthusiast, who finds joy in camping, hiking and exploring the natural world. I believe that nature has the power to heal and bring people together, and that's why I spend as much time as possible in the outdoors.",
  },
  {
    id: new ObjectID().toString(),
    name: "Ashley Taylor",
    dob: new Date("05/02/87"),
    bio: "I am a lover of the great outdoors, who finds peace and inspiration in nature. Whether I am camping, hiking, or simply enjoying a day in the wilderness, I find joy in every outdoor adventure I embark on.",
  },
];
