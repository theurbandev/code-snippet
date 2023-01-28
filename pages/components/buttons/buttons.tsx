import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const buttons = () => {
  const buttons = [{ name: "ClearUploadedPhoto", text: "Clear Photo" }];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {buttons.map((button) => (
            <a key={button.name} className={classNames()}>
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default buttons;