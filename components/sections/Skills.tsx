import { Section } from "../common/Section";
import { FrontEndIcon } from "../icons/Skills/FrontEndIcon";
import { BackEndIcon } from "../icons/Skills/BackEndIcon";
import { HtmlIcon } from "../icons/Skills/HtmlIcon";
import { CssIcon } from "../icons/Skills/CssIcon";
import { JavaScriptIcon } from "../icons/Skills/JavaScriptIcon";
import { ReactIcon } from "../icons/Skills/ReactIcon";
import { NextJsIcon } from "../icons/Skills/NextJsIcon";
import { SassIcon } from "../icons/Skills/SassIcon";
import { TailwindIcon } from "../icons/Skills/TailwindIcon";
import { NodeJsIcon } from "../icons/Skills/NodeJsIcon";
import { NestJsIcon } from "../icons/Skills/NestJsIcon";
import { RestApiIcon } from "../icons/Skills/RestApiIcon";
import { MySqlIcon } from "../icons/Skills/MySqlIcon";
import { PostgreSql } from "../icons/Skills/PostgreSql";
import { MongoDB } from "../icons/Skills/MongoDB";
import { GraphQLIcon } from "../icons/Skills/GraphQLIcon";

export function Skills() {
  const icons = [
    {name: 'Front-End', icon: <FrontEndIcon key={0} />},
    {name: 'Back-End', icon: <BackEndIcon key={1} />},
    {name: 'HTML', icon: <HtmlIcon key={2} />},
    {name: 'CSS', icon: <CssIcon key={3} />},
    {name: 'JavaScript', icon: <JavaScriptIcon key={4} />},
    {name: 'React', icon: <ReactIcon key={5} />},
    {name: 'Next JS', icon: <NextJsIcon key={6} />},
    {name: 'Sass', icon: <SassIcon key={7} />},
    {name: 'Tailwind', icon: <TailwindIcon key={8} />},
    {name: 'Node JS', icon: <NodeJsIcon key={9} />},
    {name: 'Nest JS', icon: <NestJsIcon key={10} />},
    {name: 'REST API', icon: <RestApiIcon key={11} />},
    {name: 'PostgreSQL', icon: <MySqlIcon key={12} />},
    {name: 'MySQL', icon: <PostgreSql key={13} />},
    {name: 'MongoDB', icon: <MongoDB key={14} />},
    {name: 'GraphQL', icon: <GraphQLIcon key={14} />},
  ];
  return (
    <Section
      title="Skills"
      bgColor="bg-white"
      color="text-black"
      divider="border-b-black"
      subtitle="Front-End Developer who writes, elegant, clean and efficient code."
    >
      <div className="pt-8 md:pt-16 pb-16 md:pb-32 mx-12 grid  grid-cols-2 sm:grid-cols-4  lg:grid-cols-8 gap-8 justify-center items-center">
        {icons.map((Icon, index) => {
          return (
            <div key={index} className={"flex flex-col justify-center items-center"}>
              {Icon.icon}
              <span className=" mt-2">{Icon.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
