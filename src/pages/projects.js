import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/LandRover_Featured.png";
import project2 from "../../public/images/projects/MathMagicians_Project.jpg";
import project3 from "../../public/images/projects/cypto_angels_Finance.jpg";
import project4 from "../../public/images/projects/nike_shoes_eCommerce.jpg";
import project5 from "../../public/images/projects/Pokodex_Project.jpg";
import project6 from "../../public/images/projects/HTML_CSS_JS_Portfolio.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import AOS from "aos";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibol dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-dark font-medium text-xl dark:text-light lg:text-lg md:text-base">
          {summary}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold p-2 px-3 border border-solid border-dark rounded-lg hover:bg-dark hover:text-light cursor-pointer dark:border-light dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {



  return (
    <>
      <Head>
        <title>Jaivik Parekh | Projects </title>
        <meta
          name="description"
          content="This is projects page for my portfolio website. It displays some of my projects highlighting my skills amd tech-stacks"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light mt-16">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div  data-aos="fade-left"  className="animate-ex col-span-12">
              <FeaturedProjects
                type="Featured Project"
                title="Helper Land"
                summary="Helper Land :  Developed a website to provide an interface between user and client to use various types of services with 95 percent satisfaction. choosing different categories, the client can order various types of services as per the
                requirement with rage clicks by 38 percent."
                img={project1}
                link="https://github.com/Jaivik1320/Helperland"
                github="https://github.com/Jaivik1320/Helperland"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                type="Featured Project"
                title="Chat-Web Application"
                summary="Chat-Web Application : Worked independently and developed a website we can see the online status, great design with 90 percent hands-on coding in Javascript. On this website, we can read the message, image support, sound notifications, and the ability to create 5 rooms."
                img={project4}
                link="https://github.com/Jaivik1320/Web-Chat-Application"
                github="https://github.com/Jaivik1320/Web-Chat-Application"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
