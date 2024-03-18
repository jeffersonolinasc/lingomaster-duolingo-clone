import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { InfinityIcon } from "lucide-react"

type Props = {
    activeCourse: { imageSrc: string; title: string } // later change with DB type
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

export const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: Props) => {
    return (
        <div className="flex items-center justify-between w-full gap-x-2 lg:pt-[28px]">
            <Link href={"/courses"}>
                <Button variant={"ghost"}>
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="border rounded-md"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant={"ghost"} className="text-orange-500">
                    <Image src={"/ic_points.svg"} alt="Points" height={28} width={28} className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant={"ghost"} className="text-rose-500">
                    <Image src={"/ic_heart.svg"} alt="Heart" height={22} width={22} className="mr-2" />
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
                </Button>
            </Link>
        </div>
    )
}
