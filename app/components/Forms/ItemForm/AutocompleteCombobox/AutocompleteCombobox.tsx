import { useState } from "react";
import {
  Combobox,
  ComboboxProps,
  InputBase,
  InputBaseProps,
  PolymorphicComponentProps,
  useCombobox,
} from "@mantine/core";

export function AutocompleteCombobox({
  options,
  value,
  setValue,
  customSearch,
  customSetSearch,
  inputProps,
  comboboxProps,
}: {
  options: string[] | undefined;
  value: string | undefined;
  setValue: (val: string | undefined) => void;
  customSearch?: string | undefined;
  customSetSearch?: (val: string) => void;
  inputProps?: PolymorphicComponentProps<"input", InputBaseProps>;
  comboboxProps?: ComboboxProps;
}) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  //   const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const shouldFilterOptions =
    options &&
    options.length > 0 &&
    options.every((item) => {
      if (customSearch) {
        return item.toLowerCase().trim() !== customSearch.toLowerCase().trim();
      }
      return item.toLowerCase().trim() !== search.toLowerCase().trim();
    });

  const filteredOptions = shouldFilterOptions
    ? options.filter((item) => {
        if (customSearch) {
          return item.toLowerCase().includes(customSearch.toLowerCase().trim());
        }
        return item.toLowerCase().includes(search.toLowerCase().trim());
      })
    : options;

  const comboOptions = filteredOptions?.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      {...comboboxProps}
      styles={{
        dropdown: {
          maxHeight: "200px",
          overflowY: "scroll",
        },
      }}
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        if (customSetSearch) {
          customSetSearch(val);
        } else {
          setSearch(val);
        }
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          {...inputProps}
          rightSection={<Combobox.Chevron />}
          value={value ? value : customSearch ? customSearch : search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            if (customSetSearch) {
              customSetSearch(event.currentTarget.value);
            } else {
              setSearch(event.currentTarget.value);
            }
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            if (customSetSearch) {
              customSetSearch(value || "");
            } else {
              setSearch(value || "");
            }
          }}
          placeholder="Search..."
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {comboOptions && comboOptions?.length > 0 ? (
            comboOptions
          ) : (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
