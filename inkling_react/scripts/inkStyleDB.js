const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inklingStyles",
  {
    useMongoClient: true
  }
);

const styleSeed = [
  {
    style: "Traditional",
    img: "http://placehold.it/700x300",
    des:
      "The traditional style was born on the high seas during the 1700s, after sailors like those who sailed with Capitan James Cook first encountered indigenous communities with tattoos and, becoming inspired by their bodily markings, decided to start collecting body art as mementos of their long voyages. Over the course of the 19th century, the style became more refined taking on the boldly lined and brightly colored aesthetic seen in the work of well-known American tattooists of the 1900s like Sailor Jerry.",
    // date: new Date(Date.now())
  },
  {
    style: "Realism",
    img: "http://placehold.it/700x300",
    des:
      "Though classic realism has been a part of the fine art since as far back as the Renaissance, it only found its way to the world of tattoos recently, cropping up around the latter half of the 20th century. Since then, the style has become increasingly refined and extremely popular. As it now stands, you can find jaw-dropping color and black and grey portraits of pretty much any celebrity you can think of as well as realistic depictions of nature and just about anything else imaginable, even the surreal.",
    // date: new Date(Date.now())
  },
  {
    style: "Watercolor",
    img: "http://placehold.it/700x300",
    des:
      "The watercolor style is currently in vogue. It's in extremely high demand by the most recent generation of tattoo enthusiasts, who seem to be looking for something new to match the new millennium. It looks like what it sounds like, as if rendered with a brush dabbled in watery pastels. However, looks can be deceiving, while it's easy to create this aesthetic when working with actual watercolors on paper or canvas, doing it with ink on the human body is no simple feat. Still, artists make all sorts of whimsical and poetic pieces using this innovative approach to tattooing.",
    date: new Date(Date.now())
  },
  {
    style: "Tribal",
    img: "http://placehold.it/700x300",
    des:
      "Tribal tattoos — i.e. indigenous body art — are the oldest in the world, dating back thousands of years. This style should actually be thought of as multiple styles or more so different traditions of tattooing from aboriginal communities all around the globe. These diverse and beautiful styles are frequently referred to under the umbrella term 'tribal', but to the trained eye, Polynesian body art is distinctive from Marquesan just like tattoos on Inupiaq matriarchs' faces are different from those found on Berber women. Though these styles are all unique, they are somewhat similar— almost always done in black with elaborate patterns.",
    date: new Date(Date.now())
  },
  {
    style: "New School",
    img: "http://placehold.it/700x300",
    des:
      "Don't let the name fool you, new school isn't really all that new anymore. It rose to prominence in the weirdness that was the late '80s and early '90s, but lately it has waned in popularity. This is probably because it was very much a product of its time, featuring a highly animated aesthetic that takes after popular entertainment from that period in American history. The style is cartoonish and wacky, featuring caricatures and other exaggerated figures. If you're the sort of person who likes their body art injected with the spirit of Ren and Stimpy, then this comic style is for you.",
    date: new Date(Date.now())
  },
  {
    style: "Neo Traditional",
    img: "http://placehold.it/700x300",
    des:
      "Neo-traditional, as the name implies, is an evolution of the traditional style. It features the core properties of its predecessor, like pronounced linework and extremely vibrant colors but it also has a illustrative quality to it. This is because neo-traditional artists employ various line weights to achieve a more textured and detailed aesthetic. In pieces done in this style, you'll also find more blended colors schemes, giving primary figures a plush appearance, which is why it's so ideal for depicting things like animals and lively imagery. ",
    date: new Date(Date.now())
  },
  {
    style: "Japanese",
    img: "http://placehold.it/700x300",
    des:
      "The traditional Japanese style, aka Irezumi, originated during the Edo period (1603-1868) alongside ukiyo-e — woodblock prints that were hugely popular among the merchant class at the time. Because of this, the icons found in this time-tested genre of body art come from the country's age-old folklore, featuring tattooed heroes from the Suikoden and mythological creatures like dragons, kirins, and phoenixes. In short, every tattoo done in this style tells a story about Japans rich past, and beyond their dramatic smoke and wave filled appearance, this is what makes Irezumi masterpieces so powerful. ",
    date: new Date(Date.now())
  },
  {
    style: "Blackwork",
    img: "http://placehold.it/700x300",
    des:
      "Stylistically speaking, blackwork is a very broad categorical term. It applies almost any body art that's created using solely black ink, but as you can imagine, a lot can be done with this versatile and striking color. Looking through blackwork artists portfolios, you'll see everything from ancient sacred geometry to modern abstract ornamental designs to extremely detailed illustrative pieces. It is hands down the style where the most experimentation is currently occurring in the industry, and some of the work being produced today is absolutely mind-blowing.",
    date: new Date(Date.now())
  },
  {
    style: "Misc. Styles",
    img: "http://placehold.it/700x300",
    des:
      "Misc tatooo styles",
    date: new Date(Date.now())
  }
];

db.Style
  .remove({})
  .then(() => db.Style.collection.insertMany(styleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
