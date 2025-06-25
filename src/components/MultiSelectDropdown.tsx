import { useState, useRef, useEffect } from "react";

interface MultiSelectDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  setSelected: (values: string[]) => void;
  allowCustomInput?: boolean;
}

export default function MultiSelectDropdown({
  label,
  options,
  selected,
  setSelected,
  allowCustomInput = false,
}: MultiSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mb-4" ref={dropdownRef}>
      <label className="block font-medium mb-1">{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-gray-300 rounded px-3 py-2 bg-white cursor-pointer"
      >
        {selected.length > 0 ? selected.join(", ") : `Select ${label}`}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-48 overflow-y-auto shadow">
          {options.map((option) => (
            <label key={option} className="flex items-center px-3 py-1 hover:bg-gray-100">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}

          {allowCustomInput && (
            <div className="px-3 py-2 border-t border-gray-200 bg-gray-50">
              <input
                type="text"
                placeholder="Other..."
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && customValue.trim() !== "") {
                    setSelected([...selected, customValue.trim()]);
                    setCustomValue("");
                  }
                }}
                className="w-full border px-2 py-1 text-sm rounded"
              />
              <p className="text-xs text-gray-500 mt-1">Press Enter to add custom language</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
