import { createSlice } from "@reduxjs/toolkit";

const citiesArr = [
  {
    city: "Kaunas",
    about:
      "Kaunas is a city in south-central Lithuania. At the confluence of the Neris and Nemunas rivers, Kaunas Castle is a medieval fortress housing historical exhibitions. To the east, the old town is home to the Kaunas Cathedral Basilica, with its ornate interior, and the Gothic spires of the Hanseatic House of Perkūnas. Laisvės Alėja, a pedestrianized street lined with trees and cafes, crosses the city from west to east.",
    image: "https://wallpaperaccess.com/full/6905390.jpg",
  },
  {
    city: "Vilnius",
    about:
      "Vilnius, Lithuania’s capital, is known for its baroque architecture, seen especially in its medieval Old Town. But the buildings lining this district’s partially cobblestoned streets reflect diverse styles and eras, from the neoclassical Vilnius Cathedral to Gothic St. Anne's Church. The 16th-century Gate of Dawn, containing a shrine with a sacred Virgin Mary icon, once guarded an entrance to the original city. ",
    image:
      "https://c4.wallpaperflare.com/wallpaper/5/796/1013/long-exposure-vilnius-cityscape-lithuania-wallpaper-preview.jpg",
  },
  {
    city: "Klaipėda",
    about:
      "Klaipėda is a port city in Lithuania, where the Baltic Sea meets the Danė River. The old town features German-style, 18th-century wood-framed buildings. Theater Square, the city’s main gathering spot, is home to the neoclassical Drama Theater. The square’s 1912 Taravos Anikė sculpture pays tribute to a local poet. The waterside Lithuanian Sea Museum includes dolphin shows and maritime exhibits in a 19th-century fort.",
    image:
      "https://media.istockphoto.com/photos/sunset-in-the-harbor-klaipeda-lithuania-picture-id609066108?k=20&m=609066108&s=612x612&w=0&h=Rf7DqQoigz37wQIKemtx4lS3RAoAw5HzmhIql-LKcRo=",
  },
  {
    city: "Šiauliai",
    about:
      "Šiauliai is a city in northern Lithuania. It's a gateway to the Hill of Crosses, just northeast. A place of pilgrimage, the site was established in the 19th century as a symbol of resistance to Russian rule. It now includes more than 100,000 crosses. In the city center, the Aušros Museum’s several branches include the Photography Museum, with old Lithuanian photos and a camera obscura, and the Bicycle Museum.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/489/498/438/lithuania-hill-of-crosses-siauliai-cross-mountain-wallpaper-preview.jpg",
  },
  {
    city: "Panevėžys",
    about:
      "Panevėžys is the fifth largest city in Lithuania. As of 2011, it occupied 52 square kilometres with 113,653 inhabitants.",
    image:
      "https://cdn.britannica.com/04/145304-050-0E8CE127/St-Peter-Pauls-Church-Lith-Panevezys.jpg",
  },
  {
    city: "Alytus",
    about:
      "Alytus is a city with municipal rights in southern Lithuania. It is the capital of Alytus County. Its population in 2020 was 49,895. Alytus is the historical centre of the Dzūkija region. The city lies on the banks of the Nemunas River.",
    image:
      "https://www.alytusinfo.lt/data/editable_gallery/large/mingaile_kelminskaite_7.jpg",
  },
];

const citySlice = createSlice({
  name: "cities",
  initialState: { city: citiesArr },
});

export default citySlice;

export const cityActions = citySlice.actions;
