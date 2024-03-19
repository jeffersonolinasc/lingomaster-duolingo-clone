import Image from "next/image"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

type CardProps = {
    id: number
    title: string
    imageSrc: string
    onClick: (id: number) => void
    disabled: boolean
    active: boolean
}

export const Card = ({ id, title, imageSrc, onClick, disabled, active }: CardProps) => {
    return (
        <button
            onClick={() => onClick(id)} // add onClick function from parent component
            className={cn(
                "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
                disabled && "pointer-events-none opacity-50"
            )}>
            <div className="min-[24px] w-full flex items-center justify-end">
                {active && (
                    <div className="bg-green-600 rounded-md flex items-center justify-center p-1.5">
                        <Check className="text-white stroke-[4] h-4 w-4" />
                    </div>
                )}
            </div>
            <Image
                src={imageSrc}
                alt={title}
                height={70}
                width={93.33}
                className="object-cover border rounded-lg drop-shadow-md"
            />
            <p className="mt-3 font-bold text-center text-neutral-700">{title}</p>
        </button>
    )
}
