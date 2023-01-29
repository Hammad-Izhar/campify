# Campify

[Campify](https://www.rentacamp.site/) is website for people to find outdoors experiences. It is an opportunity for
people who may not have enough experience to still have an enjoyable adventure with
an outdoors expert.

![Main Page](main_page.png)

This is a project built during the 2023 Hack@Brown Event. Our group members are:
- Hammad Izhar, Project Manager
- Robert Scheidegger, Database
- Edward Bielawa, Animation
- Yizhong (Richard) Hu, Component Design

## Initiative

We realized that many people do want to enjoy camping experiences. However, what is 
preventing them is not interest, but fear of the dangers involved and/or social anxiety
associated with lack of experience. We aim to address this problem by setting up a website
that links the experienced outdoor specialists with possibly inexperienced people. 
We aim to craft a seamless experience such that people with no knowledge or gear can
still enjoy the outdoors.

## Features

We have the following features
1. Experiences Listing. Includes details of location, and experience description
2. Ability to search for experiences by Location, Start/End Date, Experience Type
3. Map to show the location of the experiences, which can also be used for searching
4. A beautiful low-poly interactive 3D animation on the main page of a campsite

## Campfire

The theme of the 2023 Hack@Brown event is Campfire. We address the theme in at least two of the following ways:
1. We provide opportunities for camping, along with other activities
2. Our technology stack has the acronym CAMPFIRE:
   1. **Chat GPT** (Data generation) - In order to populate some data for our hosts and experience, we used ChatGPT to generate some data, including legitimate locations and approximate latitude and longitude coordinates, which was vital for our map interface to make sense.
   2. **Azure** (Bing Search API) - After we generated some data using ChatGPT, we used the names and latitude-longitude pairs to query the Bind Search API (hosted by Azure) to get image links that were related to the experiences themselves.
   3. **MongoDB** (Database) - The MongoDb nosql database is a great tool for lightweight databases like ours, and the ease of deployment.
   4. **Prisma** (ORM) - Prisma is an elegant ORM for managing database schema and querying with type safety. As included in the t3js stack that we were largely baed off of, Prisma was an invaluable tool for managing out database models.
   5. **Flowbite** (Front-end Components) - Flowbite is a Tailwind UI library containing a variety of simple, lightweight components that we used to make components for our app.
   6. **Immer** - To manage state within our react app, we use the `zustand` lightweight state management library, which is aided greatly by the introduction of `immer`, a tool for managing nested state in a clean, concise fashion.
   7. **React** - Like many small apps (on a tight schedule), we built on `Next.js`, which is a client/server `React` library that allows for simple page and API generation. We also heavily relied on `tRPC` to API communication.
   8. **Ed's Blender Models** (Animation) - Ed (group member) made some super cool models and scenes in Blender that we were able to import into our app through `three.js` and create an awesome front page.

