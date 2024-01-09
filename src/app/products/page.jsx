import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Table from "@/components/Table";
import Image from "next/image";

export const metadata = {
	title: 'Products',
	description: `World's Best Coconut Briquette Charcoal From Indonesia`,
}

const products = {
	column: ['', 'Title', 'Subtitle', 'Quality', 'Desc'],
	data: [
		{
			'title': 'Cube',
			'image': '/cube_2.png',
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
			'title': 'Pillow',
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
			'title': 'Hexagon',
			'image': '/hex.png',
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
	],
};

function Products() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-black" id="product">
			<Nav />

			<div className="w-full mt-16 relative">
				<Image alt='bg1' width={0} height={0} sizes="100vw" src="/bg_1.png" className="fixed top-0 -mt-16 md:mt-0 md:absolute object-cover w-full opacity-50 h-screen md:h-90v" />
				<section className="my-12"></section>
				<Table data={products} />
			</div>

			<section className="my-10 md:my-28" id='contact'></section>

			<div className="bg-black z-20 flex flex-col items-center">
				<Footer />
			</div>

			<div className="fixed z-20 bottom-0 right-0 p-8">
				<Contact />
			</div>
		</main>
	)
}

export default Products;
