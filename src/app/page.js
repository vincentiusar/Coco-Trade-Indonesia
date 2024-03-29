import Cards from "@/components/Card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCard from "@/components/MobileCard";
import Modal from "@/components/Modal";
import Nav from "@/components/Nav";
import SwiperMenu from "@/components/SwiperMenu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: 'Coco Trade Indonesia',
	description: `World's Best Coconut Briquette Charcoal From Indonesia`,
}

function Home({ searchParams }) {
	return (
		<main className="flex min-h-screen flex-col items-center bg-black text-white">
			<Nav />
			<div className="relative w-full mt-16 flex flex-col items-center">
				<div className="absolute flex w-5/6 h-full z-10 place-content-center items-center">
					<div className="flex flex-col items-center w-full text-center">
						<p className="text-xl border-4 py-4 font-bold md:font-semibold md:text-7xl md:py-8 md:border-8 w-10/12 lg:w-9/12"><span className="text-2xl lg:text-7xl">Coco</span> Trade Indonesia</p>
						<p className="text-center text-cus font-normal mt-2 md:text-3xl md:mt-4">World&apos;s Best Coconut Briquette Charcoal From Indonesia</p>
					</div>
				</div>
				<SwiperMenu />
			</div>

			<section className="my-12"></section>

			<div className="flex flex-col items-center px-12 md:px-40">
				<p className="text-xl md:text-4xl font-semibold">Our Charcoal Briquette</p>
				<section className="py-2"></section>
				<p className="text-center font-extralight md:font-thin">
					Discover the excellence of our Coconut Charcoal Briquette, meticulously crafted from top-tier local coconut shells and wood. 
					Free from harmful additives, our briquettes, made by compressing finely ground coconut shell charcoal with a natural binder, offer heightened heat and prolonged burn time. 
					Perfect for both indoor and outdoor use in households, and versatile for applications like barbecues, stoves, and metallurgy. 
					Choose our eco-friendly, high-quality coconut charcoal briquettes.
				</p>
			</div>

			<section className="my-12"></section>

			{/* >= tablet */}
			<div className="hidden lg:flex items-center place-content-around px-40 w-full">
				<div className="flex flex-col items-center w-1/5">
					<Image alt='eco' width={0} height={0} sizes="100vw" src='/eco.png' className="p-2 h-28 w-28 object-cover" />
					<p className="text-center">Eco-Friendly Products</p>
					<p className="font-thin text-center line-clamp-2">Natural, High quality, Non Toxic, No Chemical</p>
				</div>
				<div className="flex flex-col items-center w-1/5">
					<Image alt='quality' width={0} height={0} sizes="100vw" src='/quality.png' className="p-3 h-28 w-28 object-cover" />
					<p className="text-center">Quality</p>
					<p className="font-thin text-center line-clamp-2">Healhty Clean, Smokeless, Odorless, Tasteless</p>
				</div>
				<div className="flex flex-col items-center w-1/5">
					<Image alt='renew' width={0} height={0} sizes="100vw" src='/renewable.png' className="h-28 w-28 object-cover" />
					<p className="text-center">Fine Process</p>
					<p className="font-thin text-center line-clamp-2">Greate Quality, Green, Renewable, Certificated</p>
				</div>
				<div className="flex flex-col items-center w-1/5">
					<Image alt='logo' width={0} height={0} sizes="100vw" src='/logo.png' className="h-28 w-28 p-3 object-cover" />
					<p className="text-center">Good Packaging</p>
					<p className="font-thin text-center line-clamp-2">Ready for Request Packing</p>
				</div>
			</div>
			{/* Mobile */}
			<div className="lg:hidden flex flex-col items-center gap-2 px-12 w-full">
				<div className="flex gap-1 items-center h-fit">
					<Image alt='eco2' width={0} height={0} sizes="100vw" src='/eco.png' className="p-2 h-28 w-28 object-cover" />
					<div>
						<p className="text-center">Eco-Friendly Products</p>
						<p className="font-extralight md:font-thin text-center">Natural, High quality, Non Toxic, No Chemical</p>
					</div>
				</div>
				<div className="flex gap-1 items-center h-fit">
					<div>
						<p className="text-center">Quality</p>
						<p className="font-extralight md:font-thin text-center">Healhty Clean, Smokeless, Odorless, Tasteless</p>
					</div>
					<Image alt='quality2' width={0} height={0} sizes="100vw" src='/quality.png' className="p-3 h-28 w-28 object-cover" />
				</div>
				<div className="flex gap-1 items-center h-fit">
					<Image alt='renew2' width={0} height={0} sizes="100vw" src='/renewable.png' className="h-28 w-28 object-cover" />
					<div>
						<p className="text-center">Fine Process</p>
						<p className="font-extralight md:font-thin text-center">Greate Quality, Green, Renewable, Certificated</p>
					</div>
				</div>
				<div className="flex gap-1 items-center h-fit">
					<div>
						<p className="text-center">Good Packaging</p>
						<p className="font-extralight md:font-thin text-center">Ready for Request Packing</p>
					</div>
					<Image alt='logo2' width={0} height={0} sizes="100vw" src='/logo.png' className="h-28 w-28 p-3 object-cover" />
				</div>
			</div>

			<section className="my-20" id='product'></section>

			<div className="flex flex-col items-center w-11/12 lg:w-8/12 h-full lg:h-60v">
				<p className="text-4xl font-semibold">Our Products</p>
				{/* >= tablet */}
				<div className="hidden lg:flex mt-2 md:mt-12 items-stretch gap-14 place-content-between h-full">
					<Cards id={0} img={'/cube.png'} title={"Shisha Charcoal"} />
					<Cards id={1} img={'/pillow.png'} title={"Barbacue Charcoal"} />
					<Cards id={2} img={'/hex.png'} title={"Sawdust Charcoal"} />
				</div>
				{/* mobile */}
				<div className="lg:hidden md:w-9/12 mt-2 flex flex-col items-center gap-16">
					<MobileCard id={0} img={'/cube.png'} title={"Shisha Charcoal"} />
					<MobileCard id={1} img={'/pillow.png'} title={"Barbacue Charcoal"} />
					<MobileCard id={2} img={'/hex.png'} title={"Sawdust Charcoal"} />
				</div>
				<Link href='/products' className="mt-12 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border border-gray-600 text-gray-400 hover:text-white hover:bg-gray-800 focus:ring-gray-900">
					More Details
				</Link>
			</div>

			<section className="my-10 md:my-20" id='contact'></section>

			<Footer />

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
