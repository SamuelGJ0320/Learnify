import Image from "next/image";


export default function BackgroundImage({image, className}) {
  return (
    <Image
      alt="Grid"
      src={image}
      className={`-z-20 ${className}`}
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
    
      }}
    />
  );
}
