import { DatePicker, Host } from '@expo/ui/swift-ui';
import { useState } from 'react';

export default function DateTimePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents>
      <DatePicker
        title="Select date and time"
        selection={selectedDate}
        displayedComponents={['date', 'hourAndMinute']}
        onDateChange={date => {
          setSelectedDate(date);
        }}
      />
    </Host>
  );
}
