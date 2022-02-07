export const setInformation = (data) => {
  console.log(data);
  return {
    type: "SET_INFORMATION",
    data,
  };
};

export const getCharacterAync = () => {
  return {
    type: "GET_CHARACTER_ASYNC",
  };
};

export const getPlanetsAync = () => {
  return {
    type: "GET_PLANETS_ASYNC",
  };
};
