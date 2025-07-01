const OfferSection = () => {
  const offers = [
    {
      id: 1,
      title: "Double Impact Friday",
      description:
        "For every meal donated on Fridays, our partners will match your donation and feed twice the number of people.",
      image: "https://i.ibb.co/39BCJ88S/volunteers-holding-box-filled-with-food-donation.jpg",
      tag: "Limited Time",
    },
    {
      id: 2,
      title: "First-Time Donor Reward",
      description:
        "New donors get a special thank-you badge and recognition on our Hall of Hope wall.",
      image: "https://i.ibb.co/SXnxz7jB/reward.jpg",
      tag: "New",
    },
    {
      id: 3,
      title: "Summer Food Drive",
      description:
        "Join our seasonal drive and help underprivileged families with essential dry foods and water packs.",
      image: "https://i.ibb.co/mVD9hbDz/summer-food-drive.jpg",
      tag: "Seasonal",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-accent to-secondary py-14 px-4 md:px-10 text-base-100 mt-30 ">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Special Offers for Donors</h2>
          <p className="text-base-100/80 mt-2">Take part in exclusive donation campaigns and make your impact even greater.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="card hover:scale-105 transition shadow-xl bg-base-100 text-base-content">
              <figure>
                <img src={offer.image} alt={offer.title} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h3 className="card-title">{offer.title}</h3>
                  <span className="badge badge-secondary">{offer.tag}</span>
                </div>
                <p className="text-sm ">{offer.description}</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary mt-2">Participate</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
