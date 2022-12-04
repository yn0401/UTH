export const getAll = "getAll";
// export const add = "add";
// export const update = "update";
// export const getDetail = "getDetail";
// export const deleteOne = "delete";

// export const search = "search";

export const getAllGifts = (gifts) => {
  return {
    type: getAll,
    payload: gifts,
  };
};

export const fetchAll = () => {
  return (dispatch) => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/gifts");
        const gifts = await res.json();
        dispatch(getAllGifts(gifts));
        console.log(gifts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
};

export const addGift = (gift) => {
  return {
    type: add,
    payload: gift,
  };
};

export const addGiftToFB = (gift) => {
  return (dispatch) => {
    const addData = async () => {
      try {
        const res = await fetch("http://localhost:3000/gifts/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gift),
        });
        const data = await res.json();
        dispatch(addGift(data));
      } catch (error) {
        console.log(error);
      }
    };
    addData();
  };
};

// export const updateGift = (gift) => {
//   return {
//     type: update,
//     payload: gift,
//   };
// };

// export const updateGiftToFB = (gift) => {
//   return (dispatch) => {
//     const updateData = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:3000/gifts/update/${gift.id}`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(gift),
//           }
//         );
//         const data = await res.json();
//         dispatch(updateGift(data));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     updateData();
//   };
// };

// export const getGiftDetail = (gift) => {
//   return {
//     type: getDetail,
//     payload: gift,
//   };
// };

// export const getGiftDetailFromFB = (id) => {
//   return (dispatch) => {
//     const getDetail = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/gifts/${id}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await res.json();
//         dispatch(getGiftDetail(data));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getDetail();
//   };
// };


// export const searchGiftByName = (gifts) => {
//   return {
//     type: search,
//     payload: gifts,
//   };
// };

// export const searchGiftByNameFromFB = (name) => {
//   return (dispatch) => {
//     const getData = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/gifts/search/${name}`);
//         const gifts = await res.json();
//         dispatch(searchGiftByName(gifts));
//         console.log(gifts);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   };
// };

// //delete
// export const deleteGift = (id) => {
//   return {
//     type: deleteOne,
//     payload: id,
//   };
// }

// export const deleteGiftFromFB = (id) => {
//   return (dispatch) => {
//     const deleteData = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/gifts/delete/${id}`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await res.json();
//         dispatch(deleteGift(data));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     deleteData();
//   };
// }
