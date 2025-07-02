import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AvailableFoods = () => {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState(false);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    setLoading(true);

    fetch(`${import.meta.env.VITE_URL}getFoodStatus?search=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [search]);

  const parseCustomDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const sortedFood = [...foods].sort((a, b) => {
    if (sortOption === "newest") {
      return parseCustomDate(b.date) - parseCustomDate(a.date);
    } else if (sortOption === "oldest") {
      return parseCustomDate(a.date) - parseCustomDate(b.date);
    } else if (sortOption === "low-quantity") {
      return a.quantity - b.quantity;
    } else if (sortOption === "hight-quantity") {
      return b.quantity - a.quantity;
    }
    return 0;
  });

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-center p-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2   rounded-2xl w-4/6"
            type="text"
            placeholder="search"
          />
        </div>
        <div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full border  rounded-2xl px-4 py-1 font-semibold "
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="low-quantity">quantity: Low to High</option>
            <option value="high-quantity">quantity: High to Low</option>
          </select>
        </div>
      </div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div
          className={`grid grid-cols-1 p-2 sm:grid-cols-2 ${
            layout ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }  gap-6 max-w-[1600px] mx-auto my-10`}
        >
          <title>Available Food</title>
          {sortedFood?.map((food) => (
            <div className="" key={food._id}>
              <div className="card bg-base-100 h-96 shadow-sm">
                <figure>
                  <img
                    className=" h-64 object-cover hover:scale-110 transition w-full"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <button
          onClick={() => setLayout(!layout)}
          className="btn btn-xl hover:btn-primary"
        >
          Layout change
        </button>
      </div>
    </div>
  );
};

export default AvailableFoods;
