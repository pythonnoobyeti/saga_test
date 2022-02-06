import axios from "axios";

class swapiService {
  async getCharacters() {
    const responce = await axios.get("https://swapi.dev/api/people");
    return responce.data.results;
  }
  async getPlanets() {
    const responce = await axios.get("https://swapi.dev/api/planets");
    return responce.data.results;
  }
}

export default new swapiService();
