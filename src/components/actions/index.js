export const userLogged = (x) => {
  return {
    type: "SIGN_IN",
    payload: x,
  };
};

export const restLogged = (x) => {
  return {
    type: "REST_SIGN_IN",
    payload: x,
  };
};

export const delLogged = (x) => {
  return {
    type: "DEL_SIGN_IN",
    payload: x,
  };
};
export const countItems = (x) => {
  return {
    type : "COUNT_ITEMS",
    payload: x,
  }
};