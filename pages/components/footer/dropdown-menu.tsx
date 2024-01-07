import { Menu, Transition } from "@headlessui/react";
import { Fragment, SVGProps } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function UploadDropdown() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button
            className="inline-flex w-60 h-[50px] justify-center rounded-md bg-opacity-20 px-5 py-3 text-1xl text-white font-bold hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            style={{
              letterSpacing: "3px",
              borderBottom: "solid 5px #3c6545db",
              backgroundColor: "#181a1b",
              fontWeight: "bold",
            }}
          >
            EXPORT
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
          <Menu.Items className="absolute left-0 right-0 -top-50 mt-2 w-45 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-orange-500 text-white"
                        : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon className="mr-2 h-5 w-5" />
                    )}
                    Share
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-orange-500  text-white"
                        : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Export
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
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
      </div>
    </div>
  );
}

function EditInactiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none">
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#5F6A63"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="white" stroke="black" strokeWidth="2" />
    </svg>
  );
}

function ArchiveInactiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#5F6A63"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#5F6A63"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#5F6A63" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="white"
        stroke="#5F6A63"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="white"
        stroke="#5F6A63"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#5987ab" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#5F6A63"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#5F6A63" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#5F6A63" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="white"
        stroke="#5F6A63"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#5F6A63" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#5F6A63" strokeWidth="2" />
    </svg>
  );
}
