import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <>
            <div className="grid grid-cols-1 gap-10 w-10/12 md:gap-0 items-center md:grid-cols-2 md:px-12 md:w-2/3 h-full z-20">
				<div className="col-span-1">
					<Image width={0} height={0} sizes="100vw" src='/logo_full.png' alt='logo' className="w-1/3 scale-125" />
					<p className="font-thin">
						We are a leading manufacturer and exporter of charcoal briquettes
					</p>

					<section className="my-5"></section>

					<div>
						<Link target="_blank" href='https://wa.me/6281386278150' className="text-normal">
							Whatsapp: <span className="hover:text-orange-500">+62 8138 6278 150</span>
						</Link>
					</div>
					<div>
						<Link target="_blank" href='https://mail.google.com/mail/u/0/?fs=1&to=cocotraderindo@gmail.com&tf=cm' className="text-normal hover:text-orange-500">
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
			<section className="my-4"></section>
        </>
    )
}

export default Footer;