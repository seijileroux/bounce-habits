import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, IconButton } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { defaultColor } from "@/colors";

export default function HabitsCompleted() {
  return (
    <div className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Habits Completed</span>
      <div className="mt-4 opacity-50">
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

function HabitCard() {
  return (
    // Element for the whole habit card
    <div className="flex p-3 items-center justify-between">
      {/* Rounded checkbox */}
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          color: defaultColor.default,
          "&.Mui-checked": {
            color: defaultColor.default,
          },
        }}
      />

      <div className="flex p-3 justify-between gap-2 w-full py-4 rounded-md bg-slate-50 ">
        <div className="w-full">
          {/* Icon and name of a habit */}
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCode}
                height={20}
                width={20}
                className="p-3 rounded-full w-4 h-4 bg-"
              />
              <span>Coding...</span>
            </div>
          </div>
          {/* Divs for areas */}
          <div className="flex gap-2 mt-2">
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-[12px] rounded-md px-2"
            >
              <span className="text-white">Area1</span>
            </div>
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-[12px] rounded-md px-2"
            >
              <span className="text-white">Area1</span>
            </div>
          </div>
        </div>
        {/* Div for 3 dots button */}
        <div className="w-10 flex items-center justify-center">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
