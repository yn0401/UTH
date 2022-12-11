export const IPConfig = "192.168.1.4";
export const getAll = "getAll";
export const getByID = "getByID";
export const addNew = "create";
export const update = "update";
export const deleteOne = "remove";

//lấy tất cả các event
export const getAllEvent = (events) => {
  return {
    type: getAll,
    payload: events,
  };
};

export const fecthAll = () => {
  return (dispatch) => {
    const getAll = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/events", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const events = await res.json();
        dispatch(getAllEvent(events));
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  };
};

//lấy event theo id
export const getEventByID = (event) => {
  return {
    type: getByID,
    payload: event,
  };
};

export const fecthByID = (id) => {
  return (dispatch) => {
    const getByID = async () => {
      try {
        const res = await fetch("http://" + IPConfig + `:3000/events/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const event = await res.json();
        dispatch(getEventByID(event));
      } catch (error) {
        console.log(error);
      }
    };
    getByID();
  };
};

//thêm event
export const addNewEvent = (event) => {
  return {
    type: addNew,
    payload: event,
  };
};

export const fecthAddNew = (event) => {
  return (dispatch) => {
    const addNew = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/events/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        });
        const newEvent = await res.json();
        dispatch(addNewEvent(newEvent));
      } catch (error) {
        console.log(error);
      }
    };
    addNew();
  };
};

//cập nhật event
export const updateEvent = (event) => {
  return {
    type: update,
    payload: event,
  };
};

export const fecthUpdate = (event) => {
  return (dispatch) => {
    const update = async () => {
      try {
        const res = await fetch(
          "http://" + IPConfig + `:3000/events/update/${event.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
          }
        );
        const updatedEvent = await res.json();
        dispatch(updateEvent(updatedEvent));
      } catch (error) {
        console.log(error);
      }
    };
    update();
  };
};

//xóa event
export const deleteEvent = (event) => {
  return {
    type: deleteOne,
    payload: event,
  };
};

export const fecthDelete = (id) => {
  return (dispatch) => {
    const deleteOne = async () => {
      try {
        const res = await fetch(`http://${IPConfig}:3000/events/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const deletedEvent = await res.json();
        dispatch(deleteEvent(deletedEvent));
      } catch (error) {
        console.log(error);
      }
    };
    deleteOne();
  };
};
