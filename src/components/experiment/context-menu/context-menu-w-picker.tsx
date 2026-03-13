import { Button, ContextMenu, Host, Picker, Text } from '@expo/ui/swift-ui';
import { pickerStyle, tag } from '@expo/ui/swift-ui/modifiers';
import { useState } from 'react';

export default function ContextMenuWithPickerExample() {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);

  return (
    <Host matchContents>
      <ContextMenu>
        <ContextMenu.Items>
          <Button label="Action" onPress={() => console.log('Action')} />
          <Picker
            label="Size"
            modifiers={[pickerStyle('menu')]}
            selection={selectedIndex}
            onSelectionChange={setSelectedIndex}>
            {['Small', 'Medium', 'Large'].map((option, index) => (
              <Text key={index} modifiers={[tag(index)]}>
                {option}
              </Text>
            ))}
          </Picker>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button label="Long press me (Picker)" />
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
