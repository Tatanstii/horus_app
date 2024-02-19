"use client";

import cn from "@/app/utils/cn"
import Link from "next/link";

type PropTypes = {
    url: string;
    title: string;
    active: boolean;
}

export default function NavItem({ url, title, active }: PropTypes) {
    return <Link href={url} className={cn("px-5 py-3 rounded-md hover:ring-1 hover:text-supernova-500 ring-supernova-500 transition ease-in duration-75",{
        "nav_item__active": active
    })}>
        {title}
    </Link>
}