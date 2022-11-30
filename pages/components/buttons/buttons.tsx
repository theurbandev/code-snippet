import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const buttons = () => {
  const buttons = [{ name: "ClearUploadedPhoto", text: "Clear Photo" }];
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {buttons.map((button) => (
            <a
              key={button.name}
              href={button.href}
              className={classNames(
                button.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
