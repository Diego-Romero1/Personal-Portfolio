import Badge from "./Badge";
import SocialPill from "./SocialPill";
import Download from "./icons/Download";
import LinkedIn from "./icons/LinkedIn";
import Email from "./icons/Email";

export default function Banner() {
    return (
        <section id="banner">
            <div className="flex flex-col items-center justify-center 
            p-5
            rounded
            ">
                <div className="flex flex-row items-center gap-x-4">
                    <img
                        className="size-32 rounded-full"
                        src="/foto-perfil.jpg"
                        alt="Diego Foto"

                    />
                    <Badge />

                </div>
                <div className="mt-5 max-w-md text-stone-300">
                    <h1 className="text-3xl sm:text-5xl font-mono font-bold">Hola, soy Diego Romero</h1>
                    <p className="text-xl sm:text-2xl font-mono font-medium">Desarrollador web Full-Stack en busqueda de nuevos de desafíos y en constante aprendizaje, desde la Argentina.</p>

                </div>
                <div className="flex gap-x-2 mt-5">
                    <SocialPill social={"CV"} href="">
                        <Download />
                    </SocialPill>
                    <SocialPill social={"LInkedIn"} url={"https://www.linkedin.com/in/diego-romero-dev/"}>
                        <LinkedIn />
                    </SocialPill>
                    <SocialPill social={"Email"}>
                        <Email />
                    </SocialPill>
                </div>

            </div>
        </section>
    )
}