import Link from "next/link";

function XCard({ id, img, title, desc }) {
    return (
        <Link href={`./?modal=${id}`} scroll={false} className="flex border border-zinc-600 rounded-lg w-full h-full cursor-pointer overflow-hidden shadow-lg">
            <div className="w-1/3 h-full object-cover">
                <img src={img} alt={img} className="h-full w-full object-cover" />
            </div>
            <div className="z-10 w-full bg-zinc-800">
                <h2 className="text-center font-semibold text-normal px-6 py-2 line-clamp-1">{title}</h2>
                <p className="text-center px-4 font-thin line-clamp-2">{desc}</p>
            </div>
        </Link>
    )
}

export default XCard;