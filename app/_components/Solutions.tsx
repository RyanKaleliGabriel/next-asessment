"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface SolutionType {
  name: string;
  heading: string;
  brief: string;
  image: string;
}

interface SolutionsProps {
  children: ReactNode;
  filter: string;
  handleSolution: (filter: string) => void;
  currSol: SolutionType;
}

const solutions: SolutionType[] = [
  {
    name: "Apartment",
    heading: "A secure and efficient way to manage your Apartments",
    brief:
      "Apartment security is always an incredibly demanding security scenario. People need not just security around their home, but a better residential experience with it. Built on a system of security, we offer an innovative entry & exit experience to boost rush hour efficiency for both residents and walk-in visitors. Also, AI-empowered video security stands like a reassuring guard 24/7. Hikvision's Solution by Scenario for Apartments helps users enjoy a safer and more pleasant living experience at a minimal cost with reliable delivery and performance.",
    image: "/apartment.jpg",
  },
  {
    name: "Schools",
    heading: "Safer campus, better education",
    brief:
      "The security of schools has become a top concern for administrators and parents alike around the world. Building a safe school with minimal risks is what they are searching for. Hikvision's Solutions by Scenario for schools provides a complete school security system with all-weather video protection, AI-powered applications, intuitive alarms, efficient entry & exit safeguards, and attendance management. Students thrive in a safe and supportive learning environment – that’s why Hikvision created this effective solution. ",
    image: "/school.jpg",
  },
  {
    name: "Construction",
    heading: "Boost security and intelligence on-site",
    brief:
      "A synthesis of activity, personnel, assets, equipment, and machinery, construction sites face many complicated challenges. Challenges such as personnel mobility and complex vehicle management. The costs, the pressure, and the stakes, are high. That's why Hikvision's solution for construction site security provides diverse, easy-to-deploy systems that guarantee effective safety and protection. Secured by our world-renowned products and technologies, the whole solution facilitates efficient vehicle management and radically boosts productivity and security on construction sites. Read on to learn more.",
    image: "/construction.jpg",
  },
  {
    name: "Factory",
    heading: "A secure and efficient way to manage your Factories",
    brief:
      "The factory is a synthesis of personnel, assets, equipment, and machinery. Therefore, complicated challenges arise frequently in a factory, such as personnel mobility and fire hazards. Hikvision's Solution by Scenario for Factories provides more cost-effective ways to guarantee efficient and safe production, and property protection. Secured by our professionally selected products and subsystems, the whole solution can bring more momentum and productivity to factory operation.",
    image: "/factory.jpg",
  },
  {
    name: "Shopping Malls",
    heading:
      "Optimize operations & attract more shoppers with a better experience.",
    brief:
      "Shrinkage is on the rise, budgets are tightening, but customers expect more. Hikvision’s solutions for Shopping Malls can help you attract and satisfy a larger audience with nicer shops, easier navigation, better parking experience, while enhancing the overall security in a proactive way. ",
    image: "/shoppingmalls.jpg",
  },
  {
    name: "Supermarkets",
    heading:
      "Crafting the future of retail – Where efficiency meets innovation",
    brief:
      "In today's customer-focused industry, supermarkets are constantly facing a multitude of challenges. These challenges range from dead spaces lacking proper security measures to the need for effective loss prevention strategies, as well as the ongoing quest for operational optimization. Solution for supermarkets offers reliable video security for daily management, combining Hikvision’s cutting-edge technologies and analytics can result in a well-designed in-store layout and better customer flow, which will boost your operational efficiency and revenue margins.",
    image: "/supermarket.jpg",
  },
  {
    name: "Hotels",
    heading: "Make every stay safe and memorable",
    brief:
      "Even though hotels offer only temporary hospitality, they are committed to creating the most pleasant experience possible for every guest. But, to create that great experience, they also face many challenges – from staff management to perimeters, property, and operations. Providing a safe and enjoyable customer stay for travelers and groups is critical for hotel security management. Solution for Hotels integrates video security, alarm systems, attractive video displays, and a unified platform to enhance hotel management and security levels. Safety, convenience and efficiency come together in this solution. ",
    image: "/hotel.jpg",
  },
  {
    name: "Parking Lots",
    heading: "Innovative, secure, and efficient parking with video protection",
    brief:
      "Nowadays, parking lots operators are striving to make the most economical use of their lots. Drivers have difficulty finding a free space conveniently in enormous parking lots. Even car park operators often complain about the low utilization of spaces. Hikvision‘s  Parking Lot Management Solutions can guide drivers to a free space quickly, and streamline the flow of parking, freeing up spaces more quickly for further occupation, helping optimizing operation, and providing extra layers of security.",
    image: "/parkinglot.jpg",
  },
  {
    name: "Offices",
    heading: "A safe and efficient way to manage your workplace",
    brief:
      "Solution for Office Buildings provides advanced, intelligent product combinations on a lightweight management platform, building safer and more convenient workplaces for personnel and visitors, while simplifying daily management for system users and operators. The whole design unlocks the value of properties by adding security, efficiency and experience. ",
    image: "/office.jpg",
  },
];
function Solutions() {
  const [currSol, setCurrSol] = useState<SolutionType>(solutions[0]);

  function handleSolution(filter: string) {
    const selectedSolution = solutions.find(
      (solution) => solution.name === filter
    );
    if (selectedSolution) setCurrSol(selectedSolution);
  }

  return (
    <>
      <div className="flex justify-end ">
        <div className="border py-2 border-gray-300 flex flex-1 flex-wrap px-2  gap-2 lg:gap-4 my-8">
          {solutions.map((solution) => (
            <Button
              handleSolution={handleSolution}
              filter={solution.name}
              currSol={currSol}
              key={solution.name}
            >
              {solution.name}
            </Button>
          ))}
        </div>
      </div>

      {currSol && (
        <div className="flex flex-col gap-8">
          <div className="w-full my-auto flex flex-col gap-6">
            <h4 className=" text-gray-700 text-2xl ">{currSol.name}</h4>
            <p className="text-gray-500 text-md text-justify">
              {currSol.brief}
            </p>
          </div>
          <div className="w-full relative h-[600px]">
            <Image
              src={currSol.image}
              alt={currSol.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ children, filter, handleSolution, currSol }: SolutionsProps) {
  return (
    <button
      onClick={() => handleSolution(filter)}
      className={`${
        filter === currSol?.name
          ? "text-primary-500 underline underline-offset-2"
          : ""
      } text-gray-500 text-md hover:underline inline-block hover:text-primary-600 transition-all duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
}

export default Solutions;
