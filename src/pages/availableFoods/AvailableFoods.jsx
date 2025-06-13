import React, { useEffect,useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AvailableFoods = () => {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState(false);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(search);

  useEffect(() => {
    setLoading(true);
    //console.log("search triggered:", search);
   
    fetch(`${import.meta.env.VITE_URL}getFoodStatus?search=${search}`)
      .then((res) => {
        //console.log("res status", res.status);
        return res.json();
      })
      .then((data) => {
        //console.log("Fetched data:", data);
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [search]);



  return (
    <div>
      <div className="flex justify-center p-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-2xl w-4/6"
          type="text"
          placeholder="search"
        />
      </div>
      {loading ? <p>loading...</p> : (<div className={`grid grid-cols-1 md:grid-cols-2 ${layout ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}  gap-6 max-w-7xl mx-auto my-10`}>
        <title>Available Food</title>
        {foods?.map((food) => (
          <div className="" key={food._id}>
            <div className="card bg-base-100 h-96 shadow-sm">
              <figure>
                <img
                  className=" h-72 object-cover w-full"
                  src={food?.photo}
                  alt="food"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {food?.name}
                  <div className="badge text-gray-500">
                    <MdLocationOn className="mt-1" size={18} />
                    {food?.location}
                  </div>
                </h2>
                <p>{food?.command}</p>
                <div className="flex">
                  <p>quantity: {food?.quantity}</p>
                  <p>EXDate: {food?.date}</p>
                </div>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{food?.status}</div>
                </div>
              </div>
              <div>
                <Link to={`/foodDetails/${food?._id}`}>
                  {" "}
                  <button className="btn w-full hover:btn-primary">
                    View Details
                  </button>
                </Link>
              </div>k
            </div>
          </div>
        ))}
      </div>)}
      <div className="flex justify-center">
        <button onClick={()=>setLayout(!layout)} className="btn btn-xl hover:btn-primary">Layout change</button>
      </div>
    </div>
  );
};

export default AvailableFoods;
