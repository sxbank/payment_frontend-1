import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import axios from "../api/axios.js";
import Cookie from "js-cookie";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Alluser() {
  const [searchTerm, setSearchTerm] = useState("");

  const [user, setUser] = useState([]);

  const [amount, setAmount] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [addMOney, setAddMoney] = useState("");

  const [money, setMoney] = useState("");

  function closeRequestMoneyModal() {
    setAddMoney(false);
  }

  useEffect(() => {
    axios
      .get("admin/getallusers", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookie.get("token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data.users);
        setUser(res.data.users);
        console.log(res.data.users);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addMoney = (id) => {
    setId(id);
    // alert(id);
    setAddMoney(true);
  };

  const Addmoneypost = (e) => {
    e.preventDefault();
    axios
      .put(
        "admin/updateUserWallet",
        {
          id: id,
          amount: amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookie.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
        toast.success(res.data.message);
        setId("");
        setAmount("");
        setAddMoney(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filteredUsers = user.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    const fullName =
      item.first_name && item.last_name
        ? `${item.first_name} ${item.last_name}`.toLowerCase()
        : "";
    const phone = item.phone ? item.phone.toLowerCase() : "";
    const walletId = item.wallet_id ? item.wallet_id.toLowerCase() : "";

    return (
      fullName.includes(searchLower) ||
      phone.includes(searchLower) ||
      walletId.includes(searchLower)
    );
  });

  const notificationListMap = filteredUsers.map((item, index) => {
    console.log(item);
    return (
      <div
        key={index}
        className="border w-[90%] mx-auto rounded-md bg-white p-3 mb-5"
      >
        <div className="w-full flex justify-between items-center">
          <p className="text-base font-bold">
            {item?.first_name + " " + item?.last_name}
          </p>
          <p className="text-base font-bold">{item?.phone}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-base font-bold">{item?.account_number}</p>
          <p className="text-base font-bold">
            {item?.createdAt?.split("T")?.[0]}
          </p>
        </div>
        {item.status === "approved" ? (
          <p className="text-base text-center pt-2 text-green-500">
            Accepted Already!
          </p>
        ) : (
          <div className="w-full flex justify-between items-center pt-5">
            <button
              onClick={() => {
                addMoney(item._id);
                setMoney(item.wallet_balance);
              }}
              className="text-base font-[600] bg-yellow-500 text-white px-4 py-1 rounded-md"
            >
              Add Money
            </button>

            <Link to={`/admin/user/${item._id}`}>
              <button className="text-base bg-green-500 font-[600] text-white px-4 py-1 rounded-md">
                View
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  });

  /*
  <tr className=" border-b " key={index}>
        <td
          className="flex-col px-2 py-4 "
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <th className="flex-col  text-start font-medium text-gray-900 whitespace-nowrap ">
            Name: {item.first_name} {item.last_name}
          </th>
          <th className=" font-medium text-start text-gray-900 whitespace-nowrap ">
            //  {formatDate(item.createdAt)} }
            </th>
            <th className=" font-medium text-start text-gray-900 whitespace-nowrap ">
              Phone: {item.phone}
            </th>
          </td>
  
          <td>
            <div>
              {item.status === "approved" ? (
                <p className="text-center text-green-700 flex items-center">
                  Accepted Already
                </p>
              ) : item.status === "rejected" ? (
                <p className="text-center text-red">Rejected</p>
              ) : (
                <>
                  <button
                    onClick={() => {
                      addMoney(item._id);
                      setMoney(item.wallet_balance);
                    }}
                    className="bg-emerald-600"
                    style={{
                      width: "100px",
                      padding: "10px 20px",
                      margin: "2px",
                      color: "white",
  
                      // fontSize: "12px",
                    }}
                  >
                    + Money
                  </button>
  

                  <Link
                    to={`/admin/user/${item._id}`}
                    style={{
                      background: "blue",
                      padding: "10px 20px",
                      margin: "2px",
                      width: "100px",
                      color: "white",
                    }}
                  >
                    View
                  </Link>
                </>
              )}
            </div>
          </td>
        </tr>
  */

  return (
    <div>
      <Toaster />
      <Topbar title="All Users" hideicon={"hidden"}></Topbar>

      <div className="flex justify-center">
        <input
          type="text"
          className="p-2 border m-5 w-full border-gray-300 shadow-md focus:border-blue-500 rounded-md"
          placeholder="Search user by phone number"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="w-full overflow-x-hidden overflow-y-auto h-[75vh] mb-14">
        {notificationListMap}
      </div>
      <Modal
        isOpen={addMOney}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeRequestMoneyModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: "50",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "1rem",
            border: "1px solid rgba(189, 189, 189, 1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            padding: "2rem",
            minWidth: "20rem",
            maxWidth: "80vw",
          },
        }}
      >
        <form
          onSubmit={(e) => {
            Addmoneypost(e);
          }}
          className="flex-col justify-center items-center"
          method="post"
        >
          <h1 className="text-2xl font-semibold p-2">
            User Wallet Balance : Rs. {money}
          </h1>
          <h2 className="p-2 text-base">Add Money to user Account</h2>

          <input
            className="w-full border p-2 border-black rounded-lg"
            type="text"
            placeholder="Enter Amount to be ADDED"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <button
            className="w-full mt-3 border-black border p-3 rounded-md"
            type="submit"
          >
            Add Money
          </button>
        </form>
      </Modal>
    </div>
  );
}
