import { Icons } from "../icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="max-x-7xl my-5 lg:my-16 mx-2 lg:mx-0">
      <Link
        href="/#support"
        className="flex flex-col items-center justify-center"
      >
        <div className="px-3 py-2 my-2 border rounded-full hover:scale-105 transition-transform duration-75 shine shine-hover backdrop-blur-sm">
          <div className="flex justify-center gap-3 items-center">
            <Icons.logo width={25} height={25} />
            <p className="primary-gradient">Support us build the future</p>
          </div>
        </div>
      </Link>
      <p className="text-md text-center text-secondary-foreground/60">
        Full-cycle space operations simulation tool for industrial applications
        and enthusaists alike
      </p>
      <div className="mt-6 lg:mt-10 flex justify-center items-center">
        <h1 className="hidden lg:block font-heading tracking-wider leading-relaxed text-8xl lg:text-9xl text-justify">
          Build with&nbsp;
        </h1>
        <BigLogo />
      </div>
      <h1 className="text-lg lg:text-xl max-w-7xl text-center">
        We create an open source software for{" "}
        <span className="primary-gradient">Lunar colony engineering</span>
      </h1>
    </section>
  );
}

const BigLogo = () => {
  return (
    <section
      id="big-logo"
      className="flex justify-center items-center"
    >
      <h1 className="font-heading tracking-wider leading-relaxed text-8xl lg:text-9xl text-justify primary-gradient">
        LunC
      </h1>
      <div className="flex -translate-y-2">
        <Icons.logo width={100} height={100} />
      </div>
    </section>
  );
};
