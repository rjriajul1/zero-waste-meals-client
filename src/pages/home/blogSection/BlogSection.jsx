const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Food Donation Helps Communities",
      image: "https://i.ibb.co/VW5JXp0p/food-4.jpg",
      description:
        "Food donations reduce waste and support people in need. Learn how your contributions create real impact.",
      author: "Lance Carter",
      date: "June 19, 2025",
    },
    {
      id: 2,
      title: "Tips for Donating Food Safely",
      image: "https://i.ibb.co/nqVVDH9W/delicious-food-arrangement-top-view.jpg",
      description:
        "Understand how to safely store and donate perishable and non-perishable food items.",
      author: "Evangeline Blackwell",
      date: "June 15, 2025",
    },
    {
      id: 3,
      title: "The Journey of a Food Parcel",
      image: "https://i.ibb.co/KjcNs5V3/blog-1.jpg",
      description:
        "From donor to recipient, explore how a food parcel reaches the right hands through coordinated effort.",
      author: "Aiden Roy",
      date: "June 10, 2025",
    },
  ];

  return (
    <div className="mt-30">
        <section className="bg-base-100 py-12 px-4 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Blog Posts</h2>
          <p className=" mt-2">Stay informed and inspired about food donation and community support.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="card hover:scale-105 transition bg-base-200 shadow-lg hover:shadow-xl ">
              <figure>
                <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="text-sm">{post.description.slice(0, 100)}...</p>
                <div className="flex items-center justify-between text-xs  mt-2">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                {/* <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-outline btn-primary">Read More</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default BlogSection;
