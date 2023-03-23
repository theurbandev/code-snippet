import styles from "./styles/nav.module.css";
import UploadDropdown from "../footer/dropdown-menu";

const navigation = [
  { name: "Pretty Screenshot", href: "/", current: true },
  { name: "Donate", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Nav = () => {
  return (
		<div
			className={`${styles.navContainer} flex flex-row-reverse my-5 mx-10`}
		>
			<UploadDropdown />
		</div>
  );
};

export default Nav;
