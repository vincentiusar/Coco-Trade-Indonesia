import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import Logo from 'next/image';

function Nav() {
    return (
        <div className='w-full top-0 z-50 fixed'>
            <Navbar fluid rounded className='bg-zinc-900 py-4'>
                <NavbarBrand href="/" className='px-0 md:px-24'>
                    <Logo src="/logo.png" width="0" height="0" sizes="100vw" className="mr-3 md:w-full md:h-7 w-full h-7" alt="Coco Trade Logo" />
                    <span className="self-center whitespace-nowrap text-xl md:text-2xl font-semibold dark:text-white">Coco Trade Indonesia</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse className='px-0 md:px-24'>
                    <NavbarLink className='text-white cursor-pointer' href='/'>
                        Home
                    </NavbarLink>
                    <NavbarLink className='text-white cursor-pointer' href='#product'>
                        Product
                    </NavbarLink>
                    <NavbarLink className='text-white cursor-pointer' href='#contact'>
                        Contact Us
                    </NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

export default Nav;