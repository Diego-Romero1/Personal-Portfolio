"use client";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function Experience() {

    const experiences = [
        {
            id: "1",
            date: "desde Marzo 2024 hasta Octubre 2024",
            title: "Desarrollador Full-Stack en CyberArgSistemas",
            detalle: "Colaboro en equipo en el desarrollo front-end de una plataforma de Cursos Online relacionado a lamedicina. Mi trabajo más destacado fueimplementar chatbot consumiento api de ChatGPT y Gemini"
        },
        {
            id: "2",
            date: "desde Octubre 2023 hasta Enero 2024",
            title: "Desarrollador Fron-End en No Country",
            detalle: "Diseño e implementación de una págína web para un restaurante, donde el cliente podrá ver el menú y realizar compras. Con sección de administrador, donde se realiza un CRUD para"
        }
    ]

    return (
        <section id="experience" className="max-w-lg ml-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-stone-300 text-3xl sm:text-5xl font-mono font-bold p-3 mt-20">Experiencia</h1>
                <Timeline>
                    {experiences.map((experience) => (
                        <Timeline.Item key={experience.id}>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                                <Timeline.Time>{experience.date}</Timeline.Time>
                                <Timeline.Title>{experience.title}</Timeline.Title>
                                <Timeline.Body>
                                    {experience.detalle}
                                </Timeline.Body>
                                <Button color="gray">
                                    Learn More
                                    <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </div>


        </section>
    );
}