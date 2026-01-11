import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { defaultColor } from "@/colors";

export default function Calendar() {
  return (
    <div className="flex mx-4 flex-col gap-6 justify-center items-center mt-10 bg-slate-50 rounded-xl p-5 pt-7">
      <DateCalendar
        sx={{
          "&.MuiPickerDay-root": {
            "&.Mui-selected": {
              backgroundColor: defaultColor.default,
            },
          },
          "&.MuiPickerYears-yearButton.Mui-selected": {
            backgroundColor: defaultColor.default,
          },
        }}
      />
    </div>
  );
}
