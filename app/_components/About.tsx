import Image from "next/image";

function About() {
  return (
    <div className="my-24 flex md:flex-row flex-col gap-6 ">
      <div className="my-auto flex flex-1 flex-col gap-8 md:w-[50%] w-full">
        <div>
          <h1 className="font-semibold text-lg lg:text-xl mx-auto">
            National Distributor of the{" "}
            <span className="text-primary-600">World&apos;s No.1 </span>Security
            Solutions Provider
          </h1>
        </div>

        <div className="text-gray-500 text-sm">
          <p className="text-justify">
            Established in 2012, Hawkvision has rapily emerged as a trusted and
            respected brand within the security market. As the Authorized
            National Distributor of Hikvision products, we proudly provide a
            comprehensive range of cutting edge solutions. Our influence extends
            beyond Kenya, encompassing the entire East Africa region.
          </p>
          <p className="text-justify mt-4 ">
            With an unwavering commitment to exceptional service and tailored
            solutions, we cater to diverse needs of both small and large-scale
            clients, earning their unwavering loyalty and solidifying our
            position as a prominent industry leader
          </p>
        </div>
      </div>

      <div className="md:w-[50%] w-full flex flex-1 gap-2 flex-col  ">
        <div className="relative lg:mx-auto h-[250px] w-[650px] ">
          <Image
            quality={100}
            fill
            className="object-cover rounded-md"
            src="/website/hikkab.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 justify-around my-4 gap-2 ">
          <div className="relative h-[150px] w-[300px]">
            <Image
              quality={100}
              fill
              className="object-cover"
              src="/website/mintab3.png"
              alt=""
            />
          </div>
          <div className="relative h-[150px] w-[300px]">
            <Image
              quality={100}
              fill
              className="object-cover"
              src="/website/wddab.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
