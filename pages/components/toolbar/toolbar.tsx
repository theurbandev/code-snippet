import styles from "./styles/toolbar.module.css";
import themes from "../../../shared/data/themes.js";
import langs from "../../../shared/data/langagues.js";
import { Exporter } from "../../../shared/helpers/exporter";
import { Fragment, useState } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@material-tailwind/react";

interface Props {
  language: string;
  theme: string;
  tabSize: number;
  showGutter: boolean;
  fontSize: number;
  updateLanguage: Function;
  updateTheme: Function;
  updateEditorTabSize: Function;
  updateGutterValue: Function;
  updateFontSize: Function;
}

const Toolbar = ({
  language,
  theme,
  tabSize,
  showGutter,
  fontSize,
  updateLanguage,
  updateTheme,
  updateEditorTabSize,
  updateGutterValue,
  updateFontSize,
}: Props) => {
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const numValidation = (value: any, type: string) => {
    if (value === "") {
      if (type === "tabsize") {
        updateEditorTabSize(0);
      } else {
        updateFontSize(12);
      }
      return;
    }

    const num = parseInt(value);
    console.log(num);

    if (Number.isNaN(num)) {
      alert("This value can only be a number.");
      updateEditorTabSize(2);
    } else {
      if (type === "tabsize") {
        updateEditorTabSize(num);
      } else if (type === "fontsize") {
        updateFontSize(num);
      }
    }
  };

  return (
    <div className={`flex flex-row space-x-3 ${styles.toolbarContainer}`}>
      <div className="basis-1/4 md:basis-1/3">
        <Menu
          as="div"
          className="relative inline-block text-left"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="flex flex-row space-x-3">
            <Menu.Button
              className="flex justify-between w-full h-full gap-x-1.5 px-6 py-2 text-1xl text-white-100"
              style={{ backgroundColor: "#5a5a5ab8", borderRadius: "11px" }}
            >
              {language}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
                style={{ marginTop: "0.2rem" }}
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-full h-40 overflow-scroll z-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {langs.map((element, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <p
                        onClick={() => updateLanguage(element)}
                        key={i}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {element}
                      </p>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="basis-1/4 md:basis-1/3">
        <Menu
          as="div"
          className="relative inline-block text-left"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="flex flex-row space-x-3">
            <Menu.Button
              className="flex w-full h-full gap-x-1.5 px-6 py-2 text-1xl text-white-100 justify-between"
              style={{ backgroundColor: "#5a5a5ab8", borderRadius: "11px" }}
            >
              {theme}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
                style={{ marginTop: "0.2rem" }}
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-full h-40 overflow-scroll z-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {themes.map((element, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <p
                        key={i}
                        onClick={() => updateTheme(element)}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {element}
                      </p>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="basis-1/2 md:basis-1/3">
        <Popover
          as="div"
          className="relative inline-block text-left"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="flex flex-row space-x-3">
            <Popover.Button
              className="flex w-full h-full gap-x-1.5 px-6 py-2 text-1xl text-white-100 justify-between"
              style={{ backgroundColor: "#5a5a5ab8", borderRadius: "11px" }}
            >
              Options
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
                style={{ marginTop: "0.2rem" }}
              />
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute mt-2 w-full z-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <span>
                  <form>
                    <div className="md:flex md:items-center my-3 px-3">
                      <div className="md:w-1/2">
                        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
                          Tab Size
                        </label>
                      </div>
                      <div className="md:w-1/2">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 pl-4 text-gray-700 leading-tight focus:outline-none focus:bg-white text-center"
                          id="inline-full-name"
                          type="number"
                          defaultValue={tabSize}
                          onChange={(event) => numValidation(event.target.value, "tabsize")}
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center my-3 px-3">
                      <div className="md:w-1/2">
                        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 whitespace-nowrap">
                          Font Size
                          <span className="text-xs align-super">(px)</span>
                        </label>
                      </div>
                      <div className="md:w-1/2">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 pl-4 text-gray-700 leading-tight focus:outline-none focus:bg-white text-center"
                          id="inline-full-name"
                          type="number"
                          defaultValue={fontSize}
                          onChange={(event) => numValidation(event.target.value, "fontsize")}
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center my-3 px-3">
                      <div className="md:w-1/2">
                        <div className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 whitespace-nowrap">
                          Show Gutter
                        </div>
                      </div>
                      <div className="md:w-1/2 ml-7 pt-1.5">
                        <Switch
                          style={{ verticalAlign: "middle" }}
                          defaultChecked
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          checked={showGutter}
                          onChange={(event) => updateGutterValue(event.target.checked)}
                        />
                      </div>
                    </div>
                  </form>
                </span>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div className="basis-1/2 md:basis-1/3">
        <Menu
          as="div"
          className="relative inline-block text-left"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="flex flex-row space-x-3">
            <Menu.Button
              className="flex w-full h-full gap-x-1.5 px-6 py-2 text-1xl text-white-100 justify-between"
              style={{ backgroundColor: "#5a5a5ab8", borderRadius: "11px" }}
            >
              Export
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
                style={{ marginTop: "0.2rem" }}
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-full z-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 px-1">
                <div className="flex flex-row gap-1">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l basis-1/3"
                    onClick={() => {
                      Exporter("png");
                    }}
                  >
                    PNG
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r basis-1/3">
                    JPG
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r basis-1/3">
                    SVG
                  </button>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Toolbar;
