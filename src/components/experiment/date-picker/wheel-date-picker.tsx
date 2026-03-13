import { DatePicker, Host } from '@expo/ui/swift-ui';
import { datePickerStyle } from '@expo/ui/swift-ui/modifiers';
import { useState } from 'react';

export default function WheelDatePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents>
      <DatePicker
        modifiers={[datePickerStyle('wheel')]}
        title="Select a date"
        selection={selectedDate}
        displayedComponents={['date']}
        onDateChange={date => {
          setSelectedDate(date);
        }}
      />
    </Host>
  );
}
