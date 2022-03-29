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
    <FrontEndIcon key={0} />,
    <BackEndIcon key={1} />,
    <HtmlIcon key={2} />,
    <CssIcon key={3} />,
    <JavaScriptIcon key={4} />,
    <ReactIcon key={5} />,
    <NextJsIcon key={6} />,
    <SassIcon key={7} />,
    <TailwindIcon key={8} />,
    <NodeJsIcon key={9} />,
    <NestJsIcon key={10} />,
    <RestApiIcon key={11} />,
    <MySqlIcon key={12} />,
    <PostgreSql key={13} />,
    <MongoDB key={14} />,
    <GraphQLIcon key={14} />,
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
            <div key={index} className={"flex justify-center"}>
              {Icon}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
