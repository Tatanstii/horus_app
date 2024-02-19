"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { GrUser, GrUserFemale } from "react-icons/gr"

type Props = {
    id: string;
    name: string;
    label: string;
    urlMatch: string;
    icon: React.ReactNode
}

export default function CheckboxGender({ id, name, label, urlMatch, icon }: Props) {

    const searchParams = useSearchParams();
    const router = useRouter();
    const active = searchParams.get("gender") === urlMatch;

    const onFilterClick = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.checked) {
            router.push(`/catalog?gender=${urlMatch}`)
        } else {
            router.push(`/catalog`)
        }

    }

    return (
        <label htmlFor={id}>
            <input type="checkbox" name={name} id={id} className="peer appearance-none" defaultChecked={active} onClick={onFilterClick} />
            <span className="flex flex-row gap-3 justify-center items-center border rounded-md px-5 py-3 text-gray-600 peer-checked:ring-1 peer-checked:ring-supernova-500 peer-checked:text-supernova-500 hover:cursor-pointer" >
                <span>
                    {icon}
                </span>
                <span className="text-lg">
                    {label}
                </span>
            </span>

        </label>
    )
}