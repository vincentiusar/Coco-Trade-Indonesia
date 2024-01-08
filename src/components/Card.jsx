import Image from "next/image";
import Link from "next/link";

function Cards({ id, img, title }) {
    return (
        <Link href={`./?modal=${id}`} scroll={false} className="relative rounded-lg w-7/12 h-full cursor-pointer overflow-hidden shadow-2xl transition-all duration-500 shadow-zinc-400 group hover:shadow-orange-700">
            <div className="w-full h-5/6 object-cover">
                <Image width={0} height={0} sizes="100vw" src={img} alt={img} className="h-full w-full object-cover" />
            </div>
            <div className="absolute z-10 w-full bg-zinc-900 h-30v -mt-3 transition-all duration-500 group-hover:-translate-y-1/3 flex flex-col items-center">
                <h2 className="text-center font-semibold text-2xl py-3">{title}</h2>
                <button className="mt-64 transition-all duration-500 group-hover:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</button>
            </div>
            <div className="absolute top-0 bg-black opacity-0 transition-all h-90v w-full duration-500 group-hover:opacity-40"></div>
        </Link>
    )
}

export default Cards;