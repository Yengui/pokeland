import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const seasons = [
  {
    id: 0,
    name: "Chronicles",
    name2: "Pokemon chronicles",
    description:
      "While Ash Ketchum continues on his quest to become the best, many others will experience their own unique journey through the Pokémon world—researchers, professors, Gym Leaders, Team Rocket members, Trainers, and even Pokémon. Some are familiar faces and others are strangers at first, but what they all have in common is a love of adventure—especially when it involves Pokémon!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/chronicles/chronicles_ep01_ss2.jpg",
  },
  {
    id: 1,
    name: "Season 1",
    name2: "Pokémon: Indigo League",
    description:
      "It’s Ash Ketchum’s tenth birthday, and he’s ready to do what many 10-year-olds in the Kanto region set out to do—become a Pokémon Trainer! Things don’t go exactly the way he planned when he ends up with a Pikachu instead of a standard first Pokémon, and winning Gym Badges turns out to be much tougher than he thought. Luckily he’s got former Gym Leaders Brock and Misty at his side, along with a bevy of new Pokémon friends, including Bulbasaur, Squirtle, and Charmander.",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season01/season01_main.jpg",
  },
  {
    id: 2,
    name: "Season 2",
    name2: "Pokémon: Adventures in the Orange Islands",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season02/season02_main.jpg",
  },
  {
    id: 3,
    name: "Season 3",
    name2: "Pokémon: The Johto Journeys",
    description:
      "The Orange League beckons and Ash answers the call, taking on the Orange Crew and their leader, Drake. Upon returning to Pallet Town, Ash and Misty reunite with Brock and set out on the next stage of their Pokémon journey—the Johto region! Though he still has an errand to run for Professor Oak, Ash jumps with both feet into the Johto League, taking on a couple of Gym Leaders and adding Pokémon like Totodile and Chikorita to his team.",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season03/season03_main.jpg",
  },
  {
    id: 4,
    name: "Season 4",
    name2: "Pokémon: Johto League Champions",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season04/season04_main.jpg",
  },
  {
    id: 5,
    name: "Season 5",
    name2: "Pokémon: Master Quest",
    description:
      "With the Olivine City Gym temporarily out of commission, our heroes are off to the Whirl Cup Competition—and Misty wants in on the action! Resuming their journey, they find that Jessie, James, and Meowth aren’t the only members of Team Rocket they need to worry about, though that dastardly trio still has a few tricks up their collective sleeve. After a heated battle with the final Gym Leader, Ash moves on to the Silver Conference, but does he have the mettle to take on his old rival, Gary?",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season05/season05_main.jpg",
  },
  {
    id: 6,
    name: "Season 6",
    name2: "Pokémon Advanced",
    description:
      "Polishing off the Silver Conference, Ash heads toward his next challenge—the far-off Hoenn region! While he must say goodbye to old friends, he makes the acquaintance of May, a Trainer just starting out on her Pokémon journey. Along with her little brother Max and the ever-reliable Brock, this pack of Pokémon Trainers begin pursuing their dreams—with Ash racking up three Gym Badges, while May changes tack to follow the Contest path of a Pokémon Coordinator.",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season06/season06_main.jpg",
  },
  {
    id: 7,
    name: "Season 7",
    name2: "Pokémon: Advanced Challenge",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season07/season07_main.jpg",
  },
  {
    id: 8,
    name: "Season 8",
    name2: "Pokémon: Advanced Battle",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season08/season08_main.jpg",
  },
  {
    id: 9,
    name: "Season 9",
    name2: "Pokémon: Battle Frontier",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season09/season09_main.jpg",
  },
  {
    id: 10,
    name: "Season 10",
    name2: "Pokémon: Diamond and Pearl",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season10/season10_main.jpg",
  },
  {
    id: 11,
    name: "Season 11",
    name2: "Pokémon: DP Battle Dimension",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season11/season11_main.jpg",
  },
  {
    id: 12,
    name: "Season 12",
    name2: "Pokémon: DP Galactic Battles",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season12/season12_main.jpg",
  },
  {
    id: 13,
    name: "Season 13",
    name2: "Pokémon: DP Sinnoh League Victors",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season13/season13_main.jpg",
  },
  {
    id: 14,
    name: "Season 14",
    name2: "Pokémon: Black & White",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season14/season14_main.jpg",
  },
  {
    id: 15,
    name: "Season 15",
    name2: "Pokémon: BW Rival Destinies",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season15/season15_main.jpg",
  },
  {
    id: 16,
    name: "Season 16",
    name2: "Pokémon: BW Adventures in Unova and Beyond",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season16/season16_main.jpg",
  },
  {
    id: 17,
    name: "Season 17",
    name2: "Pokémon the Series: XY",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season17/season17_ep01_ss03.jpg",
  },
  {
    id: 18,
    name: "Season 18",
    name2: "Pokémon the Series: XY Kalos Quest",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season18/season18_main.jpg",
  },
  {
    id: 19,
    name: "Season 19",
    name2: "Pokémon the Series: XYZ",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season19/season19_main.jpg",
  },
  {
    id: 20,
    name: "Season 20",
    name2: "Pokémon the Series: Sun & Moon",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season20/season20_ep01_ss01.jpg",
  },
  {
    id: 21,
    name: "Season 21",
    name2: "Pokémon the Series: Sun & Moon—Ultra Adventures",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season21/season21_ep01_ss03.jpg",
  },
  {
    id: 22,
    name: "Season 22",
    name2: "Pokémon the Series: Sun & Moon – Ultra Legends",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season22/season22_ep01_ss01.jpg",
  },
  {
    id: 23,
    name: "Season 23",
    name2: "Pokémon Journeys: The Series",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season23/season23_ep01_ss01.jpg",
  },
  {
    id: 24,
    name: "Season 24",
    name2: "Pokémon Master Journeys: The Series",
    description:
      "Ash’s journey to the top of the Indigo League continues—but will his friendship with fellow Pokémon League competitor Richie endanger his chances? With his Kanto journey completed, Ash finds there’s still plenty to see and do when Professor Oak sends him and his friends to the Orange Islands. Brock falls head-over-heels for the attractive Professor Ivy and decides to stay with her, leaving Ash and Misty alone as a dynamic duo—at least until they meet intrepid Pokémon watcher Tracey Sketchit!",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep04_ss03.png",
  },
];

export function ActionAreaCard({ name, name2, image }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="mt-4 mb-14 mx-4 max-h-80">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="chronicles"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="h-full">
            {name2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Section1Home() {
  return (
    <div className="bg-slate-100 py-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {seasons.map((season, i) => (
          <SwiperSlide key={"season" + i}>
            <ActionAreaCard
              name={season.name}
              name2={season.name2}
              image={season.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Section1Home;
