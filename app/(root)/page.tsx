import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";


export default async function Home({searchParams}: { searchParams: Promise<{query ?: string} > }) {

  const query = (await searchParams).query;

  // const posts = await client.fetch(STARTUPS_QUERY);
  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY})
  console.log('checking the post ', posts);

//   const posts = [
//     {
//     _createdAt: "2023-10-01T12:00:00Z",
//     _id: "1",
//     views: 18,
//     author: {
//       _id: 1,
//       name: "John Doe",
//       image: "https://avatars.githubusercontent.com/u/1486366?v=4"
    
//     },
//     description: "This is a sample startup description.",
//     title: "Sample Startup",
//     image: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     category: "Robots"
//   },
//     {
//     _createdAt: "2023-10-01T12:00:00Z",
//     _id: "2",
//     views: 18,
//     author: {
//       _id: 1,
//       name: "John Doe",
//       image: "https://avatars.githubusercontent.com/u/1486366?v=4"
    
//     },
//     description: "This is a sample startup description.",
//     title: "Sample Startup",
//     image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     category: "Robots"
//   },
//     {
//     _createdAt: "2023-10-01T12:00:00Z",
//     _id: "3",
//     views: 18,
//     author: {
//       _id: 1,
//       name: "John Doe",
//       image: "https://avatars.githubusercontent.com/u/1486366?v=4"
//     },
//     description: "This is a sample startup description.",
//     title: "Sample Startup",
//     image: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     category: "Robots"
//   },
// ]

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
            posts &&  posts.length>0 && posts.map((post:StartupCardType) => 
              <StartupCard key={post._id} post={post} />
            )
          }
        </ul>
      </section>
    </>
  );
}
