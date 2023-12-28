import Cards from "@/components/Card";
import Contact from "@/components/Contact";
import MobileCard from "@/components/MobileCard";
import Modal from "@/components/Modal";
import Nav from "@/components/Nav";
import SwiperMenu from "@/components/SwiperMenu";
import Link from "next/link";

export const metadata = {
	title: 'Coco Trade Indonesia',
	description: 'Generated by create next app',
}

function Home({ searchParams }) {
	return (
		<main className="flex min-h-screen flex-col items-center bg-black">
			<div className="w-full top-0 z-20 fixed">
				<Nav />
			</div>
			<div className="relative w-full mt-16 flex flex-col items-center">
				<div className="absolute flex w-5/6 h-full z-10 place-content-center items-center">
					<div className="flex flex-col items-center w-full text-center">
						<p className="text-2xl border-4 py-4 font-semibold md:text-7xl md:py-12 md:border-8 w-full">Coco Trade Indonesia</p>
						<p className="text-center text-base mt-2 md:text-3xl md:mt-4">World&apos;s Best Coconut Briquette Charcoal From Indonesia</p>
					</div>
				</div>
				<SwiperMenu />
			</div>

			<section className="my-12"></section>

			<div className="flex flex-col items-center px-12 md:px-40">
				<p className="text-xl md:text-4xl font-semibold">Our Charcoal Briquette</p>
				<section className="py-2"></section>
				<p className="text-center font-thin">
					Discover the excellence of our Coconut Charcoal Briquette, meticulously crafted from top-tier local coconut shells and wood. 
					Free from harmful additives, our briquettes, made by compressing finely ground coconut shell charcoal with a natural binder, offer heightened heat and prolonged burn time. 
					Perfect for both indoor and outdoor use in households, and versatile for applications like barbecues, stoves, and metallurgy. 
					Choose our eco-friendly, high-quality coconut charcoal briquettes for an enhanced and sustainable fuel solution.
				</p>
			</div>

			<section className="my-12"></section>

			{/* >= tablet */}
			<div className="hidden md:flex items-center place-content-around px-12 md:px-40 w-full">
				<div className="flex flex-col items-center w-1/5">
					<img src='/eco.png' className="p-2 h-28 w-28 object-cover" />
					<p>Eco-Friendly Products</p>
					<p className="font-thin text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="flex flex-col items-center w-1/5">
					<img src='/prolong.png' className="p-3 h-28 w-28 object-cover" />
					<p>Prolong Charcoal</p>
					<p className="font-thin text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="flex flex-col items-center w-1/5">
					<img src='/deliver.png' className="h-28 w-28 object-cover" />
					<p>Fast Delivery</p>
					<p className="font-thin text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="flex flex-col items-center w-1/5">
					<img src='/logo.png' className="h-28 w-28 p-3 object-cover" />
					<p>Good Packaging</p>
					<p className="font-thin text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			{/* Mobile */}
			<div className="md:hidden flex flex-col gap-2 px-12 w-full">
				<div className="flex gap-1 items-center h-fit w-full">
					<img src='/eco.png' className="p-2 h-28 w-28 object-cover" />
					<div>
						<p className="text-center">Eco-Friendly Products</p>
						<p className="font-thin text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className="flex gap-1 items-center h-fit w-full">
					<div>
						<p className="text-center">Prolong Charcoal</p>
						<p className="font-thin text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<img src='/prolong.png' className="p-3 h-28 w-28 object-cover" />
				</div>
				<div className="flex gap-1 items-center h-fit w-full">
					<img src='/deliver.png' className="h-28 w-28 object-cover" />
					<div>
						<p className="text-center">Fast Delivery</p>
						<p className="font-thin text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className="flex gap-1 items-center h-fit w-full">
					<div>
						<p className="text-center">Good Packaging</p>
						<p className="font-thin text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<img src='/logo.png' className="h-28 w-28 p-3 object-cover" />
				</div>
			</div>

			<section className="my-20" id='product'></section>

			<div className="flex flex-col items-center w-11/12 md:w-8/12 h-full md:h-60v">
				<p className="text-4xl font-semibold">Our Products</p>
				{/* >= tablet */}
				<div className="hidden md:flex mt-2 md:mt-12 items-stretch gap-14 place-content-between h-full">
					<Cards id={0} img={'cube.png'} title={"Cube Charcoal"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper, ligula sit amet tristique posuere, risus lacus faucibus tortor, ac malesuada diam ligula non lacus. In eget elementum dui. Vestibulum eu turpis et arcu maximus."} />
					<Cards id={1} img={'pillow.png'} title={"Pillow Charcoal"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper, ligula sit amet tristique posuere, risus lacus faucibus tortor, ac malesuada diam ligula non lacus. In eget elementum dui. Vestibulum eu turpis et arcu maximus."} />
					<Cards id={2} img={'hex.png'} title={"Hexagon Charcoal"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper, ligula sit amet tristique posuere, risus lacus faucibus tortor, ac malesuada diam ligula non lacus. In eget elementum dui. Vestibulum eu turpis et arcu maximus."} />
				</div>
				{/* mobile */}
				<div className="md:hidden mt-2 flex flex-col items-center gap-16">
					<MobileCard id={0} img={'cube.png'} title={"Cube Charcoal"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper, ligula sit amet tristique posuere, risus lacus faucibus tortor, ac malesuada diam ligula non lacus. In eget elementum dui. Vestibulum eu turpis et arcu maximus."} />
					<MobileCard id={1} img={'pillow.png'} title={"Pillow Charcoal"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper, ligula sit amet tristique posuere, risus lacus faucibus tortor, ac malesuada diam ligula non lacus. In eget elementum dui. Vestibulum eu turpis et arcu maximus."} />
					<MobileCard id={2} img={'hex.png'} title={"Hexagon Charcoal"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper, ligula sit amet tristique posuere, risus lacus faucibus tortor, ac malesuada diam ligula non lacus. In eget elementum dui. Vestibulum eu turpis et arcu maximus."} />
				</div>
				<Link href='/products' className="mt-12 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border border-gray-600 text-gray-400 hover:text-white hover:bg-gray-800 focus:ring-gray-900">
					More Details
				</Link>
			</div>

			<section className="my-10 md:my-20" id='contact'></section>

			<div className="grid grid-cols-1 gap-10 w-10/12 md:gap-0 items-center md:grid-cols-2 md:px-12 md:w-2/3 h-full">
				<div className="col-span-1">
					<img src='/logo_full.png' alt='logo' className="w-1/3 scale-125" />
					<p className="font-thin">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>

					<section className="my-5"></section>

					<div>
						<Link target="_blank" href='https://wa.me/6281386278150' className="text-normal">
							Whatsapp: <span className="hover:underline hover:text-blue-700">+62 8138 6278 150</span>
						</Link>
					</div>
					<div>
						<Link target="_blank" href='https://mail.google.com/mail/u/0/?fs=1&to=cocotraderindo@gmail.com&tf=cm' className="text-normal hover:underline hover:text-blue-700">
							cocotraderindo@gmail.com
						</Link>
					</div>
				</div>
				<div className="relative col-span-1 md:text-end">
					<p className="text-4xl font-normal">Follow Us</p>
					<br />
					<p className="text-normal">Follow us on social media, and some updates about <br /> company information</p>
					<section className="my-4"></section>
					<div className="md:absolute right-0">
						<svg viewBox="0 0 448 512" fill="currentColor" height="50" width="50">
							<path d="M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z" />
						</svg>
					</div>
				</div>
			</div>

			<section className="my-10 md:my-12"></section>

			<div className="flex flex-col items-center text-center font-thin px-12 md:px-80 w-full h-full">
				Copyright &copy; 2023 Coco Trade Indonesia. All Rights Reserved.
			</div>

			{searchParams?.modal >= 0 && searchParams?.modal <= 2 ? (
				<Modal id={searchParams?.modal} />
			) : null}

			<div className="fixed z-20 bottom-0 right-0 p-8">
				<Contact />
			</div>
		</main>
	)
}

export default Home;
