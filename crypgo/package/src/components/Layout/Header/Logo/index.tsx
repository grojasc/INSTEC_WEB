import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/images/logo/instec-logo-header.png"
        alt="INSTEC - Ingeniería e Inspecciones Técnicas"
        width={240}
        height={80}
        className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto group-hover:scale-105 transition-transform duration-300"
        style={{ 
          filter: 'drop-shadow(0 2px 12px rgba(0, 0, 0, 0.15))',
          maxHeight: '112px'
        }}
        priority
      />
    </Link>
  );
};

export default Logo;
