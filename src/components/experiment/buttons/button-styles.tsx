import { Button, Host, VStack } from "@expo/ui/swift-ui";
import { buttonStyle } from "@expo/ui/swift-ui/modifiers";

export default function ButtonStyles() {
  return (
    <Host matchContents>
      <VStack spacing={8}>
        <Button label="Bordered" modifiers={[buttonStyle('bordered')]} />
        <Button label="Bordered Prominent" modifiers={[buttonStyle('borderedProminent')]} />
        <Button label="Borderless" modifiers={[buttonStyle('borderless')]} />
        <Button label="Plain" modifiers={[buttonStyle('plain')]} />
      </VStack>
    </Host>
  );
};