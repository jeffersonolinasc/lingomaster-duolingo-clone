import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="hidden w-full h-20 p-2 border-t-2 lg:block border-slate-200">
            <div className="flex items-center justify-between h-full mx-auto max-w-screen-lg">
                <Button size={"lg"} variant={"ghost"} className="w-full gap-x-2">
                    <Image src={"/img_japan.svg"} alt="Japan Flag" height={32} width={40} /> Japanese
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full gap-x-2">
                    <Image src={"/img_spain.svg"} alt="Spain Flag" height={32} width={40} /> Spanish
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full gap-x-2">
                    <Image src={"/img_croatian.svg"} alt="Japan Flag" height={32} width={40} /> Croatian
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full gap-x-2">
                    <Image src={"/img_france.svg"} alt="France Flag" height={32} width={40} /> Japanese
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full gap-x-2">
                    <Image src={"/img_italia.svg"} alt="Italia Flag" height={32} width={40} /> Italian
                </Button>
            </div>
        </footer>
    )
}
