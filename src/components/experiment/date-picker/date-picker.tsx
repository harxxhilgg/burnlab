import { DatePicker, Host } from '@expo/ui/swift-ui';
import { useState } from 'react';

export default function DatePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents>
      <DatePicker
        title="Select date"
        selection={selectedDate}
        displayedComponents={['date']}
        onDateChange={date => {
          setSelectedDate(date);
        }}
      />
    </Host>
  );
}
