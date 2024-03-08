"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { GrUser, GrUserFemale } from "react-icons/gr";

const MALE_OPTION = "male";
const FEMALE_OPTION = "female";

export default function GenderOptions() {
  const [activeCheck, setActiveCheck] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const params = useSearchParams();

  const genderParam = params.get("gender");

  const createGenderParam = useCallback((gender: string) => {
    const newParams = new URLSearchParams(params);
    newParams.set("gender", gender);
    return newParams.toString();
  }, []);

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const newParams = createGenderParam(value);
    router.push(`${pathname}?${newParams}`);
  };

  useEffect(() => {
    if (genderParam) {
      console.log("USE EFFECT DISPATCH");
      setActiveCheck(genderParam);
    }
  }, [genderParam]);

  return (
    <div className="flex flex-row gap-3">
      <label htmlFor="male_checkbox">
        <input
          type="radio"
          name="gender"
          id="male_checkbox"
          className="peer appearance-none "
          value="male"
          defaultChecked={genderParam == MALE_OPTION}
          onClick={onClick}
        />
        <span className="flex flex-row gap-3 justify-center items-center border rounded-md px-5 py-3 text-gray-600 peer-checked:ring-1 peer-checked:ring-supernova-500 peer-checked:text-supernova-500 hover:cursor-pointer transition peer-hover:border-supernova-500 peer-hover:text-supernova-500">
          <span>
            <GrUser size={24} />
          </span>
          <span className="text-lg">Hombres</span>
        </span>
      </label>
      <label htmlFor="female_checkbox">
        <input
          type="radio"
          name="gender"
          id="female_checkbox"
          className="peer appearance-none"
          value="female"
          defaultChecked={genderParam == FEMALE_OPTION}
          onClick={onClick}
        />
        <span className="flex flex-row gap-3 justify-center items-center border rounded-md px-5 py-3 text-gray-600 peer-checked:ring-1 peer-checked:ring-supernova-500 peer-checked:text-supernova-500 hover:cursor-pointer transition peer-hover:border-supernova-500 peer-hover:text-supernova-500">
          <span>
            <GrUserFemale size={24} />
          </span>
          <span className="text-lg">Mujeres</span>
        </span>
      </label>
    </div>
  );
}
