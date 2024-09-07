import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const HomeService = ({title, description}) => {
  return (
    <article className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">
            {description}
        </p>
        <Link href="/services/" className="underline hover:text-gray-300">
            Learn more <BsArrowRight className="inline-block"/>
        </Link>
    </article>
  )
}

export default HomeService
