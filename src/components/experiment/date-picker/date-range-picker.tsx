import { DatePicker, Host } from '@expo/ui/swift-ui';
import { useState } from 'react';

export default function DateRangePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents>
      <DatePicker
        title="Select a date"
        selection={selectedDate}
        displayedComponents={['date']}
        range={{
          start: new Date(2026, 1, 14),
          end: new Date(2026, 10, 17),
        }}
        onDateChange={date => {
          setSelectedDate(date);
        }}
      />
    </Host>
  );
}
