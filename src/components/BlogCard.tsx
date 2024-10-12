import Image from "next/image";
import blogs from "@/dummy-data/blogs";
import Link from "next/link";
import truncateText from "@/utils/Truncation";


const BlogCard = () => {
  return (
    <>
    {blogs.map((blog, index) => (
        <Link className="hover:-translate-y-2 transition-all" href={`/blogs/${index}`} key={index}>
          <div
            key={index}
            className={`blog  overflow-hidden lg:w-[19vw] lg:h-[22vw] md:h-[19vw] md:w-[20vw] sm:h-[24vw] sm:w-[19vw] py-2 px-2 rounded-lg shadow h-[28vw] w-[28vw]`}
            style={{ backgroundColor: blog.bgColor }}
            >
            <div className="blogPic relative overflow-hidden mt-3 mx-auto rounded-lg lg:h-[12vw] lg:w-11/12 md:h-[10vw] sm:h-[8vw] h-[10vw]">
              <Image
                src={blog.blogImage}
                alt="image of the blog post"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="info py-1 px-2">
              <h3 className="font-[400] tracking-tighter text-base sm:text-lg md:text-xl leading-none">
                {truncateText(blog.blogTitle, 43)}
              </h3>
              <div className="blogDesc max-h-[4.3vw] overflow-hidden">
                <p className="text-xs tracking-tighter leading-none">
                  {truncateText(blog.article, 129)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
      </>
  )
}

export default BlogCard