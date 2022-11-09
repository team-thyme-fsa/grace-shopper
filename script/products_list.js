const products_list = [
  {
    name: 'Poké Ball',
    type: 'POKEBALL',
    description:
      'A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.',
    price: 200,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png',
  },
  {
    name: 'Great Ball',
    type: 'POKEBALL',
    description:
      'A good, high-performance Ball that provides a higher Pokémon catch rate than a standard Poké Ball.',
    price: 600,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/b/bf/Dream_Great_Ball_Sprite.png',
  },
  {
    name: 'Ultra Ball',
    type: 'POKEBALL',
    description:
      'An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball.',
    price: 1200,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/a/a8/Dream_Ultra_Ball_Sprite.png',
  },
  {
    name: 'Premier Ball',
    type: 'POKEBALL',
    description:
      'A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort.',
    price: 350,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/6/64/Dream_Premier_Ball_Sprite.png',
  },
  {
    name: 'Luxury Ball',
    type: 'POKEBALL',
    description:
      'A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.',
    price: 3000,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/7/7e/Dream_Luxury_Ball_Sprite.png',
  },
  {
    name: 'Net Ball',
    type: 'POKEBALL',
    description:
      'A somewhat different Poké Ball that works especially well on Water- and Bug-type Pokémon.',
    price: 1000,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/a/a0/Dream_Net_Ball_Sprite.png',
  },
  {
    name: 'Dive Ball',
    type: 'POKEBALL',
    description:
      'A somewhat different Poké Ball that works especially well on Pokémon that live underwater.',
    price: 1000,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/9/9a/Dream_Dive_Ball_Sprite.png',
  },
  {
    name: 'Master Ball',
    type: 'POKEBALL',
    description:
      'The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.',
    price: 1000000000,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/9/95/Dream_Master_Ball_Sprite.png',
  },
  {
    name: 'Dusk Ball',
    type: 'POKEBALL',
    description:
      'A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.',
    price: 740,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/5/59/Dream_Dusk_Ball_Sprite.png',
  },
  {
    name: 'Fast Ball',
    type: 'POKEBALL',
    description:
      'A Poké Ball that makes it easier to catch Pokémon which are quick to run away.',
    price: 810,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/4/44/Dream_Fast_Ball_Sprite.png',
  },
  {
    name: 'Potion',
    type: 'MEDICINE',
    description: 'Restores 20 HP.',
    price: 300,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/d/df/Dream_Potion_Sprite.png',
  },
  {
    name: 'Super Potion',
    type: 'MEDICINE',
    description: 'Restores 60 HP.',
    price: 700,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/5/57/Dream_Super_Potion_Sprite.png',
  },
  {
    name: 'Hyper Potion',
    type: 'MEDICINE',
    description: 'Restores 120 HP.',
    price: 1200,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/c/c8/Dream_Hyper_Potion_Sprite.png',
  },
  {
    name: 'Max Potion',
    type: 'MEDICINE',
    description: 'Fully restores HP.',
    price: 2500,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/a/a2/Dream_Max_Potion_Sprite.png',
  },
  {
    name: 'Burn Heal',
    type: 'MEDICINE',
    description:
      'A spray-type medicine. It heals a single Pokémon that is suffering from a burn.',
    price: 250,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/f/f4/Dream_Burn_Heal_Sprite.png',
  },
  {
    name: 'Full Heal',
    type: 'MEDICINE',
    description:
      'A spray-type medicine. It heals all the status problems of a single Pokémon.',
    price: 600,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/0/07/Dream_Full_Heal_Sprite.png',
  },
  {
    name: 'Ice Heal',
    type: 'MEDICINE',
    description:
      'A spray-type medicine. It defrosts a Pokémon that has been frozen solid.',
    price: 250,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/2/2a/Dream_Ice_Heal_Sprite.png',
  },
  {
    name: 'Paralyze Heal',
    type: 'MEDICINE',
    description:
      'A spray-type medicine. It eliminates paralysis from a single Pokémon.',
    price: 250,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/2/2a/Dream_Paralyze_Heal_Sprite.png',
  },
  {
    name: 'Antidote',
    type: 'MEDICINE',
    description:
      'A spray-type medicine. It lifts the effect of poison from one Pokémon.',
    price: 100,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/4/42/Dream_Antidote_Sprite.png',
  },
  {
    name: 'Rare Candy',
    type: 'MEDICINE',
    description:
      'A candy that is packed with energy. It raises the level of a single Pokémon by one. Please note that taking care candies can bar your Pokémon from most official Pokémon battles.',
    price: 100000,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/0/02/Dream_Rare_Candy_Sprite.png',
  },
  {
    name: 'Revive',
    type: 'MEDICINE',
    description:
      "A medicine that revives a fainted Pokémon. It restores half the Pokémon's maximum HP. Potential side effects include nose bleeds.",
    price: 1500,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/8/8c/Dream_Revive_Sprite.png',
  },
  {
    name: 'Max Revive',
    type: 'MEDICINE',
    description:
      "A medicine that revives a fainted Pokémon. It fully restores the Pokémon's HP. Potential side effects include nose bleeds and chest hair.",
    price: 3200,
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/4/45/Dream_Max_Revive_Sprite.png',
  },
];

module.exports = products_list;
