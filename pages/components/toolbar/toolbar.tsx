import styles from "./styles/toolbar.module.css";
import themeData from "../../../shared/data/themes.js";


import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Toolbar = () => {
	let themes = [];
	for (let i = 0; i < themeData.length; i++) {
		themes.push(themeData[i].id);
	}

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
							className="flex justify-between w-full h-full gap-x-1.5 px-3 py-2 text-1xl text-white-100"
							style={{ border: "2.5px solid rgb(164 164 164)" }}
						>
							Languages
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
						<Menu.Items className="absolute mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
			<div className="basis-1/4 md:basis-1/3">
				<Menu
					as="div"
					className="relative inline-block text-left"
					style={{ width: "100%", height: "100%" }}
				>
					<div className="flex flex-row space-x-3">
						<Menu.Button
							className="flex w-full h-full gap-x-1.5 px-3 py-2 text-1xl text-white-100 justify-between"
							style={{ border: "2.5px solid rgb(164 164 164)" }}
						>
							Themes
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
						<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
							className="flex w-full h-full gap-x-1.5 px-3 py-2 text-1xl text-white-100 justify-between"
							style={{ border: "2.5px solid rgb(164 164 164)" }}
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
						<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
