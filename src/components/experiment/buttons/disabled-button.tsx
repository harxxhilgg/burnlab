import { Button, Host } from "@expo/ui/swift-ui";
import { disabled } from "@expo/ui/swift-ui/modifiers";

export default function DisabledButton() {
  return (
    <Host matchContents>
      <Button
        label="Disabled"
        modifiers={[disabled()]}
      />
    </Host>
  );
};