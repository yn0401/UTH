export const getAll = "getAll";
export const getByID = "getByID";
export const addNew = "addNew";
export const update = "update";
export const deleteTransaction = "deleteTransaction";

const IPConfig = "10.104.21.36";

//lấy tất cả transaction
export const getAllTransaction = (transactions) => {
  return {
    type: getAll,
    payload: transactions,
  };
};

export const fecthAll = () => {
  return (dispatch) => {
    const getAll = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/trans", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const transactions = await res.json();
        console.log(transactions);
        dispatch(getAllTransaction(transactions));
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  };
};

//lấy transaction theo id
export const getByIDTransaction = (transaction) => {
  return {
    type: getByID,
    payload: transaction,
  };
};

export const fecthByID = (id) => {
  return (dispatch) => {
    const getByID = async () => {
      try {
        const res = await fetch("http://" + IPConfig + `:3000/trans/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const transaction = await res.json();
        dispatch(getByIDTransaction(transaction));
      } catch (error) {
        console.log(error);
      }
    };
    getByID();
  };
};

//thêm transaction
export const addNewTransaction = (transaction) => {
  return {
    type: addNew,
    payload: transaction,
  };
};

export const fecthAddNew = (transaction) => {
  return (dispatch) => {
    const addNew = async () => {
      try {
        const res = await fetch("http://" + IPConfig + ":3000/trans/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        });
        const transactionData = await res.json();
        dispatch(addNewTransaction(transactionData));
      } catch (error) {
        console.log(error);
      }
    };
    addNew();
  };
};

//cập nhật transaction
export const updateTransaction = (transaction) => {
  return {
    type: update,
    payload: transaction,
  };
};

export const fecthUpdate = (transaction) => {
  return (dispatch) => {
    const update = async () => {
      try {
        const res = await fetch(
          "http://" + IPConfig + `:3000/trans/update/${transaction._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(transaction),
          }
        );
        const transactionData = await res.json();
        dispatch(updateTransaction(transactionData));
      } catch (error) {
        console.log(error);
      }
    };
    update();
  };
};

//xóa transaction
export const deleteOne = (transaction) => {
  return {
    type: deleteTransaction,
    payload: transaction,
  };
};

export const fecthDelete = (id) => {
  return (dispatch) => {
    const deleteOne = async () => {
      try {
        const res = await fetch(
          "http://" + IPConfig + `:3000/trans/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const transactionData = await res.json();
        dispatch(deleteOne(transactionData));
      } catch (error) {
        console.log(error);
      }
    };
    deleteOne();
  };
};