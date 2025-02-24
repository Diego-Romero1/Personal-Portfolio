import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function HeaderNav() {
    return (
        <Navbar fluid rounded>
            <img src="/programming-code.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#banner">
                    Inicio
                </NavbarLink>
                <NavbarLink href="#experience">
                    Experiencia
                </NavbarLink>
                <NavbarLink href="#">
                    Proyectos
                </NavbarLink>
                <NavbarLink href="#">Educación</NavbarLink>
                <NavbarLink href="#">Sobre mí</NavbarLink>
                <NavbarLink href="#">Contacto</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
