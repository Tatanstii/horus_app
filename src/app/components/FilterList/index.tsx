"use client"

import { FiltersGroup } from "@/app/types"
import { Checkbox, Collapse } from "antd"

type Props = {
    filtersGroup: FiltersGroup
}

export default function FilterList({ filtersGroup }: Props) {
    return <div className="py-3 sticky">
        {
            filtersGroup.map(({
                label,
                filters
            }, index) => (
                <Collapse key={index} defaultActiveKey={[index]} size="large" bordered={false} items={[{
                    key: index,
                    label: label,
                    children: <div>
                        <ul className="flex flex-col gap-3">
                            {
                                filters.map(({
                                    id,
                                    value,
                                    displayValue,
                                }) => (
                                    <li key={id}>
                                        <Checkbox value={value}>{displayValue}</Checkbox>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }]} />
            ))
        }
    </div>
}