




export default function SellerTable(){
    return (
        <main className="rounded-lg  overflow-x-scroll border border-neutral-300 dark:border-neutral-800">
            <table 
                className="w-full table-auto border-collapse">
                <thead className="bg-neutral-100 dark:bg-neutral-800">
                    <tr>
                        <th className="p-2 text-center uppercase text-nowrap">Order Id</th>
                        <th className="p-2 text-center uppercase text-nowrap">Ordered In</th>
                        <th className="p-2 text-center uppercase text-nowrap">Product Image</th>
                        <th className="p-2 text-center uppercase text-nowrap">Quantity</th>
                        <th className="p-2 text-center uppercase text-nowrap">Total Mount</th>
                        <th className="p-2 text-center uppercase text-nowrap">Type | Categorie</th>
                        <th className="p-2 text-center uppercase text-nowrap">Status</th>
                        <th className="p-2 text-center uppercase text-nowrap">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example row, you can map through your data here */}
                    <tr>
                        <td className="p-2 text-nowrap">MODIFY-96325874</td>
                        <td className="p-2 text-nowrap">16 jan 2025</td>
                        <td className="p-2 text-nowrap">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border">
                                {/*  */}
                            </div>
                        </td>
                        <td className="p-2 text-nowrap">3</td>
                        <td className="p-2 text-nowrap">890</td>
                        <td className="p-2 text-nowrap">T-shirt</td>
                        <td className="p-2 text-nowrap">Pending</td>
                        <td className="p-2 text-nowrap">
                            <button className="text-blue-500 hover:underline">Edit</button>
                            <button className="text-red-500 hover:underline ml-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}