const games = [
  {
    title: "Among Us",
    genre: "Party Game",
    maturity_rating: "E10+",
    player_number: "Multi",
    developer: "InnerSloth",
    release_date: "June 15, 2018",
    perspective: "3rd",
    path: "assets/amongus.jpg"
  },
  {
    title: "Castle Crashers",
    genre: "Action, Adventure, Beat 'em up,",
    maturity_rating: "T",
    player_number: "Multi/Single",
    developer: "The Behemoth",
    release_date: "August 27, 2008",
    perspective: "3rd",
    path: "assets/cc.jpg"
  },
    {
    title: "Cyberpunk 2077",
    genre: "Action, Adventure RPG; Open World ",
    maturity_rating: "M",
    player_number: "Single",
    developer: "CD Projekt Red",
    release_date: "December 9, 2020",
    perspective: "1st",
    path: "assets/cyberpunk2077.jpg"
  },
  {
    title: "Deep Rock Galactic",
    genre: "Co-op, Class-based Shooter",
    maturity_rating: "T",
    player_number: "Multi/Single",
    developer: "Ghost Ship Games",
    release_date: "February 28, 2018",
    perspective: "1st",
    path: "assets/drg.jpg"
  },
  {
    title: "Detroit: Become Human",
    genre: "Action, Adventure ",
    maturity_rating: "M",
    player_number: "Single",
    developer: "Quantic Dream",
    release_date: "May 25, 2018",
    perspective: "3rd",
    path: "assets/dbc.jpg"
  },
  {
    title: "Disco Elysium",
    genre: "Adventure, RPG, Point and click ",
    maturity_rating: "M",
    player_number: "Single",
    developer: "ZA/UM",
    release_date: "October 15, 2019",
    perspective: "3rd",
    path: "assets/discoelysium.jpg"
  },
  {
    title: "Fallout: New Vegas",
    genre: "Action, RPG ",
    maturity_rating: "M",
    player_number: "Single",
    developer: "Obsidian Entertainment",
    release_date: "October 19, 2010",
    perspective: "3rd/1st",
    path: "assets/fnv.jpeg"
  },
  {
    title: "Hotline Miami",
    genre: "Action, Top-down Shooter",
    maturity_rating: "M",
    player_number: "Single",
    developer: "Dennaton Games",
    release_date: "October 23, 2012",
    perspective: "3rd",
    path: "assets/hotlinemiami.png"
  },
  {
    title: "Katana Zero",
    genre: "Platformer",
    maturity_rating: "M",
    player_number: "Single",
    developer: "Askiisoft",
    release_date: "April 18, 2019",
    perspective: "3rd",
    path: "assets/katanazero.jpg"
  },
  {
    title: "Lego Marvel Superheroes",
    genre: "Action, Adventure, Open World ",
    maturity_rating: "E10+",
    player_number: "Multi/Single",
    developer: "Traveller's Tales",
    release_date: "October 22, 2013",
    perspective: "3rd/1st",
    path: "assets/lms.jpg"
  },
  {
    title: "Life is Strange",
    genre: "Narrative, Adventure, Episodic,",
    maturity_rating: "M",
    player_number: "Single",
    developer: "Don'tNod",
    release_date: "January 30, 2015",
    perspective: "3rd",
    path: "assets/lis.jpg"
  },
  {
    title: "LittleBigPlanet",
    genre: "Sandbox, Platformer",
    maturity_rating: "E",
    player_number: "Multi/Single",
    developer: "Media Molecule",
    release_date: "October 27, 2008",
    perspective: "3rd",
    path: "assets/LBP.jpg"
  },
  {
    title: "Mario Kart 8",
    genre: "Kart Racing, Party Game",
    maturity_rating: "E",
    player_number: "Multi/Single",
    developer: "Nintendo",
    release_date: "May 30, 2014",
    perspective: "3rd",
    path: "assets/mk8.jpg"
  },
  {
    title: "Marvel Rivals",
    genre: "Class-based Shooter",
    maturity_rating: "T",
    player_number: "Multi",
    developer: "NetEase",
    release_date: "December 6, 2024",
    perspective: "3rd",
    path: "assets/rivals.webp"
  },
   {
    title: "Minecraft",
    genre: "Sandbox, Co-op",
    maturity_rating: "E10+",
    player_number: "Multi/Single",
    developer: "Mojang Studios",
    release_date: "November 18, 2011",
    perspective: "1st/3rd",
    path: "assets/minecraft.jpg"
  },
  {
    title: "Night in the Woods",
    genre: "Narrative, adventure",
    maturity_rating: "T",
    player_number: "Single",
    developer: "Secret Lab",
    release_date: "February 21, 2017",
    perspective: "3rd",
    path: "assets/nitw.jpg"
  },
  {
    title: "Overwatch",
    genre: ["Class-Based Shooter"],
    maturity_rating: "T",
    player_number: "Multi",
    developer: "Blizzard",
    release_date: "May 24, 2016",
    perspective: "1st",
    path: "assets/overwatch.jpg"
  },
  {
    title: "Plants vs. Zombies: Garden Warfare",
    genre: "Class-based Shooter",
    maturity_rating: "E10+",
    player_number: "Multi",
    developer: "PopCap Vancouver",
    release_date: "February 25, 2014",
    perspective: "3rd",
    path: "assets/pvzgw.jpg"
  },
  {
    title: "Pokemon Platinum",
    genre: "Adventure, RPG",
    maturity_rating: "E",
    player_number: "Single",
    developer: "Game Freak",
    release_date: "September 13, 2008",
    perspective: "3rd",
    path: "assets/pokemonp.jpg"
  },
  {
    title: "Portal 2",
    genre: "Action, Adventure, Puzzle, Platformer",
    maturity_rating: "E10+",
    player_number: "Multi/Single",
    developer: "Valve",
    release_date: "April 18, 2011",
    perspective: "1st",
    path: "assets/portal2.jpg"
  },
  {
    title: "R.E.P.O.",
    genre: "Co-op, Survival Horror, ",
    maturity_rating: "T",
    player_number: "Multi/Single",
    developer: "Semiwork Studios",
    release_date: "February 26, 2025",
    perspective: "1st",
    path: "assets/repo.jpg"
  },
  {
    title: "Rayman Origins",
    genre: "Adventure, Platformer, Beat 'em up",
    maturity_rating: "E10+",
    player_number: "Multi/Single",
    developer: "Ubisoft",
    release_date: "November 15, 2011",
    perspective: "3rd",
    path: "assets/raymanorigins.jpg"
  },
   {
    title: "Red Dead Redemption 2",
    genre: "Action, Adventure, RPG, Open World ",
    maturity_rating: "M",
    player_number: "Multi/Single",
    developer: "Rockstar Games",
    release_date: "October 26, 2018",
    perspective: "3rd/1st",
    path: "assets/rdr2.jpg"
  },
  {
    title: "Skylanders: Spyro's Adventure",
    genre: "Action, Adventure, RPG, Platformer, ",
    maturity_rating: "E10+",
    player_number: "Multi/Single",
    developer: "Toys for Bob",
    release_date: "October 12, 2011",
    perspective: "3rd",
    path: "assets/skylanders.jpg"
  },
  {
    title: "Stardew Valley",
    genre: "Adventure, RPG, Farm life sim",
    maturity_rating: "E10+",
    player_number: "Multi/Single",
    developer: "ConcernedApe",
    release_date: "February 26, 2016",
    perspective: "3rd",
    path: "assets/stardew.jpeg"
  },
  {
    title: "Super Smash Bros. Brawl",
    genre: "Platformer, Beat 'em up",
    maturity_rating: "T",
    player_number: "Multi/Single",
    developer: "Sora Ltd",
    release_date: "January 30, 2008",
    perspective: "3rd",
    path: "assets/ssb.jpg"
  },
  {
    title: "Team Fortress 2",
    genre: "Class-based Shooter",
    maturity_rating: "M",
    player_number: "Multi",
    developer: "Valve",
    release_date: "October 10, 2007",
    perspective: "1st",
    path: "assets/tf2.jpg"
  },
  {
    title: "The Case of the Golden Idol",
    genre: "Adventure, Puzzle, Point and click ",
    maturity_rating: "T",
    player_number: "Single",
    developer: "Color Gray Games",
    release_date: "October 13, 2022",
    perspective: "3rd",
    path: "assets/tcotgi.png"
  },
  {
    title: "The Finals",
    genre: "Class-based Shooter",
    maturity_rating: "T",
    player_number: "Multi",
    developer: "Embark Studios",
    release_date: "December 7, 2023",
    perspective: "3rd/1st",
    path: "assets/thefinals.jpg"
  },
  {
    title: "The Last of Us",
    genre: "Action, Adventure, Survival Horror ",
    maturity_rating: "M",
    player_number: "Single",
    developer: "Naughty Dog",
    release_date: "June 14, 2013",
    perspective: "3rd",
    path: "assets/tlou.jpg"
  },
  {
    title: "The Outlast Trials",
    genre: "Action, Adventure, Survival Horror ",
    maturity_rating: "M",
    player_number: "Multi/Single",
    developer: "Red Barrels",
    release_date: "May 18, 2023",
    perspective: "1st",
    path: "assets/TOT.jpg"
  },
  {
    title: "The Walking Dead",
    genre: "Episodic, Adventure, Survival Horror",
    maturity_rating: "M",
    player_number: "Single",
    developer: "Telltale Games",
    release_date: "April 24, 2012",
    perspective: "3rd",
    path: "assets/twdg.jpg"
  },
  {
    title: "Undertale",
    genre: "Adventure, RPG",
    maturity_rating: "E10+",
    player_number: "Single",
    developer: "Toby Fox",
    release_date: "September 15, 2015",
    perspective: "3rd",
    path: "assets/undertale.jpg"
  },
]