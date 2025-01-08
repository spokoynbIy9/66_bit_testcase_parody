import { MultipleSelectCheckBoxes } from "@/shared/ui";
import { Option } from "@/shared/lib/types/Option";

export const MultipleSelectGender = () => {
  const options: Option[] = [
    { id: 1, name: "Мужчина", value: "Male" },
    { id: 2, name: "Женщина", value: "Female " },
  ];

  return <MultipleSelectCheckBoxes label="Пол" options={options} />;
};
