import Link from "next/link";

const CustomLink = ({ href, linkName, customCss }) => {
  return (
    <Link
      href={href}
      className={`max-w-sm whitespace-nowrap transition my-6 text-center py-2 px-10 hover:px-2 border-r-2 border-r-[#cd9a41] border-l-2 border-l-[#cd9a41] hover:border-2 hover:border-[#cd9a41] rounded mx-auto ${customCss}`}
    >
      --- {linkName} ---
    </Link>
  );
};

export default CustomLink;
