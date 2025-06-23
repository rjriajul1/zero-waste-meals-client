import React from "react";
import { MdEdit, MdLocationOn } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router";
const TableRow = ({ food, index, handleDeleteBtn }) => {
  const { name, photo, quantity, location, date, status,_id } = food || {};
 
  return (
    <tr className="">
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex w-52 items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">
              <p className="flex items-center">
                <MdLocationOn className="mt-1" size={18} />
                {location}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <p> Q: {quantity}</p>
        <span>EX: {date}</span>
      </td>
      <td>{status}</td>
      <th>
        <button onClick={()=>handleDeleteBtn(_id)} className="btn hover:btn-accent mr-2">
          <RiDeleteBin5Line color="red" size={24} />
        </button>
        <Link to={`/updateFood/${_id}`}><button className="btn hover:btn-accent hover:text-white ">
          <MdEdit size={24} />
        </button></Link>
      </th>
    </tr>
  );
};

export default TableRow;
