import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    id: 1,
    value: 150,
    name: "Satisfied Clients",
  },
  {
    id: 2,
    value: 40,
    name: "Projects Completed",
  },
  {
    id: 3,
    value: 3,
    name: "Years of Full-Stack Experience",
  },
  {
    id: 4,
    value: 4,
    name: "Years of IT Experience",
  },
];

const about = () => {
  return (
    <>
      <Head>
        <title>Jaivik Parekh | About </title>
        <meta
          name="description"
          content="This is about me page for my portfolio website."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center mt-16">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="Passion-title mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="animate-ex col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                👋 Hello, I&apos;m Jaivik Parekh, a seasoned full-stack
                developer with a passion for crafting innovative software
                solutions. With a solid foundation in software development and
                project management, I bring a versatile skill set to the table.
              </p>
              <p className="my-4 font-medium">
                🌐   Currently enrolled in the Master of Engineering Co-op program in
            Systems and Technology at McMaster University, eligible for a 4-12
            months Co-op starting in May 2024.
          
              </p>
              <p className="my-4 font-medium">
                🌐  Experience with Python, C++, and C programming with knowledge of
            software development and Machine Learning gained through course, lab
            work and projects.
          
              </p>
              <p className="font-medium">
                💼 Strengthened analytical and problem solving abilities to identify
            problems and implement corrective solutions using fundamental
            engineering techniques acquired through course and project work.
          
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="JaivikParekh"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="animate-ex col-span-2 flex flex-col flex-wrap items-end justify-between xl:col-span-8 xl:items-center md:order-3">
              {stats.map(({ id, value, name }) => (
                <div
                  key={id}
                  className="flex flex-col flex-wrap items-end justify-center xl:items-center xl:my-3"
                >
                  <p className="inline-block text-7xl font-bold">{value} +</p>
                  <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
