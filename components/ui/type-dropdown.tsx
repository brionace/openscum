import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface Option {
  id: string;
  name: string;
}

interface TypeDropdownProps {
  value: Option | Option[] | null;
  onChange: (val: Option | Option[] | null) => void;
  options: Option[];
  onSearch: (q: string) => void;
  placeholder?: string;
  multi?: boolean;
  label?: string;
  id?: string;
}

export const TypeDropdown = React.forwardRef<
  HTMLInputElement,
  TypeDropdownProps
>(
  (
    {
      value,
      onChange,
      options,
      onSearch,
      placeholder = "Type to search...",
      multi = false,
      label,
      id,
      ...props
    },
    ref
  ) => {
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlighted, setHighlighted] = useState(-1);
    const rootRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Click outside to close
    useEffect(() => {
      if (!showDropdown) return;
      function handleClick(e: MouseEvent) {
        if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
          setShowDropdown(false);
        }
      }
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, [showDropdown]);

    // Scroll highlighted option into view
    useEffect(() => {
      if (highlighted >= 0 && optionRefs.current[highlighted]) {
        optionRefs.current[highlighted]?.scrollIntoView?.({ block: "nearest" });
      }
    }, [highlighted]);

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!options.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlighted((prev) => (prev < options.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlighted((prev) => (prev > 0 ? prev - 1 : options.length - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlighted >= 0 && highlighted < options.length) {
          selectOption(options[highlighted]);
        } else if (options.length === 1) {
          selectOption(options[0]);
        }
      }
    };

    const selectOption = (option: Option) => {
      if (multi) {
        const arr = Array.isArray(value) ? value : [];
        if (!arr.some((t) => t.id === option.id)) {
          onChange([...arr, option]);
        }
        setSearch("");
        setShowDropdown(false);
      } else {
        onChange(option);
        setSearch("");
        setShowDropdown(false);
      }
    };

    const removeOption = (id: string) => {
      if (multi && Array.isArray(value)) {
        onChange(value.filter((t) => t.id !== id));
      } else {
        onChange(null);
      }
    };

    return (
      <div className="relative" ref={rootRef}>
        {label && <label className="block mb-1 font-medium">{label}</label>}
        {multi && Array.isArray(value) && value.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {value.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center gap-1 bg-blue-100 text-blue-900 rounded-full px-3 py-1"
              >
                {tag.name}
                <button
                  type="button"
                  aria-label="Remove"
                  className="ml-1 text-blue-700 hover:text-red-600 focus:outline-none"
                  onClick={() => removeOption(tag.id)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        {!multi && value && (
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-3 py-1 mb-2">
            <span>{(value as Option).name}</span>
            <button
              type="button"
              aria-label="Remove"
              className="ml-1 text-blue-700 hover:text-red-600 focus:outline-none"
              onClick={() => removeOption((value as Option).id)}
            >
              ×
            </button>
          </div>
        )}
        {((!multi && !value) || multi) && (
          <Input
            ref={ref}
            id={id}
            placeholder={placeholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
              setHighlighted(-1);
              onSearch(e.target.value);
            }}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            className="mb-2"
            autoComplete="off"
            {...props}
          />
        )}
        {showDropdown && search.length > 0 && (
          <div className="border rounded p-2 max-h-40 overflow-y-auto bg-white z-10 absolute w-full">
            {options.length > 0 ? (
              options.map((option, idx) => (
                <div
                  key={option.id}
                  ref={(el) => (optionRefs.current[idx] = el)}
                  className={`cursor-pointer px-2 py-1 rounded ${
                    highlighted === idx
                      ? "bg-blue-200"
                      : multi &&
                        Array.isArray(value) &&
                        value.some((t) => t.id === option.id)
                      ? "bg-blue-100"
                      : !multi && value && (value as Option).id === option.id
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => setHighlighted(idx)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    selectOption(option);
                  }}
                >
                  {option.name}
                </div>
              ))
            ) : (
              <div className="text-gray-400 px-2 py-1">No results</div>
            )}
          </div>
        )}
      </div>
    );
  }
);

TypeDropdown.displayName = "TypeDropdown";
