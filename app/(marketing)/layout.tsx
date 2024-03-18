import { Footer } from "./footer"
import { Header } from "./header"

type Props = {
    children: React.ReactNode
}

export default function Marketinglayout({ children }: Props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col items-center justify-center flex-1">{children}</main>
            <Footer />
        </div>
    )
}
