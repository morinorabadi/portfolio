export default function Nav() {
  const links = [
    { id: "1", href: "aboutme", text: "home" },
    { id: "2", href: "projects", text: "projects" },
    { id: "3", href: "skills", text: "skills" },
    { id: "4", href: "workExperience", text: "experience" },
    { id: "5", href: "contactInformation", text: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-screen z-20 bg-gradient-to-b from-[#000010dd] to-[#00000010]">
      <div className=" text-lg md:text-2xl p-2 md:p-6 justify-between flex w-screen max-w-2xl font-bold  px-6 m-auto">
        {links.map((link) => (
          <a
            href={`#${link.href}`}
            key={link.id}
            className="text-[#4dd148] hover:text-tGreen"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
