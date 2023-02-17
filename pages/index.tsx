import { Nav } from "./components/nav/nav";
import { NextPage } from "next";
import ToolBar from "./components/toolbar/toolbar";
import CodeEditor from "./components/editor/editor";
import styles from "./components/toolbar/styles/toolbar.module.css";
import Footer from "./components/footer";

const Home: NextPage = () => {
	return (
		<>
			<div className={`${styles.container} flex flex-col`}>
				<div className={`basis-2/12 ${styles.toolbarContainer}`}>
					<ToolBar />
				</div>
				<div className={`basis-10/12 ${styles.uploadCanvas}`}>
					<CodeEditor />
				</div>
			</div>
			<div className={`${styles.footer}`}>
				<Footer />
			</div>
		</>
	);
};

export default Home;
