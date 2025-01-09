import { MultipleSelectCheckBoxes } from "@/shared/ui";
import { Option } from "@/shared/lib/types/Option";

export const MultipleSelectTechnology = () => {
  const options: Option[] = [
    { id: 1, name: "CSharp", value: "CSharp" },
    { id: 2, name: "React", value: "React" },
    { id: 3, name: "Java", value: "Java" },
    { id: 4, name: "PHP", value: "PHP" },
    { id: 5, name: "Figma", value: "Figma" },
    { id: 6, name: "Word", value: "Word" },
  ];

  return <MultipleSelectCheckBoxes label="Стек технологий" options={options} />;
};
