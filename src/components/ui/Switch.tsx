import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function SwitchComponent() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`group relative flex h-6 w-12 cursor-pointer rounded-full   transition-colors duration-200 ease-in-out focus:outline-none ${
        enabled
          ? "bg-[var(--bg-primary)]"
          : "bg-transparent border-1 border-[#ABA9A9]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block size-4 mt-1 rounded-full  ring-0 shadow-lg transition duration-200 ease-in-out ${
          enabled
            ? "translate-x-7 bg-white"
            : "translate-x-0 bg-[var(--bg-primary)] ml-1"
        }`}
      />
    </Switch>
  );
}
