import Image from "next/image";

export default function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-20 justify-center min-h-[80vh] justify-items-center">
      <div>
        <h1 className="text-3xl font-bold">Welcome to !Daraz</h1>
        <div className="text-xl font-semibold text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="w-96 ">
        <Image
          src={"/homepage-image.png"}
          width={400}
          height={200}
          alt="/homepage-image.webp"
          className="w-full"
          priority
        />
      </div>
    </div>
  );
}
