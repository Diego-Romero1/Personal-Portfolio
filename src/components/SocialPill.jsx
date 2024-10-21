import { Badge } from "flowbite-react"
export default function SocialPill({ social, children, url }) {
    return (
        <a href={url} target="blank">
            <Badge className="cursor-pointer text-slate-50 bg-slate-700 hover:bg-sky-700 rounded-full w-[100px] p-[7px]" >
                <div className="flex flex-row items-center justify-center" >
                    <div>{children}</div>
                    <p className="ml-1">{social}</p>
                </div>

            </Badge>
        </a>

    )
}