import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function buildCalendar(
  year: number,
  month: number,
): { day: number; currentMonth: boolean }[][] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const cells: { day: number; currentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, currentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, currentMonth: true });
  }
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      cells.push({ day: d, currentMonth: false });
    }
  }

  const rows: { day: number; currentMonth: boolean }[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
}

export const DateSelectionSection = (): JSX.Element => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<{
    day: number;
    month: number;
    year: number;
  }>({
    day: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  const rows = buildCalendar(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const isSelected = (cell: { day: number; currentMonth: boolean }) =>
    cell.currentMonth &&
    cell.day === selectedDate.day &&
    viewMonth === selectedDate.month &&
    viewYear === selectedDate.year;

  return (
    <section className="relative w-full">
      <Card className="w-full rounded-3xl border-0 bg-white shadow-drop-shadow">
        <CardContent className="flex flex-col gap-3 p-4 sm:p-6">
          <header className="grid grid-cols-[40px_1fr_40px] items-center py-2 sm:py-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={prevMonth}
              className="h-10 w-10 rounded-full p-0 text-x-1e-0736 hover:bg-[#f9f5fe]"
              aria-label="Previous month"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="[font-family:'Lato',Helvetica] text-center text-xl font-semibold leading-[normal] tracking-[0] text-x-1e-0736">
                {MONTHS[viewMonth]} {viewYear}
              </h2>
              <div className="h-px w-[78px] bg-[#775596]/30" />
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={nextMonth}
              className="h-10 w-10 justify-self-end rounded-full p-0 text-x-1e-0736 hover:bg-[#f9f5fe]"
              aria-label="Next month"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </header>

          <div className="grid grid-cols-7 gap-[11px] px-0 py-1 sm:py-2">
            {weekdays.map((weekday) => (
              <div
                key={weekday}
                className="flex items-center justify-center py-0.5"
              >
                <span className="[font-family:'Lato',Helvetica] text-center text-xs font-medium leading-3 tracking-[0.36px] text-black whitespace-nowrap">
                  {weekday}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {rows.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="grid grid-cols-7 gap-2.5">
                {row.map((cell, cellIndex) => {
                  const selected = isSelected(cell);
                  return (
                    <Button
                      key={`cell-${rowIndex}-${cellIndex}`}
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        if (cell.currentMonth) {
                          setSelectedDate({
                            day: cell.day,
                            month: viewMonth,
                            year: viewYear,
                          });
                        }
                      }}
                      className={`h-[52px] rounded-lg p-2.5 sm:h-[72px] transition-all ${
                        !cell.currentMonth
                          ? "cursor-default opacity-30 bg-transparent hover:bg-transparent"
                          : selected
                            ? "border border-[#775596] bg-[#dbb5ff75] text-[#775596] hover:bg-[#dbb5ff90]"
                            : "border border-transparent bg-[#f9f5fe] text-black hover:bg-[#ede5f8]"
                      }`}
                    >
                      <span className="[font-family:'Lato',Helvetica] text-center text-lg font-medium leading-[22px] tracking-[0] whitespace-nowrap">
                        {cell.day}
                      </span>
                    </Button>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
