import Nav from "@/components/Nav";
import SwiperMenu from "@/components/SwiperMenu";

export const metadata = {
	title: 'Coco Trade Indonesia',
	description: 'Generated by create next app',
}

function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-full top-0 z-20 fixed">
				<Nav />
			</div>
		</main>
	)
}

export default Home;
