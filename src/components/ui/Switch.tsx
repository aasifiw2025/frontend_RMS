import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function SwitchComponent() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`group relative flex h-6 w-12 cursor-pointer rounded-full  transition-colors duration-200 ease-in-out focus:outline-none ${
        enabled ? "bg-[#0D468A]" : "bg-gray-500"
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block size-4 mt-1 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out ${
          enabled ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </Switch>
  );
}
