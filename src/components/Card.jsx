import Link from "next/link";

function Cards({ id, img, title, desc }) {
    return (
        <Link href={`./?modal=${id}`} scroll={false} className="relative rounded-lg w-7/12 h-full cursor-pointer overflow-hidden shadow-2xl transition-all duration-500 shadow-zinc-400 group hover:shadow-orange-700">
            <div className="w-full h-5/6 object-cover">
                <img src={img} alt={img} className="h-full w-full object-cover" />
            </div>
            <div className="absolute z-10 w-full bg-zinc-900 h-30v -mt-3 transition-all duration-500 group-hover:-translate-y-1/2">
                <h2 className="text-center font-semibold text-2xl px-6 py-3">{title}</h2>
                <p className="px-4 py-1 font-thin line-clamp-2 mt-96 transition-all duration-500 group-hover:mt-0">{desc}</p>
            </div>
            <div className="absolute top-0 bg-black opacity-0 transition-all h-90v w-full duration-500 group-hover:opacity-40"></div>
        </Link>
    )
}

export default Cards;