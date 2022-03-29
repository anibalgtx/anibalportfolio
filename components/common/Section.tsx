import React from "react";

interface SectionInterface {
  title: string;
  bgColor: string;
  color: string;
  subtitle?: string;
}
export const Section: React.FC<SectionInterface> = ({
  children,
  title,
  bgColor,
  color,
  subtitle,
}) => {
  return (
    <section className={`${bgColor}`}>
      <div className="md:container md:mx-auto relative">
        <div className="mx-12">
        <div className={`w-28 border-b-2 border-b-${color}`}>
          <h1 className={`text-xl md:text-3xl text-${color} pt-16 pb-4`}>
            {title}
          </h1>
        </div>
        <h2 className={`text-base md:text-xl text-${color} mt-4`}>
          {subtitle}
        </h2>
        </div>
        {children}       
      </div>
    </section>
  );
};
