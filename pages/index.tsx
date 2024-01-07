import { NextPage } from "next";
import { useState } from "react";
import ToolBar from "./components/toolbar/toolbar";
import CodeEditor from "./components/editor/editor";
import styles from "./components/toolbar/styles/toolbar.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  let [selectedLanguage, setSelectedLanguage] = useState("Language");
  let [selectedTheme, setSelectedTheme] = useState("Theme");
  let [selectedTabSize, setTabSize] = useState(2);
  let [showGutter, setGutterBool] = useState(true);
  let [fontSize, setFontSize] = useState(12);

  return (
    <>
      <div className={`${styles.container} flex flex-col`}>
        <h1 style={{ padding: "25px 0 0 0", fontSize: "3.6rem", fontWeight: "900" }}>
          Code Snippet
        </h1>
        <p style={{ color: "white", fontSize: "1rem" }}>
          Generate and distribute visually appealing images featuring your source
          code. <br />
        </p>
        <div className="basis-2/12">
          <ToolBar
            language={selectedLanguage}
            theme={selectedTheme}
            tabSize={selectedTabSize}
            showGutter={showGutter}
            fontSize={fontSize}
            updateLanguage={(lang: string) => setSelectedLanguage(lang)}
            updateTheme={(theme: string) => setSelectedTheme(theme)}
            updateEditorTabSize={(tabSize: number) => setTabSize(tabSize)}
            updateGutterValue={(showGutter: boolean) => setGutterBool(showGutter)}
            updateFontSize={(fontSize: number) => setFontSize(fontSize)}
          />
        </div>
        <div className={`basis-10/12 ${styles.uploadCanvas}`}>
          <CodeEditor
            language={selectedLanguage}
            theme={selectedTheme}
            tabSize={selectedTabSize}
            showGutter={showGutter}
            fontSize={fontSize}
          />
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <div
          style={{
            color: "white",
            fontSize: "11px",
            marginTop: "25px",
            letterSpacing: "1px",
          }}
        >
          <h6>
            <Link href="https://github.com/theurbandev" target={"_blank"}>
              @theurbandev
            </Link>
          </h6>
        </div>{" "}
      </div>
    </>
  );
};

export default Home;
