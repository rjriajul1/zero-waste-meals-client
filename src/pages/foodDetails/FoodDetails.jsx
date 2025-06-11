import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router";
import Modal from "react-modal";
import useAuth from "../../hooks/useAuth";
import { currentDate } from "../../utilies/date";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const FoodDetails = () => {
  const { user } = useAuth();
  const food = useLoaderData();
  const navigate = useNavigate();
  const {
    name,
    photo,
    quantity,
    location,
    date,
    command,
    donorImage,
    donorName,
    donorEmail,
    status,
    _id,
  } = food || {};
  const customStyles = {
    content: {
      top: "48%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRequest = Object.fromEntries(formData.entries());
    newRequest.donarName = donorName;
    newRequest.location = location;
    newRequest.expireDate = date;
    newRequest.foodId = _id;
    newRequest.status = "requested";
    newRequest.reqEmail = user?.email;
    newRequest.photo = photo
    if (donorEmail === user?.email) {
      return alert("this food your post do not request ");
    }
    axios
      .post(`${import.meta.env.VITE_URL}requested`, newRequest)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your requested food successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/availableFoods')
        }
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  return (
    <div className="card bg-base-100  max-w-2xl my-6 mx-auto shadow-sm p-7">
      <title>{`Food Details ${_id}`}</title>
      <figure>
        <img
          className="h-44 lg:h-62 object-cover w-full"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge text-gray-500">
            <MdLocationOn className="mt-1" size={18} />
            {location}
          </div>
        </h2>
        <p>{command}</p>
        <div className="flex">
          <p>quantity: {quantity}</p>
          <p>EXDate: {date}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{status}</div>
        </div>
        <div className="divider divider-error">Donar Info</div>
        <div className="flex gap-6 relative">
          <img className="w-24 rounded-2xl" src={donorImage} alt="" />
          <div>
            <h1>name: {donorName}</h1>
            <p>email: {donorEmail}</p>
          </div>
        </div>
        <div className="absolute right-4   bottom-3">
          <button onClick={openModal} className="btn hover:btn-primary mt-3 ">
            Request
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className="max-w-96 ">
              <form onSubmit={handleRequest}>
                <figure>
                  <img
                    className="h-44 w-full rounded-2xl"
                    src={photo}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    <div className="flex flex-col">
                      <h2 className="dark:text-black">{name}</h2>
                      <p className="text-xs dark:text-black">{_id}</p>
                    </div>
                    <div className="badge text-gray-500">
                      <MdLocationOn className="mt-1" size={18} />
                      {location}
                    </div>
                  </h2>
                  <textarea
                    defaultValue={command}
                    name="command"
                    className="border p-2 dark:text-black"
                  ></textarea>
                  <div className="flex">
                    <p className="dark:text-black">EXDate: {date}</p>
                    <div>
                      <input
                        name="currentDate"
                        className="dark:text-black"
                        type="text"
                        value={currentDate}
                      />
                    </div>
                  </div>
                </div>
                <div className="divider dark:text-black divider-error">
                  current&previews user Info
                </div>
                <div className="flex gap-6 relative">
                  <div>
                    <h1 className="text-xl dark:text-black font-bold">
                      User:{" "}
                    </h1>
                    <p className="dark:text-black">{user?.email}</p>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold dark:text-black">
                      Donar:
                    </h1>
                    <h1 className="dark:text-black">name: {donorName}</h1>
                    <p className="dark:text-black">email: {donorEmail}</p>
                  </div>
                </div>
                <div className="my-3">
                  <div className=" flex justify-between">
                    <button className="btn btn-accent" onClick={closeModal}>
                      close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
