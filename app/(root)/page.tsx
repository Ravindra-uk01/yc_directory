import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";


export default async function Home({searchParams}: { searchParams: Promise<{query ?: string} > }) {

  const query = (await searchParams).query;
  const posts = [
    {
    _createdAt: "2023-10-01T12:00:00Z",
    _id: "1",
    views: 18,
    author: {
      _id: 1
    },
    description: "This is a sample startup description.",
    title: "Sample Startup",
    image: "https://images.unsplash.com/photo-1677631231950-1b2f3a4c5e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Robots"
  },
    {
    _createdAt: "2023-10-01T12:00:00Z",
    _id: "2",
    views: 18,
    author: {
      _id: 1
    },
    description: "This is a sample startup description.",
    title: "Sample Startup",
    image: "https://images.unsplash.com/photo-1677631231950-1b2f3a4c5e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Robots"
  },
    {
    _createdAt: "2023-10-01T12:00:00Z",
    _id: "3",
    views: 18,
    author: {
      _id: 1
    },
    description: "This is a sample startup description.",
    title: "Sample Startup",
    image: "https://images.unsplash.com/photo-1677631231950-1b2f3a4c5e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Robots"
  },
]
  return (
    <>
      <section className="pink_container ">
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
       
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold " >{query ? `Search results for "${query}" ` : "All Startups"}</p>
        

        <ul className="card_grid mt-2" >
          {
            posts &&  posts.length>0 && posts.map((post) => 
              <StartupCard key={post._id} post={post} />
            )
          }
        </ul>
      </section>
    </>
  );
}
