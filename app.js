
import 'regenerator-runtime/runtime';
import axios from 'axios';
  // find elements

  const BASE_URL = 'https://api.highvolume.georanker.com/region/list?';
  const API_KEY = "api-key";

  const getRegionsItems = async () => {

    const config = {
      headers: {
        'Content-Type' : 'application/json;charset=utf-8',
        'Accept': 'application/json',
      }
    };
    try {
      const response = await axios.get(`${BASE_URL}apikey=${API_KEY}`,config);

      const regionsItems = response.data.items;

      console.log(`GET: Here's the list of regions`, regionsItems);

      return regionsItems;
    } catch (errors) {
      console.error(errors);
    }
  };

  // ...

const createRegionElement = item => {
  const regionsElement = document.createElement('li');

  regionsElement.appendChild(document.createTextNode(item.name));

  return regionsElement;
};

const updateRegionsList = regionItems => {
  const regionList = document.querySelector('ul');

  if (Array.isArray(regionItems) && regionItems.length > 0) {
    regionItems.map(regionItem => {
      regionList.appendChild(createRegionElement(regionItem));
    });
  } else if (regionItems) {
    regionList.appendChild(createRegionElement(regionItems));
  }
};

const main = async () => {
  updateRegionsList(await getRegionsItems());
};

main();
