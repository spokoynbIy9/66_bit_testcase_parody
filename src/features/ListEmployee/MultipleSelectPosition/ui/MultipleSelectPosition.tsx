import { Option } from "@/shared/lib/types/Option";
import { MultipleSelectCheckBoxes } from "@/shared/ui";

export const MultipleSelectPosition = () => {
  const options: Option[] = [
    { id: 1, name: "Фронтенд", value: "Frontend" },
    { id: 2, name: "Бэкенд", value: "Backend" },
    { id: 3, name: "Дизайн", value: "Designer" },
    { id: 4, name: "Менеджер", value: "Manager" },
    { id: 5, name: "Аналитик", value: "Analyst" },
  ];

  return <MultipleSelectCheckBoxes label="Должность" options={options} />;
};
