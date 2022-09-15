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
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-0/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/chronicles/chronicles_ep01_ss2.jpg",
  },
  {
    id: 1,
    name: "Season 1",
    name2: "Pokémon: Indigo League",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-1/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season01/season01_main.jpg",
  },
  {
    id: 2,
    name: "Season 2",
    name2: "Pokémon: Adventures in the Orange Islands",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-2/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season02/season02_main.jpg",
  },
  {
    id: 3,
    name: "Season 3",
    name2: "Pokémon: The Johto Journeys",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-3/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season03/season03_main.jpg",
  },
  {
    id: 4,
    name: "Season 4",
    name2: "Pokémon: Johto League Champions",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-4/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season04/season04_main.jpg",
  },
  {
    id: 5,
    name: "Season 5",
    name2: "Pokémon: Master Quest",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-5/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season05/season05_main.jpg",
  },
  {
    id: 6,
    name: "Season 6",
    name2: "Pokémon Advanced",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-6/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season06/season06_main.jpg",
  },
  {
    id: 7,
    name: "Season 7",
    name2: "Pokémon: Advanced Challenge",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-7/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season07/season07_main.jpg",
  },
  {
    id: 8,
    name: "Season 8",
    name2: "Pokémon: Advanced Battle",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-8/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season08/season08_main.jpg",
  },
  {
    id: 9,
    name: "Season 9",
    name2: "Pokémon: Battle Frontier",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-9/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season09/season09_main.jpg",
  },
  {
    id: 10,
    name: "Season 10",
    name2: "Pokémon: Diamond and Pearl",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-10/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season10/season10_main.jpg",
  },
  {
    id: 11,
    name: "Season 11",
    name2: "Pokémon: DP Battle Dimension",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-11/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season11/season11_main.jpg",
  },
  {
    id: 12,
    name: "Season 12",
    name2: "Pokémon: DP Galactic Battles",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-12/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season12/season12_main.jpg",
  },
  {
    id: 13,
    name: "Season 13",
    name2: "Pokémon: DP Sinnoh League Victors",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-13/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season13/season13_main.jpg",
  },
  {
    id: 14,
    name: "Season 14",
    name2: "Pokémon: Black & White",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-14/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season14/season14_main.jpg",
  },
  {
    id: 15,
    name: "Season 15",
    name2: "Pokémon: BW Rival Destinies",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-15/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season15/season15_main.jpg",
  },
  {
    id: 16,
    name: "Season 16",
    name2: "Pokémon: BW Adventures in Unova and Beyond",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-16/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season16/season16_main.jpg",
  },
  {
    id: 17,
    name: "Season 17",
    name2: "Pokémon the Series: XY",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-17/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season17/season17_ep01_ss03.jpg",
  },
  {
    id: 18,
    name: "Season 18",
    name2: "Pokémon the Series: XY Kalos Quest",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-18/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season18/season18_main.jpg",
  },
  {
    id: 19,
    name: "Season 19",
    name2: "Pokémon the Series: XYZ",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-19/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season19/season19_main.jpg",
  },
  {
    id: 20,
    name: "Season 20",
    name2: "Pokémon the Series: Sun & Moon",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-20/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season20/season20_ep01_ss01.jpg",
  },
  {
    id: 21,
    name: "Season 21",
    name2: "Pokémon the Series: Sun & Moon—Ultra Adventures",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-21/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season21/season21_ep01_ss03.jpg",
  },
  {
    id: 22,
    name: "Season 22",
    name2: "Pokémon the Series: Sun & Moon – Ultra Legends",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-22/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season22/season22_ep01_ss01.jpg",
  },
  {
    id: 23,
    name: "Season 23",
    name2: "Pokémon Journeys: The Series",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-23/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season23/season23_ep01_ss01.jpg",
  },
  {
    id: 24,
    name: "Season 24",
    name2: "Pokémon Master Journeys: The Series",
    url: "https://www.pokemon.com/us/pokemon-episodes/pokemon-tv-seasons/season-24/",
    image:
      "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep04_ss03.png",
  },
];

export function ActionAreaCard({ name, name2, image, url }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="mt-4 mb-14 mx-4 max-h-80">
      <a href={url} target="_blank">
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
            <Typography
              variant="body2"
              color="text.secondary"
              className="h-full"
            >
              {name2}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

function Section1Home() {
  return (
    <section className="bg-slate-100 py-24">
      <h1 className="pokehollow mx-auto text-red-600 text-5xl sm:text-7xl text-center break-all mb-28 mt-5 underline decoration-4 decoration-yellow-400 decoration-dotted">
        Tv Series
      </h1>
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
          <SwiperSlide key={"season123" + i}>
            <ActionAreaCard
              name={season.name}
              name2={season.name2}
              image={season.image}
              url={season.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Section1Home;
