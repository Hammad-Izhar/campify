import { type Experience } from "@prisma/client";

export const experienceData = [
  {
    name: "Wilderness Adventure",
    cost: 150,
    description:
      "Explore the rugged wilderness with a seasoned guide. Experience the thrill of hunting, hiking, and canoeing in one of the most beautiful locations in the country.",
    location: "Yellowstone National Park, Wyoming",
    latitude: 44.42677,
    longitude: -110.58845,
    tags: ["hunting", "hiking", "canoeing"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Camping in the Mountains",
    cost: 100,
    description:
      "Escape the hustle and bustle of the city and spend a weekend camping in the mountains. Enjoy the fresh air, beautiful scenery, and the opportunity to fish and hike to your heart's content.",
    location: "Sierra Nevada Mountains, California",
    latitude: 37.865101,
    longitude: -119.538329,
    tags: ["camping", "fishing", "hiking"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Rock Climbing Excursion",
    cost: 200,
    description:
      "Join an experienced rock climbing guide for a day of adventure and excitement. Learn the basics of rock climbing and experience the thrill of scaling a mountain.",
    location: "Smith Rock State Park, Oregon",
    latitude: 44.277599,
    longitude: -121.139079,
    tags: ["rock climbing", "lessons"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Kayak and Canoe Adventure",
    cost: 75,
    description:
      "Explore the peaceful waters of a local lake or river with a guided kayak or canoe excursion. Enjoy the tranquility and natural beauty of the surrounding area while learning the basics of paddling.",
    location: "Lake Tahoe, California",
    latitude: 38.894857,
    longitude: -119.934508,
    tags: ["kayaking", "canoeing", "lessons"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Sailing and Swimming Excursion",
    cost: 250,
    description:
      "Join a sailing expert for a day of adventure and fun on the water. Learn the basics of sailing and enjoy the opportunity to swim and snorkel in the beautiful waters of a local bay.",
    location: "Biscayne Bay, Florida",
    latitude: 25.73139,
    longitude: -80.250719,
    tags: ["sailing", "swimming", "lessons"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Ski and Snowboard Adventure",
    cost: 350,
    description:
      "Join a group of experienced skiers and snowboarders for a day of adventure on the slopes. Experience the thrill of skiing and snowboarding in one of the most beautiful locations in the country.",
    location: "Aspen, Colorado",
    latitude: 39.191098,
    longitude: -106.817538,
    tags: ["skiing", "snowboarding"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Horseback Riding Excursion",
    cost: 200,
    description:
      "Join an experienced guide for a guided horseback riding excursion through the beautiful countryside. Enjoy the tranquility of the surroundings and the opportunity to learn the basics of horseback riding.",
    location: "Smoky Mountains, Tennessee",
    latitude: 35.611111,
    longitude: -83.4658,
    tags: ["riding", "lessons"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Fishing Expedition",
    cost: 500,
    description:
      "Join a professional fisherman for a day of fishing on a local lake or river. Learn the basics of fishing and experience the thrill of catching a big one.",
    location: "Lake Michigan, Illinois",
    latitude: 41.878114,
    longitude: -87.629798,
    tags: ["fishing", "lessons"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Hiking and Camping Adventure",
    cost: 200,
    description:
      "Join a group of experienced hikers for a weekend of adventure and camping in the wilderness. Enjoy the natural beauty of the surrounding area and the opportunity to camp under the stars.",
    location: "Grand Canyon National Park, Arizona",
    latitude: 36.10698,
    longitude: -112.112997,
    tags: ["hiking", "camping"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Kayaking and Fishing Excursion",
    cost: 250,
    description:
      "Join a guided kayak excursion through the beautiful waters of a local bay or river. Experience the thrill of kayaking and enjoy the opportunity to swim and snorkel in the clear waters.",
    location: "Chesapeake Bay, Maryland",
    latitude: 38.907192,
    longitude: -77.036871,
    tags: ["kayaking", "swimming"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Mountain Trek",
    cost: 100,
    description:
      "Experience the beauty of the mountains on this challenging trek through rough terrain and breathtaking views.",
    location: "Rocky Mountains",
    latitude: 40.3428,
    longitude: -105.6836,
    tags: ["hiking", "camping", "mountain"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Fishing Expedition",
    cost: 75,
    description:
      "Catch the big one on this guided fishing trip in the heart of the wilderness.",
    location: "Yellowstone National Park",
    latitude: 44.428,
    longitude: -110.5885,
    tags: ["fishing", "camping", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Rock Climbing Adventure",
    cost: 150,
    description:
      "Put your skills to the test on this guided rock climbing excursion through towering cliffs and challenging routes.",
    location: "Yosemite National Park",
    latitude: 37.8651,
    longitude: -119.5383,
    tags: ["rock climbing", "outdoors", "adventure"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Canoeing in the Wilderness",
    cost: 50,
    description:
      "Explore serene lakes and winding rivers on this guided canoeing trip through the heart of the wilderness.",
    location: "Boundary Waters Canoe Area Wilderness",
    latitude: 48.668,
    longitude: -92.9951,
    tags: ["canoeing", "camping", "wilderness"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Sailing the Open Seas",
    cost: 200,
    description:
      "Set sail on the open seas and experience the thrill of the wind in your hair on this guided sailing adventure.",
    location: "Bahamas",
    latitude: 25.0478,
    longitude: -77.3554,
    tags: ["sailing", "adventure", "ocean"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Kayaking in the Wilderness",
    cost: 75,
    description:
      "Explore hidden coves and tranquil waters on this guided kayaking trip through the wilderness.",
    location: "Olympic National Park",
    latitude: 47.8083,
    longitude: -123.9549,
    tags: ["kayaking", "wilderness", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Skiing in the Mountains",
    cost: 150,
    description:
      "Experience the rush of skiing down the mountain on this guided skiing excursion through the beautiful Rocky Mountains.",
    location: "Rocky Mountains",
    latitude: 40.3428,
    longitude: -105.6836,
    tags: ["skiing", "mountains", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Snowboarding in the Backcountry",
    cost: 200,
    description:
      "Take on the backcountry on this guided snowboarding excursion through untouched powder and rugged terrain.",
    location: "Sierra Nevada Mountains",
    latitude: 38.5666,
    longitude: -119.9201,
    tags: ["snowboarding", "backcountry", "mountains"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Horseback Riding Lessons",
    cost: 100,
    description:
      "Learn the basics of horseback riding on this guided lesson through beautiful trails and scenic landscapes.",
    location: "Grand Canyon",
    latitude: 36.1069,
    longitude: -112.1126,
    tags: ["riding", "lessons", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Swimming in the Ocean",
    cost: 50,
    description:
      "Dive into the crystal clear waters of the ocean on this guided swimming excursion through beautiful beaches and coral reefs.",
    location: "Hawaii",
    latitude: 19.8968,
    longitude: -155.5828,
    tags: ["swimming", "ocean", "beach"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Rock Climbing Adventure",
    cost: 150,
    description:
      "Challenge yourself on this guided rock climbing excursion through rugged terrain and breathtaking views.",
    location: "Yosemite National Park",
    latitude: 37.8651,
    longitude: -119.5383,
    tags: ["rock climbing", "adventure", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Fishing in the River",
    cost: 75,
    description:
      "Cast your line and reel in the big one on this guided fishing excursion through beautiful rivers and streams.",
    location: "Yellowstone National Park",
    latitude: 44.428,
    longitude: -110.5885,
    tags: ["fishing", "rivers", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Canoeing on the Lake",
    cost: 100,
    description:
      "Explore the beauty of nature on this guided canoeing excursion through serene lakes and picturesque landscapes.",
    location: "Adirondack Mountains",
    latitude: 44.1221,
    longitude: -74.0289,
    tags: ["canoeing", "lakes", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Camping in the Wilderness",
    cost: 75,
    description:
      "Experience the great outdoors on this guided camping excursion through the wilderness and beautiful landscapes.",
    location: "Great Smoky Mountains",
    latitude: 35.6406,
    longitude: -83.6875,
    tags: ["camping", "wilderness", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Kayaking on the River",
    cost: 120,
    description:
      "Paddle through the rapids on this guided kayaking excursion through beautiful rivers and scenic landscapes.",
    location: "Grand Canyon",
    latitude: 36.1069,
    longitude: -112.1126,
    tags: ["kayaking", "rivers", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Sailing on the Sea",
    cost: 200,
    description:
      "Set sail on this guided sailing excursion through beautiful seas and picturesque landscapes.",
    location: "San Francisco Bay",
    latitude: 37.7749,
    longitude: -122.4194,
    tags: ["sailing", "sea", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Skiing in the Mountains",
    cost: 150,
    description:
      "Hit the slopes on this guided skiing excursion through beautiful mountains and picturesque landscapes.",
    location: "Aspen, Colorado",
    latitude: 39.1911,
    longitude: -106.8175,
    tags: ["skiing", "mountains", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Hiking in the Rainforest",
    cost: 100,
    description:
      "Explore the lush greenery and diverse wildlife on this guided hiking excursion through the rainforest.",
    location: "Amazon Rainforest",
    latitude: -3.129,
    longitude: -60.0217,
    tags: ["hiking", "rainforest", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Riding on the Beach",
    cost: 150,
    description:
      "Enjoy the ocean breeze and beautiful views on this guided horseback riding excursion on the beach.",
    location: "Malibu Beach",
    latitude: 34.0259,
    longitude: -118.7798,
    tags: ["riding", "beach", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Swimming in the Oceans",
    cost: 100,
    description:
      "Explore the deep blue sea and discover the marine life on this guided swimming excursion in the ocean.",
    location: "Great Barrier Reef",
    latitude: -18.2828,
    longitude: 147.8222,
    tags: ["swimming", "ocean", "outdoors"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Rock Climbing Adventure in Joshua Tree",
    cost: 150,
    description:
      "Experience the thrill of rock climbing in the beautiful Joshua Tree National Park with a certified guide. All equipment provided.",
    location: "Joshua Tree, California",
    latitude: 34.1388,
    longitude: -116.307,
    tags: ["rock climbing", "lessons"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Sailing in the San Juan Islands",
    cost: 350,
    description:
      "Explore the picturesque San Juan Islands by sailboat with an experienced captain. Includes lunch and snacks.",
    location: "San Juan Islands, Washington",
    latitude: 48.5652,
    longitude: -123.2428,
    tags: ["sailing"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Fishing on the Kenai River",
    cost: 250,
    description:
      "Catch wild salmon on the Kenai River with a experienced guide. All equipment and fishing license provided.",
    location: "Kenai River, Alaska",
    latitude: 60.5544,
    longitude: -151.2591,
    tags: ["fishing"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Camping in Yosemite National Park",
    cost: 50,
    description:
      "Spend a night in the great outdoors at one of Yosemite's campgrounds. Bring your own gear or rent from the park.",
    location: "Yosemite National Park, California",
    latitude: 37.8651,
    longitude: -119.5383,
    tags: ["camping"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Kayaking on the Colorado River",
    cost: 125,
    description:
      "Paddle through the scenic canyons of the Colorado River with a certified guide. All equipment provided.",
    location: "Grand Canyon, Arizona",
    latitude: 36.1069,
    longitude: -112.1126,
    tags: ["kayaking"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Skiing in Vail",
    cost: 150,
    description:
      "Hit the slopes at one of the top ski resorts in the country. Lift ticket and equipment rental included.",
    location: "Vail, Colorado",
    latitude: 39.6403,
    longitude: -106.3742,
    tags: ["skiing"],
    wyn: [],
    wyg: [],
  },
  {
    name: "Hiking in the Adirondacks",
    cost: 0,
    description:
      "Explore the stunning wilderness of the Adirondack Mountains on a guided hike. No experience necessary.",
    location: "Adirondack Mountains, New York",
    latitude: 44.0667,
    longitude: -74.1667,
    tags: ["hiking"],
    wyn: [],
    wyg: [],
  },
  {    "name": "Rocky Mountain High Hike",    "cost": 50,    "description": "Take in the stunning views of the Rocky Mountains on a challenging hike through the range. Guided by experienced hikers, this adventure is perfect for those who love to push their limits and experience the great outdoors.",    "location": "Rocky Mountain National Park, Colorado",    "latitude": 40.3428,    "longitude": -105.6836,    "start_date": "05/15/2022",    "end_date": "05/18/2022",    "tags": ["hiking", "rock climbing", "lessons"]
  },
  {
    "name": "Wild Salmon Fishing Expedition",
    "cost": 300,
    "description": "Join experienced fishermen on a journey to catch wild salmon in the pristine Alaskan waters. This unforgettable experience is perfect for those who love fishing, wildlife, and outdoor adventure.",
    "location": "Juneau, Alaska",
    "latitude": 58.3019,
    "longitude": -134.4197,
    "start_date": "08/01/2022",
    "end_date": "08/07/2022",
    "tags": ["fishing", "camping", "kayaking"]
  },
  {
    "name": "Skiing Adventure in the Swiss Alps",
    "cost": 1000,
    "description": "Experience the thrill of skiing in the Swiss Alps, with breathtaking views of the Swiss mountains and some of the best ski slopes in Europe. Perfect for those who love winter sports, skiing, and luxury travel.",
    "location": "Zermatt, Switzerland",
    "latitude": 46.0207,
    "longitude": 7.7498,
    "start_date": "12/20/2021",
    "end_date": "12/25/2021",
    "tags": ["skiing", "snowboarding", "lessons"]
  },
  {
    "name": "Kayaking Adventure in the Everglades",
    "cost": 200,
    "description": "Explore the stunning beauty of the Everglades National Park on a guided kayaking adventure. Perfect for those who love kayaking, wildlife, and exploring unique ecosystems.",
    "location": "Everglades National Park, Florida",
    "latitude": 25.3170,
    "longitude": -80.9472,
    "start_date": "06/15/2022",
    "end_date": "06/20/2022",
    "tags": ["kayaking", "camping", "swimming"]
  },
  {
    "name": "Horseback Riding in the Wild West",
    "cost": 500,
    "description": "Ride horses through the beautiful landscapes of the Wild West and explore some of the most remote parts of the western United States. Perfect for those who love horses, nature, and adventure.",
    "location": "Montana",
    "latitude": 46.8798,
    "longitude": -110.3626,
    "start_date": "09/01/2022",
    "end_date": "09/05/2022",
    "tags": ["riding", "hiking", "camping"]
  },
  {
    "name": "Sailing the Caribbean",
    "cost": 1500,
    "description": "Sail the crystal-clear waters of the Caribbean and explore some of the most beautiful islands in the world. Perfect for those who love sailing, sun, and adventure.",
    "location": "Caribbean",
    "latitude": 17.7835,
    "longitude": -64.7931,
    "start_date": "01/10/2022",
    "end_date": "01/15/2022",
    "tags": ["sailing", "swimming", "lessons"]
  },
  {
    "name": "Camping in the Grand Canyon",
    "cost": 300,
    "description": "Explore the Grand Canyon on a guided camping trip and take in the breathtaking views of one of the world's most famous natural wonders. Perfect for those who love camping, hiking, and nature.",
    "location": "Grand Canyon National Park, Arizona",
    "latitude": 36.1069,
    "longitude": -112.1126,
    "start_date": "07/01/2022",
    "end_date": "07/05/2022",
    "tags": ["camping", "hiking", "rock climbing"]
  },
  {
    "name": "Rock Climbing in Yosemite",
    "cost": 400,
    "description": "Climb some of the most famous rock formations in the world in Yosemite National Park. Perfect for those who love rock climbing, adventure, and breathtaking views.",
    "location": "Yosemite National Park, California",
    "latitude": 37.8651,
    "longitude": -119.5383,
    "start_date": "05/01/2022",
    "end_date": "05/05/2022",
    "tags": ["rock climbing", "hiking", "lessons"]
  },
  {
    "name": "Hunting in the Wild",
    "cost": 1000,
    "description": "Join experienced hunters on a journey to hunt some of the most exciting game in the world. Perfect for those who love hunting, wildlife, and adventure.",
    "location": "Africa",
    "latitude": 1.9774,
    "longitude": 30.0444,
    "start_date": "11/01/2021",
    "end_date": "11/07/2021",
    "tags": ["hunting", "camping", "hiking"]
  },
  {
    "name": "Canoeing in the Amazon",
    "cost": 800,
    "description": "Explore the Amazon on a guided canoeing trip and see some of the world's most unique wildlife and natural wonders. Perfect for those who love canoeing, adventure, and nature.",
    "location": "Amazon Rainforest, South America",
    "latitude": -2.1699,
    "longitude": -79.9001,
    "start_date": "06/15/2022",
    "end_date": "06/20/2022",
    "tags": ["canoeing", "camping", "swimming"]
  },
  {
    "name": "Snowboarding in the Swiss Alps",
    "cost": 900,
    "description": "Hit the slopes in the Swiss Alps and snowboard some of the world's most challenging terrain. Perfect for those who love skiing, snowboarding, and breathtaking mountain views.",
    "location": "Swiss Alps, Switzerland",
    "latitude": 46.5196,
    "longitude": 7.5456,
    "start_date": "12/15/2021",
    "end_date": "12/20/2021",
    "tags": ["snowboarding", "skiing", "lessons"]
  },
  {
  "name": "Fishing in the Gulf of Mexico",
  "cost": 400,
  "description": "Join experienced fishermen on a journey to fish some of the best waters in the Gulf of Mexico. Perfect for those who love fishing, sun, and adventure.",
  "location": "Gulf of Mexico",
  "latitude": 27.6627,
  "longitude": -97.2974,
  "start_date": "05/01/2022",
  "end_date": "05/03/2022",
  "tags": ["fishing", "camping", "swimming"]
  },
  {
  "name": "Kayaking in the Arctic",
  "cost": 800,
  "description": "Explore the Arctic on a guided kayaking trip and see some of the world's most unique wildlife and natural wonders. Perfect for those who love kayaking, adventure, and nature.",
  "location": "Arctic Circle, Norway",
  "latitude": 70.4575,
  "longitude": 25.6915,
  "start_date": "07/01/2022",
  "end_date": "07/05/2022",
  "tags": ["kayaking", "camping", "swimming"]
  },
  {
  "name": "Horse Riding in the Wild West",
  "cost": 600,
  "description": "Join cowboys on a journey through the Wild West on horseback. Perfect for those who love horse riding, adventure, and breathtaking scenery.",
  "location": "Wild West, USA",
  "latitude": 36.4223,
  "longitude": -102.8198,
  "start_date": "09/01/2022",
  "end_date": "09/05/2022",
  "tags": ["riding", "camping", "swimming"]
  },
  {
  "name": "Swimming with Dolphins",
  "cost": 400,
  "description": "Swim with some of the world's most playful creatures in their natural habitat. Perfect for those who love swimming, dolphins, and adventure.",
  "location": "Hawaii",
  "latitude": 19.8968,
  "longitude": -155.5828,
  "start_date": "08/15/2022",
  "end_date": "08/18/2022",
  "tags": ["swimming", "lessons", "sailing"]
  },
  {    "name": "Rock Climbing in Yosemite National Park",    "cost": 500,    "description": "Climb some of the most challenging rocks in Yosemite National Park. Perfect for those who love rock climbing, adventure, and breathtaking scenery.",    "location": "Yosemite National Park, California",    "latitude": 37.8651,    "longitude": -119.5383,    "start_date": "05/15/2022",    "end_date": "05/18/2022",    "tags": ["rock climbing", "hiking", "camping"]
  },
  {
    "name": "Camping in the Amazon Rainforest",
    "cost": 700,
    "description": "Camp in the Amazon Rainforest and explore some of the world's most unique wildlife and natural wonders. Perfect for those who love camping, nature, and adventure.",
    "location": "Amazon Rainforest, Brazil",
    "latitude": -3.2067,
    "longitude": -60.0253,
    "start_date": "06/01/2022",
    "end_date": "06/05/2022",
    "tags": ["camping", "hiking", "swimming"]
  },
  {
    "name": "Sailing in the Mediterranean",
    "cost": 800,
    "description": "Sail the turquoise waters of the Mediterranean and explore some of the world's most beautiful destinations. Perfect for those who love sailing, adventure, and breathtaking scenery.",
    "location": "Mediterranean Sea",
    "latitude": 36.1383,
    "longitude": 15.1333,
    "start_date": "07/15/2022",
    "end_date": "07/20/2022",
    "tags": ["sailing", "swimming", "lessons"]
  },
  {
    "name": "Skiing in the Rocky Mountains",
    "cost": 600,
    "description": "Ski some of the best slopes in the Rocky Mountains. Perfect for those who love skiing, snowboarding, and breathtaking mountain views.",
    "location": "Rocky Mountains, Colorado",
    "latitude": 39.7392,
    "longitude": -104.9903,
    "start_date": "12/15/2022",
    "end_date": "12/20/2022",
    "tags": ["skiing", "snowboarding", "lessons"]
  },
  {
    "name": "Hunting in the Great Plains",
    "cost": 700,
    "description": "Join experienced hunters on a journey through the Great Plains and hunt some of the world's most unique wildlife. Perfect for those who love hunting, adventure, and nature.",
    "location": "Great Plains, USA",
    "latitude": 39.8282,
    "longitude": -98.5795,
    "start_date": "11/01/2022",
    "end_date": "11/05/2022",
    "tags": ["hunting", "camping", "hiking"]
  },
  {    "name": "Rock Climbing Adventure in Joshua Tree",    "cost": 600,    "description": "Join experienced rock climbers in Joshua Tree National Park and tackle some of the most challenging rocks. Perfect for those who love adventure, rock climbing, and breathtaking scenery.",    "location": "Joshua Tree National Park, California",    "latitude": 33.8734,    "longitude": -115.9005,    "start_date": "05/19/2022",    "end_date": "05/22/2022",    "tags": ["rock climbing", "hiking", "camping"]
  },
  {
    "name": "Kayaking in the Grand Canyon",
    "cost": 800,
    "description": "Join experienced kayakers on a journey through the Grand Canyon and explore one of the world's most breathtaking natural wonders. Perfect for those who love kayaking, adventure, and nature.",
    "location": "Grand Canyon, Arizona",
    "latitude": 36.1070,
    "longitude": -112.1126,
    "start_date": "06/02/2022",
    "end_date": "06/05/2022",
    "tags": ["kayaking", "hiking", "camping"]
  },
  {
    "name": "Fishing in the Amazon River",
    "cost": 700,
    "description": "Join experienced fisherman on a journey through the Amazon River and fish for some of the world's most unique species. Perfect for those who love fishing, adventure, and nature.",
    "location": "Amazon River, Peru",
    "latitude": -3.9395,
    "longitude": -73.2387,
    "start_date": "07/08/2022",
    "end_date": "07/12/2022",
    "tags": ["fishing", "camping", "hiking"]
  },
  {
    "name": "Snowboarding in the Swiss Alps",
    "cost": 800,
    "description": "Snowboard the slopes of the Swiss Alps and experience some of the best snowboarding in the world. Perfect for those who love snowboarding, adventure, and breathtaking mountain views.",
    "location": "Swiss Alps, Switzerland",
    "latitude": 46.5196,
    "longitude": 6.6335,
    "start_date": "12/19/2022",
    "end_date": "12/22/2022",
    "tags": ["snowboarding", "skiing", "lessons"]
  },
  {
    "name": "Horseback Riding in the Grand Tetons",
    "cost": 700,
    "description": "Join experienced horseback riders on a journey through the Grand Tetons and experience some of the world's most breathtaking mountain views. Perfect for those who love riding, adventure, and nature.",
    "location": "Grand Tetons, Wyoming",
    "latitude": 43.7279,
    "longitude": -110.8020,
    "start_date": "11/05/2022",
    "end_date": "11/08/2022",
    "tags": ["riding", "camping", "hiking"]
  },
  {
    "name": "Safari in the Serengeti",
    "cost": 1000,
    "description": "Join experienced safari guides on a journey through the Serengeti and witness the breathtaking wildlife and scenery of one of the world's most unique ecosystems. Perfect for those who love adventure, wildlife, and nature.",
    "location": "Serengeti, Tanzania",
    "latitude": -2.5237,
    "longitude": 34.8242,
    "start_date": "08/07/2022",
    "end_date": "08/12/2022",
    "tags": ["safari", "camping", "hiking"]
  },
  {
    "name": "Trekking in the Himalayas",
    "cost": 700,
    "description": "Join experienced trekkers on a journey through the Himalayas and experience some of the world's most breathtaking mountain views and unique cultural experiences. Perfect for those who love trekking, adventure, and nature.",
    "location": "Himalayas, Nepal",
    "latitude": 28.3949,
    "longitude": 84.1240,
    "start_date": "09/02/2022",
    "end_date": "09/07/2022",
    "tags": ["trekking", "camping", "hiking"]
  },
  {
    "name": "Canyoning in the Blue Mountains",
    "cost": 500,
    "description": "Join experienced canyoneers on a journey through the Blue Mountains and tackle some of the world's most unique canyons. Perfect for those who love adventure, canyoning, and breathtaking scenery.",
    "location": "Blue Mountains, Australia",
    "latitude": -33.6759,
    "longitude": 150.3003,
    "start_date": "01/13/2022",
    "end_date": "01/16/2022",
    "tags": ["canyoning", "camping", "hiking"]
  },
  {
    "name": "Surfing in the Maldives",
    "cost": 800,
    "description": "Join experienced surfers on a journey through the Maldives and surf some of the world's most unique and pristine waves. Perfect for those who love surfing, adventure, and breathtaking scenery.",
    "location": "Maldives",
    "latitude": 1.9652,
    "longitude": 73.5720,
    "start_date": "03/25/2022",
    "end_date": "03/30/2022",
    "tags": ["surfing", "camping", "hiking"]
  },
  {
    "name": "Mountaineering in Mount Kilimanjaro",
    "cost": 1000,
    "description": "Join experienced mountaineers on a journey up Mount Kilimanjaro and experience the thrill of climbing one of the world's tallest mountains. Perfect for those who love mountaineering, adventure, and breathtaking mountain views.",
    "location": "Mount Kilimanjaro, Tanzania",
    "latitude": -3.0674,
    "longitude": 37.3556,
    "start_date": "07/17/2022",
    "end_date": "07/22/2022",
    "tags": ["mountaineering", "camping", "hiking"]
    },
    {
    "name": "Kayaking in the Amazon",
    "cost": 800,
    "description": "Join experienced kayakers on a journey through the Amazon and explore the unique wildlife and scenery of one of the world's largest and most diverse ecosystems. Perfect for those who love kayaking, adventure, and wildlife.",
    "location": "Amazon, Brazil",
    "latitude": -2.3821,
    "longitude": -66.0379,
    "start_date": "06/23/2022",
    "end_date": "06/27/2022",
    "tags": ["kayaking", "camping", "hiking"]
    },
    {
    "name": "Sailing in the Galapagos Islands",
    "cost": 1200,
    "description": "Join experienced sailors on a journey through the Galapagos Islands and experience the unique wildlife and scenery of one of the world's most unique ecosystems. Perfect for those who love sailing, adventure, and wildlife.",
    "location": "Galapagos Islands, Ecuador",
    "latitude": -0.9192,
    "longitude": -89.6240,
    "start_date": "05/08/2022",
    "end_date": "05/12/2022",
    "tags": ["sailing", "camping", "hiking"]
    },
  {    "name": "Mountaineering in Mount Everest",    "cost": 4000,    "description": "Join experienced mountaineers on a journey to the top of the world's highest mountain, Mount Everest. Perfect for those who love mountaineering, adventure, and nature.",    "location": "Mount Everest, Nepal",    "latitude": 27.9880,    "longitude": 86.9250,    "start_date": "04/08/2022",    "end_date": "05/12/2022",    "tags": ["mountaineering", "camping", "hiking"]
  },
  {
    "name": "Kayaking in Ha Long Bay",
    "cost": 700,
    "description": "Join experienced kayakers on a journey through Ha Long Bay, one of the most beautiful and unique landscapes in Asia. Perfect for those who love kayaking, adventure, and nature.",
    "location": "Ha Long Bay, Vietnam",
    "latitude": 20.9541,
    "longitude": 107.0860,
    "start_date": "07/03/2022",
    "end_date": "07/06/2022",
    "tags": ["kayaking", "camping", "hiking"]
  },
  {
    "name": "Sailing in the Andaman Sea",
    "cost": 1500,
    "description": "Join experienced sailors on a journey through the Andaman Sea, one of the most beautiful and unique coastlines in Asia. Perfect for those who love sailing, adventure, and nature.",
    "location": "Andaman Sea, Thailand",
    "latitude": 8.2417,
    "longitude": 98.7783,
    "start_date": "06/12/2022",
    "end_date": "06/18/2022",
    "tags": ["sailing", "camping", "hiking"]
  },
  {
    "name": "Rock Climbing in Mount Kinabalu",
    "cost": 1000,
    "description": "Join experienced rock climbers on a journey to the top of Mount Kinabalu, one of the tallest mountains in Southeast Asia. Perfect for those who love rock climbing, adventure, and nature.",
    "location": "Mount Kinabalu, Malaysia",
    "latitude": 6.1250,
    "longitude": 116.6288,
    "start_date": "05/23/2022",
    "end_date": "05/26/2022",
    "tags": ["rock climbing", "camping", "hiking"]
  },
  {
    "name": "Hiking in Mount Hua",
    "cost": 1500,
    "description": "Join experienced hikers on a journey to the top of Mount Hua, one of the most famous mountains in China known for its dangerous and steep trail. Perfect for those who love hiking, adventure, and nature.",
    "location": "Mount Hua, China",
    "latitude": 34.5196,
    "longitude": 109.0972,
    "start_date": "08/08/2022",
    "end_date": "08/11/2022",
    "tags": ["hiking", "camping", "rock climbing"]
  }

];
