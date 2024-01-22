import Image from "next/image";
import Link from "next/link";

const products = 
[
	{
		'title': 'Shisha',
        'image': '/cube.png',
        'subtitle': 'Shisha Briquette',
        'quality': 
            [
                {'name': 'Super Premium', 'ash': '1.9% - 2.2%'},
                {'name': 'Premium', 'ash': '2.2% - 2.5%'},
                {'name': 'Gold', 'ash': '2.5% - 3.5%'},
                {'name': 'Regular', 'ash': '4.5% - 7%'},
            ],
        'desc': 'Inner Plastic 1KG, Inner Box 1KG, Outer Box 10KG'
	},
	{
        'title': 'Barbacue',
        'image': '/pillow.png',
        'subtitle': 'BBQ Briquette',
        'quality': 
            [
                {'name': 'A', 'ash': '3% - 5%'},
                {'name': 'B', 'ash': '7% - 8%'},
                {'name': 'C', 'ash': '10% - 12%'},
                {'name': 'D', 'ash': 'Up To 18%'},
            ],
        'desc': 'Inner Plastic, Inner Box 10KG'
	},
	{
        'title': 'Sawdust',
        'image': '/hex.png',
        'subtitle': 'Sawdust Briquette',
        'quality': 
            [
                {'name': 'AB',},
                {'name': 'ABC',},
                {'name': 'CD',},
                {'name': 'DE',},
            ],
        'desc': 'Inner Plastic, Inner Box 10KG'
	},
];

function Modal({ id }) {
    return (
        <div className="fixed flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full z-50 text-white">
            <div className="relative p-4 w-full max-w-2xl max-h-full z-50 overflow-auto">
                <div className="relative bg-zinc-900 rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold dark:text-white">
                            {products?.[id]?.title} Charcoal
                        </h3>
                        <Link href='.' scroll={false} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center p-5 place-content-between">
                        <Image alt='product' width={0} height={0} sizes="100vw" src={products?.[id]?.image} className="w-1/2" />
                        <div class="relative overflow-x-auto shadow-md w-full">
                            <p className="text-center mb-4 text-xl font-normal">{products?.[id]?.subtitle}</p>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Type
                                        </th>
                                        {products?.[id]?.quality?.[0]?.ash &&
                                            <th scope="col" className="px-6 py-3">
                                                Ash
                                            </th>
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.[id]?.quality.map((item, key) => (
                                        <tr key={key} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                                {item?.name}
                                            </th>
                                            {item?.ash &&
                                                <td className="px-6 py-4">
                                                    {item?.ash}
                                                </td>
                                            }
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="font-thin mt-3 text-center">{products?.[id]?.desc}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href='.' scroll={false} className="fixed bg-black w-screen h-screen z-20 top-0 left-0 opacity-55"></Link>
        </div>
    )
}

export default Modal;