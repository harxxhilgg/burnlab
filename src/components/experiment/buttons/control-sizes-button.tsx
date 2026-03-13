import { Button, Host, VStack } from "@expo/ui/swift-ui";
import { buttonStyle, controlSize } from "@expo/ui/swift-ui/modifiers";

export default function ControlSizes() {
  return (
    <Host matchContents>
      <VStack spacing={8}>
        <Button label="Mini" modifiers={[controlSize('mini'), buttonStyle('bordered')]} />
        <Button label="Small" modifiers={[controlSize('small'), buttonStyle('bordered')]} />
        <Button label="Regular" modifiers={[controlSize('regular'), buttonStyle('bordered')]} />
        <Button label="Large" modifiers={[controlSize('large'), buttonStyle('bordered')]} />
        <Button label="Extra Large" modifiers={[controlSize('extraLarge'), buttonStyle('bordered')]} />
      </VStack>
    </Host>
  );
};