import styles from "./styles/toolbar.module.css";
import themeData from "../../../shared/data/themes.js";
import langs from "../../../shared/data/langagues.js";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import languages from "../../../shared/data/langagues.js";

interface props {
	language: string;
	theme?: string;
	options?: Array<string>;
	updateLanguage: Function;
	updateTheme: Function;
}

const Toolbar = ({ language, theme, options, updateLanguage }: props) => {
	function classNames(...classes: any) {
		return classes.filter(Boolean).join(" ");
	}

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
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
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
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active
													? "bg-gray-100 text-gray-900"
													: "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											Account settings
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active
													? "bg-gray-100 text-gray-900"
													: "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											Support
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active
													? "bg-gray-100 text-gray-900"
													: "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											License
										</a>
									)}
								</Menu.Item>
								<form method="POST" action="#">
									<Menu.Item>
										{({ active }) => (
											<button
												type="submit"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block w-full px-4 py-2 text-left text-sm"
												)}
											>
												Sign out
											</button>
										)}
									</Menu.Item>
								</form>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
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
							Options
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
							<div className="py-1">
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active
													? "bg-gray-100 text-gray-900"
													: "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											Account settings
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active
													? "bg-gray-100 text-gray-900"
													: "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											Support
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active
													? "bg-gray-100 text-gray-900"
													: "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											License
										</a>
									)}
								</Menu.Item>
								<form method="POST" action="#">
									<Menu.Item>
										{({ active }) => (
											<button
												type="submit"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block w-full px-4 py-2 text-left text-sm"
												)}
											>
												Sign out
											</button>
										)}
									</Menu.Item>
								</form>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	);
};

export default Toolbar;
