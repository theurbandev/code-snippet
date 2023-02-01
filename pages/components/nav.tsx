import styles from "../../styles/Nav.module.css";
import UploadDropdown from "./upload/upload-components/upload-dropdown";

const navigation = [
  { name: "Pretty Screenshot", href: "/", current: true },
  { name: "Donate", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Nav = () => {
  return (
    <div className={`${styles.navContainer} flex flex-row-reverse my-10 mx-20`}>
      <UploadDropdown />
      <button className="rounded-md bg-black bg-opacity-10 text-lg font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-40 h-12 mx-10">
        undo
      </button>
    </div>
  );
};

export default Nav;
