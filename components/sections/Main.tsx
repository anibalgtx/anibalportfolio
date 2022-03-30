import Navbar from "../layout/Navbar";
import { GitHubIcon } from "../icons/GitHubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export function Main() {
  const icons = [
    <GitHubIcon key={0} />,
    <InstagramIcon key={1} />,
    <LinkedInIcon key={2} />,
  ];
  return (
    <main className="md:p-4">
      <div className="container mx-auto relative h-screen min-h-[600px]">
        <Navbar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block">
          <div className="flex flex-col gap-y-12 xl:flex-row xl:gap-x-24 items-center">
            <div className="flex flex-col items-center gap-y-6">
              <div className="grid grid-cols-3 grow justify-evenly w-full">
                {icons.map((Icon, index) => {
                  return (
                    <div key={index} className={"flex justify-center"}>
                      {Icon}
                    </div>
                  );
                })}
              </div>
              <h1 className="text-3xl md:text-6xl font-bold whitespace-nowrap">
                Anibal Garcia
              </h1>
              <h2 className="text-xl md:text-3xl ">Web Developer</h2>
              <div className="flex space-x-10">
                <button className="bg-sky-700 text-white py-1 w-28 rounded-3xl">
                  Resume
                </button>
                <button className="bg-black text-white py-1 w-28 rounded-3xl">
                  Works
                </button>
              </div>
            </div>
            <p className="text-xl md:text-3xl text-center ">
              Hi. I’m Anibal, A <span className="text-sky-700">Web Dev</span>,
              nice to meet you. Please take a look around!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
