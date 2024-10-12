
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <main className="flex-grow w-full">
      <div className="flex flex-col mt-24 mx-auto w-11/12">
        <h1 className="font-[Poppins] font-semibold tracking-tighter text-2xl sm:text-3xl md:text-4xl">
          From the blog.
        </h1>
        <div className="font-[Poppins] blogsContainer grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-3 md:gap-2 sm:gap-1 py-6 px-4 h-full gap-2">
          <BlogCard/>
        </div>
      </div>
    </main>
  );
}
