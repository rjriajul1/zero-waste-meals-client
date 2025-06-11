import React from 'react';
import { MdLocationOn } from 'react-icons/md';
const FoodReqTable = ({req,index}) => {
   

    return (
       <tr>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={req?.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{req?.donarName}</div>
              <div className="text-sm flex items-center opacity-50"><MdLocationOn className="mt-1" size={18} />{req?.location}</div>
            </div>
          </div>
        </td>
        <td>
          {req?.expireDate}
        </td>
        <td>{req?.currentDate}</td>
       
      </tr>
    );
};

export default FoodReqTable;