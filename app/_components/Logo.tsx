import Image from "next/image";

function Logo() {
  return (

      <Image
        src="/website/logo.jpg"
        width="80"
        height="80"
        alt="Company Logo"
        quality={100}
        className="mr-5"
      />
 
  );
}

export default Logo;
