import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC, useState } from "react";
import { Option } from "@/shared/lib/types/Option";

type MultipleSelectCheckBoxesProps = {
  label: string;
  options: Option[];
};

export const MultipleSelectCheckBoxes: FC<MultipleSelectCheckBoxesProps> = ({
  label,
  options,
}) => {
  const [personName, setPersonName] = useState<Option[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      typeof value === "string"
        ? value
            .split(",")
            .map((val) => ({ id: parseInt(val), name: val, value: val }))
        : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) =>
            selected.map((item) => item.name).join(", ")
          }
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option}>
              <Checkbox
                checked={personName.some((item) => item.id === option.id)}
              />
              <ListItemText primary={option.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
