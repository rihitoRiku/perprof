import React from "react";
<<<<<<< Updated upstream
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";


// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];


function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
=======
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-light-100 md:flex md:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
<<<<<<< Updated upstream
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible md:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
=======
            </svg>
          </button>
        </div>
        <div className="h-14 hidden lg:flex items-center justify-center">
          <ul className="flex items-center justify-center text-gray-900 dark:text-white gap-2 xl:gap-6">
            <Link to="/">
              <li className="">
                <button
                  type="button"
                  className="text-gray-800 dark:text-white bg-none hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  Home
                </button>
              </li>
            </Link>

            <Link to="project">
              <li>
                <button
                  type="button"
                  className="text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  Project
                </button>
              </li>
            </Link>

            <Link to="certification">
              <li>
                <button
                  type="button"
                  className="text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  Certification
                </button>
              </li>
            </Link>

            <Link to="blog">
              <li>
                <button
                  type="button"
                  className="text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  Blog
                </button>
              </li>
            </Link>

            <Link to="roadmap">
              <li>
                <button
                  type="button"
                  className="text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  Roadmap
                </button>
              </li>
            </Link>
>>>>>>> Stashed changes
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-light-100 md:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 md:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Project",
    icon: UserCircleIcon,
  },
  {
    label: "Certification",
    icon: CubeTransparentIcon,
  },
  {
    label: "Blog",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <ul className="relative border-2 mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="#e5e5e5"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 md:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

const NavbarComponent = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
 
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false),
      );
    }, []);
   
    return (
      <Navbar className="mx-auto max-w-screen-xl p-2 md:rounded-full md:pl-6 bg-transparent shadow-none w-10/12 border-none">
        <div className="h-10 relative mx-auto flex items-center text-light-100">
          <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 md:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 md:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll absolute">
          <NavList />
        </MobileNav>
      </Navbar>
    );
};

export default NavbarComponent;
