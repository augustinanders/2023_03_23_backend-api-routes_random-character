import { Chance } from "chance";

export default function handler(request, response) {
  var chance = new Chance(Math.random);

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    adress: chance.address({ short_suffix: true }),
  };
  console.log("lol", character);
  response.status(200).json(character);
}
