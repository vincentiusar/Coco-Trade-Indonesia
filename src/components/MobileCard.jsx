import Image from "next/image";
import Link from "next/link";

function MobileCard({ id, img, title, desc }) {
    return (
        <Link href={`./?modal=${id}`} scroll={false} className="rounded-lg w-10/12 h-full overflow-hidden shadow-xl shadow-zinc-400">
            <div className="w-full h-30v">
                <Image width={0} height={0} sizes="100vw" src={img} alt={img} className="h-full w-full object-contain" />
            </div>
            <div className="w-full bg-zinc-900 h-1/2 text-center pb-3">
                <h2 className="text-center font-semibold text-2xl px-6 py-3 line-clamp-1">{title}</h2>
                <p className="px-4 py-1 font-thin line-clamp-2">{desc}</p>
                <button className="my-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Detail</button>
            </div>
        </Link>
    )
}

export default MobileCard;