export const setInformation = (data) => {
  console.log(data);
  return {
    type: "SET_INFORMATION",
    data,
  };
};

export const getCharacterAync = (data) => {
  return {
    type: "GET_CHARACTER_ASYNC",
    data,
  };
};

export const getPlanetsAync = (data) => {
  return {
    type: "GET_PLANETS_ASYNC",
    data,
  };
};
