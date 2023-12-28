function Table({ data }) {
    return (
        <>
            {/* >= Tablet */}
            <div className="hidden md:flex w-full overflow-x-auto flex-col items-center">
                <div className="overflow-hidden w-10/12">
                    <table className="w-full table-fixed">
                        <thead className="p-4 text-sm font-medium gap-x-16 bg-gray-800 border-gray-700 text-white">
                            <tr className="text-start">
                                {
                                    data?.column.map((item, key) => (
                                        <th key={key} className="text-start p-4 text-sm font-medium gap-x-16 bg-gray-800 border-gray-700 text-white">
                                            {item}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody className={`px-4 py-5 text-sm text-gray-700 border-b gap-x-16 border-gray-700`}>
                            {data?.data.map((item, key) => (
                                <tr key={key}>
                                    <td>
                                        <img src={item?.image} className="w-full h-20v object-contain"></img>
                                    </td>
                                    <td className="px-4 py-5 text-sm text-gray-400">{item?.title}</td>
                                    <td className="px-4 py-5 text-sm text-gray-400">{item?.subtitle}</td>
                                    <td className="px-4 py-5 text-sm text-gray-400">
                                        <ul className="list-disc">
                                            {item?.quality.map((item, key) => (
                                                <li key={key}>{item?.name} - {item?.ash}</li>
                                                ))}
                                        </ul>
                                    </td>
                                    <td className="px-4 py-5 text-sm text-gray-400">{item?.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden flex-col gap-16 w-full items-center">
                {data?.data?.map((item, key) => (
                    <div key={key} className="flex flex-col shadow-xl rounded-lg w-11/12 shadow-gray-500 md:flex-row items-center p-5 place-content-between">
                        <img src={item?.image} className="w-1/2" />
                        <div class="relative overflow-x-auto shadow-md w-full">
                            <p className="text-center mb-4 text-xl font-normal">{item?.title} - {item?.subtitle}</p>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Type
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Ash
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item?.quality.map((item, key) => (
                                        <tr key={key} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                                {item?.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {item?.ash}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="font-thin mt-3 text-center">{item?.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Table;