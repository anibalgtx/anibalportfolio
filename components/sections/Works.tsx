import { Section } from "../common/Section";

export function Works() {
  const worksList = [1, 2, 3];
  return (
    <Section title="Works" bgColor="bg-gray-900" color="white">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 py-16 md:gap-16 md:py-32">
        {worksList.map((text, index) => (
          <div
            className="w-40 h-60 md:w-60 md:h-80  bg-sky-700 rounded-xl"
            key={index}
          >
            <div className="h-3/4 bg-orange-100 rounded-t-xl"></div>
            <div className="h-1/4 bg-sky-700 rounded-b-xl">
              <div className="flex items-center justify-center h-full">
                <button className="bg-black text-white py-1 w-36 rounded-3xl">
                  Go to Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
