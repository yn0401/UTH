import IPConfig from "../../config/ipConfig";

export const getAll = "getAll";
export const getLatest = "getLatest";
export const getNewest = "getNewest";
export const getWithPointASC = "getWithPointASC";
export const getWithPointDESC = "getWithPointDESC";
export const getByID = "getByID";
export const addNew = "addNew";
export const update = "update";
export const deleteGift = "deleteGift";
export const search = "search";

export const getAllGift = (gifts) => {
  return {
    type: getAll,
    payload: gifts,
  };
};

export const fecthAll = () => {
  return (dispatch) => {
    const getAll = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/gifts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const gifts = await res.json();
        dispatch(getAllGift(gifts));
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  };
};

export const getLatestGift = (gifts) => {
  return {
    type: getLatest,
    payload: gifts,
  };
};

export const fecthLatest = () => {
  return (dispatch) => {
    const getLatest = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/gifts/latest", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const gifts = await res.json();
        dispatch(getLatestGift(gifts));
      } catch (error) {
        console.log(error);
      }
    };
    getLatest();
  };
};

export const getNewestGift = (gifts) => {
  return {
    type: getNewest,
    payload: gifts,
  };
};

export const fecthNewest = () => {
  return (dispatch) => {
    const getNewest = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/gifts/newest", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const gifts = await res.json();
        dispatch(getNewestGift(gifts));
      } catch (error) {
        console.log(error);
      }
    };
    getNewest();
  };
};

export const getWithPointASCGift = (gifts) => {
  return {
    type: getWithPointASC,
    payload: gifts,
  };
};

export const fecthWithPointASC = () => {
  return (dispatch) => {
    const getWithPointASC = async () => {
      try {
        const res = await fetch(
          "http://" + IPConfig + ":3000/gifts/points/asc",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const gifts = await res.json();
        dispatch(getWithPointASCGift(gifts));
      } catch (error) {
        console.log(error);
      }
    };
    getWithPointASC();
  };
};

export const getWithPointDESCGift = (gifts) => {
  return {
    type: getWithPointDESC,
    payload: gifts,
  };
};

export const fecthWithPointDESC = () => {
  return (dispatch) => {
    const getWithPointDESC = async () => {
      try {
        const res = await fetch(
          "http://" + IPConfig + ":3000/gifts/points/dsc",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const gifts = await res.json();
        dispatch(getWithPointDESCGift(gifts));
      } catch (error) {
        console.log(error);
      }
    };
    getWithPointDESC();
  };
};

export const getByIDGift = (gift) => {
  return {
    type: getByID,
    payload: gift,
  };
};

export const fecthByID = (id) => {
  return (dispatch) => {
    const getByID = async () => {
      try {
        const res = await fetch(`http://` + IPConfig + `:3000/gifts/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const gift = await res.json();
        dispatch(getByIDGift(gift));
      } catch (error) {
        console.log(error);
      }
    };
    getByID();
  };
};

export const addNewGift = (gift) => {
  return {
    type: addNew,
    payload: gift,
  };
};

export const fecthAddNew = (gift) => {
  return (dispatch) => {
    const addNew = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/gifts/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gift),
        });
        const giftData = await res.json();
        dispatch(addNewGift(giftData));
      } catch (error) {
        console.log(error);
      }
    };
    addNew();
  };
};

export const updateGift = (gift) => {
  return {
    type: update,
    payload: gift,
  };
};

export const fecthUpdate = (gift) => {
  return (dispatch) => {
    const update = async () => {
      try {
        const res = await fetch(
          "http://" + IPConfig + `:3000/gifts/update/${gift.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(gift),
          }
        );
        const giftData = await res.json();
        dispatch(updateGift(giftData));
      } catch (error) {
        console.log(error);
      }
    };
    update();
  };
};

export const deleteOne = (id) => {
  return {
    type: deleteGift,
    payload: id,
  };
};

export const fecthDelete = (id) => {
  return (dispatch) => {
    const deleteOne = async () => {
      try {
        const res = await fetch(`http://` + IPConfig + `:3000/gifts/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const giftData = await res.json();
        dispatch(deleteOne(giftData));
      } catch (error) {
        console.log(error);
      }
    };
    deleteOne();
  };
};

export const searchGift = (gifts) => {
  return {
    type: search,
    payload: gifts,
  };
};

export const fecthSearch = (name) => {
  return (dispatch) => {
    const search = async () => {
      try {
        const res = await fetch(
          "http://" + IPConfig + `:3000/gifts/search/${name}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const gifts = await res.json();
        dispatch(searchGift(gifts));
      } catch (error) {
        console.log(error);
      }
    };
    search();
  };
};
