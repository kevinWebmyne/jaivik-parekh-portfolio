import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import gsap from "gsap";
import { useEffect } from "react";
import BgPerson from "../../public/images/profile/developer-pic-1.png";
import mountainRight from "../../public/images/mountain-right.png";
// eslint-disable-next-line
import Cloud1 from "../../public/images/clouds-1.png";
import Cloud2 from "../../public/images/clouds-2.png";
import mountainLeft from "../../public/images/mountain-left.png";
import useBreakPoints from "@/components/hooks/useBreakPoints";

const Home = () => {
  const { isTablet } = useBreakPoints();
  console.log(isTablet, "isTablet");
  useEffect(() => {
    gsap.to(".bg", {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.5,
      duration: 2,
    });
    gsap.to(".person", {
      scrollTrigger: {
        scrub: 1.5,
      },
      scale: 0.8,
      x: isTablet ? 0 : 350,
      y: isTablet ? 400 : -100,
      duration: 2,
    });
    gsap.to(".mountainLeft", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -500,
      duration: 2,
    });
    gsap.to(".mountainRight", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 500,
      duration: 2,
    });
    gsap.to(".clouds1", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 200,
      duration: 5,
    });
    gsap.to(".clouds2", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -200,
      duration: 5,
    });
    gsap.to(".text", {
      scrollTrigger: {
        scrub: 1,
      },
      y: 20,
      x: isTablet ? 0 : -200,
      duration: 5,
    });
  }, [isTablet]);

  return (
    <>
      <Head>
        <title>Jaivik Parekh | Home</title>
        <meta
          name="description"
          content="This is the home page for the Jaivik Parekh Portfolio website"
        />
      </Head>
      <TransitionEffect />

      <section className="bg-image-home">
        <div className="text w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <p
            style={{ color: "#ff3100" }}
            className=" my-4 text-base font-medium md:text-sm sm:text-xs"
          >
            As a full-stack developer, I am dedicated to turning ideas into
            innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex flex-wrap md:flex-col md:gap-2 items-center self-start mt-2 lg:self-center">
            <Link
              href="/Jaivik_Parekh_Resume.pdf"
              target={"_blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base"
              download={true}
            >
              Resume <LinkArrow className={"w-6 ml-1"} />
            </Link>
            <Link
              href="mailto:jaivikparekh1320@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light md:text-base md:m-0"
            >
              Contact
            </Link>
          </div>
        </div>
        <Image
          src={BgPerson}
          height="1000"
          width="500"
          alt="person"
          className="person"
        />
        <Image src={Cloud1} alt="clouds-1" className="clouds1" />
        <Image src={Cloud2} alt="clouds-2" className="clouds2" />
        <Image
          src={mountainLeft}
          alt="mountain-left"
          className="mountainLeft"
        />
        <Image
          src={mountainRight}
          alt="mountain-right"
          className="mountainRight"
        />
      </section>
    </>
  );
};

export default Home;
