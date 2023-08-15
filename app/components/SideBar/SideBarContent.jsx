import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarContent = ({ header, list, icon, navLinks }) => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="mt-4">
        <p className="text-sm text-gray-400">{header}</p>
        {list.map((e, i) => {
          const isActive = pathname === navLinks[i];

          return (
            <li key={i}>
              <Link
                href={navLinks[i]}
                key={i}
                className={
                  isActive
                    ? "flex rounded-lg p-2 bg-gray-600"
                    : "flex rounded-lg p-2 hover:bg-gray-800"
                }
              >
                <div className="h-6 w-6 mr-4">{icon[i]}</div>
                {e}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarContent;
