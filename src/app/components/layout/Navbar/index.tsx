import { navItems } from "./data";
import { usePathname } from "next/navigation";
import NavItem from "./item";

export default function Nabvar() {
    const pathname = usePathname();

    return (
        <nav className="h-full py-10 md:py-0">
            <ul className="h-full text-white flex flex-col md:flex-row justify-center font-cinzel items-center">
                {
                    navItems.map(({ id, url, title }) => (
                        <li key={id}>
                            <NavItem url={url} title={title} active={pathname === url} />
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}