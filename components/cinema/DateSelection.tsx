import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '@/hooks';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function buildCalendar(year: number, month: number): { day: number; currentMonth: boolean }[][] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const cells: { day: number; currentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: daysInPrev - i, currentMonth: false });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, currentMonth: true });
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) for (let d = 1; d <= remaining; d++) cells.push({ day: d, currentMonth: false });

  const rows: { day: number; currentMonth: boolean }[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  return rows;
}

export function DateSelection() {
  const { t, width, isTablet } = useResponsive();
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState({ day: today.getDate(), month: today.getMonth(), year: today.getFullYear() });

  const rows = buildCalendar(viewYear, viewMonth);
  const hPad = isTablet ? t(48, 32) : 32;
  const cellGap = t(11, 8);
  const availableWidth = width - hPad;
  const cellSize = (availableWidth - cellGap * 6) / 7;

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  const isSelected = (cell: { day: number; currentMonth: boolean }) =>
    cell.currentMonth && cell.day === selectedDate.day && viewMonth === selectedDate.month && viewYear === selectedDate.year;

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: t(24, 18),
        padding: t(24, 16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 3,
        gap: t(12, 10),
      }}
    >
      {/* Month nav */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: t(8, 6) }}>
        <TouchableOpacity
          onPress={prevMonth}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ width: t(40, 32), height: t(40, 32), alignItems: 'center', justifyContent: 'center', borderRadius: t(20, 16) }}
        >
          <Text style={{ fontSize: t(20, 16), color: '#1e0736' }}>‹</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: 'center', gap: t(8, 6) }}>
          <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: t(20, 15), color: '#1e0736' }}>
            {MONTHS[viewMonth]} {viewYear}
          </Text>
          <View style={{ height: 1, width: t(78, 60), backgroundColor: 'rgba(119,85,150,0.3)' }} />
        </View>

        <TouchableOpacity
          onPress={nextMonth}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ width: t(40, 32), height: t(40, 32), alignItems: 'center', justifyContent: 'center', borderRadius: t(20, 16) }}
        >
          <Text style={{ fontSize: t(20, 16), color: '#1e0736' }}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Weekday headers */}
      <View style={{ flexDirection: 'row', gap: cellGap, paddingVertical: t(4, 2) }}>
        {WEEKDAYS.map((day) => (
          <View key={day} style={{ width: cellSize, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 9), color: '#000000', letterSpacing: t(0.36, 0.28) }}>
              {day}
            </Text>
          </View>
        ))}
      </View>

      {/* Calendar rows */}
      <View style={{ gap: t(8, 6) }}>
        {rows.map((row, rowIdx) => (
          <View key={rowIdx} style={{ flexDirection: 'row', gap: cellGap }}>
            {row.map((cell, cellIdx) => {
              const selected = isSelected(cell);
              return (
                <TouchableOpacity
                  key={cellIdx}
                  activeOpacity={cell.currentMonth ? 0.8 : 1}
                  onPress={() => {
                    if (cell.currentMonth) setSelectedDate({ day: cell.day, month: viewMonth, year: viewYear });
                  }}
                  style={{
                    width: cellSize,
                    height: t(52, 40),
                    borderRadius: t(8, 6),
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: !cell.currentMonth ? 0.3 : 1,
                    backgroundColor: selected ? 'rgba(219,181,255,0.46)' : cell.currentMonth ? '#f9f5fe' : 'transparent',
                    borderWidth: selected ? 1 : 0,
                    borderColor: selected ? '#775596' : 'transparent',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Montserrat_500Medium',
                      fontSize: t(17, 13),
                      color: selected ? '#775596' : '#1e0736',
                    }}
                  >
                    {cell.day}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}
