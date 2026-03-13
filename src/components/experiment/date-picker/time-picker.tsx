import { DatePicker, Host } from '@expo/ui/swift-ui';
import { useState } from 'react';

export default function TimePickerExample() {
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <Host matchContents>
      <DatePicker
        title="Select time"
        selection={selectedTime}
        displayedComponents={['hourAndMinute']}
        onDateChange={time => {
          setSelectedTime(time);
        }}
      />
    </Host>
  );
}
