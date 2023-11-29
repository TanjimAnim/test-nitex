import Image from "next/image";

export default function Header() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1>Welcome to Naraz!</h1>
      </div>
      <div>
        <Image
          src={"/homepage-image.webp"}
          width={400}
          height={200}
          alt="/homepage-image.webp"
        />
      </div>
    </div>
  );
}
