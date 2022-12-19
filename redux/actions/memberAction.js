export const getAll = "GET_ALL";
export const getTop10 = "GET_TOP10";
export const getByID = "GET_BY_ID";
export const addNew = "ADD_NEW";
export const update = "UPDATE";
export const deleteMember = "DELETE_MEMBER";
export const searchMember = "SEARCH_MEMBER";

export const IPConfig = "localhost";

// Lấy tất cả member
export const getAllMembers = (members) => {
  return {
    type: getAll,
    payload: members,
  };
};

// Muốn đổi IPConfig local thì chỉ cần đổi ở file ipConfig.js
export const fetchAll = () => {
  return (dispatch) => {
    const getData = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/members", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const members = await res.json();
        dispatch(getAllMembers(members));
        // console.log(members);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
};

// Lấy top 10 member với điểm cao nhất
export const getTop10Members = (members) => {
  return {
    type: getTop10,
    payload: members,
  };
};

export const fetchTop10 = () => {
  return (dispatch) => {
    const getTop10 = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/members/top10", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const members = await res.json();
        dispatch(getTop10Members(members));
        console.log(members);
      } catch (error) {
        console.log(error);
      }
    };
    getTop10();
  };
};

// Lấy member theo ID
export const getByIDMembers = (members) => {
  return {
    type: getByID,
    payload: members,
  };
};

export const fetchByID = (id) => {
  return (dispatch) => {
    const getDetail = async () => {
      try {
        const res = await fetch(`http://` + IPConfig + `:3000/members/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        dispatch(getByIDMembers(data));
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  };
};

// Thêm member mới
export const addNewMembers = (members) => {
  return {
    type: addNew,
    payload: members,
  };
};

export const fetchAddNew = (member) => {
  return (dispatch) => {
    const addNew = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/members/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(member),
        });
        const data = await res.json();
        dispatch(addNewMembers(data));
      } catch (error) {
        console.log(error);
      }
    };
    addNew();
  };
};

// Cập nhật member
export const updateMembers = (members) => {
  return {
    type: update,
    payload: members,
  };
};

export const fetchUpdate = (member) => {
  return (dispatch) => {
    const update = async () => {
      try {
        const res = await fetch(
          `http://` + IPConfig + `:3000/members/update/${member.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(member),
          }
        );
        const data = await res.json();
        dispatch(updateMembers(data));
      } catch (error) {
        console.log(error);
      }
    };
    update();
  };
};

// Xóa member
export const deleteMembers = (members) => {
  return {
    type: deleteMember,
    payload: members,
  };
};

export const fetchDelete = (id) => {
  return (dispatch) => {
    const deleteMember = async () => {
      try {
        const res = await fetch(
          `http://` + IPConfig + `:3000/members/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        dispatch(deleteMembers(data));
      } catch (error) {
        console.log(error);
      }
    };
    deleteMember();
  };
};

// Tìm kiếm member
export const searchMembers = (members) => {
  return {
    type: searchMember,
    payload: members,
  };
};

export const fetchSearch = (name) => {
  return (dispatch) => {
    const searchMember = async () => {
      try {
        const res = await fetch(
          `http://` + IPConfig + `:3000/members/search/${name}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        dispatch(searchMembers(data));
      } catch (error) {
        console.log(error);
      }
    };
    searchMember();
  };
};
