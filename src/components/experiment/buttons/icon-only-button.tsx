import { Button, Host } from "@expo/ui/swift-ui";
import { labelStyle } from "@expo/ui/swift-ui/modifiers";

export default function IconOnlyButton() {
  return (
    <Host matchContents>
      <Button
        label="Button w Image"
        role="default"
        systemImage="gear"
        modifiers={[labelStyle("iconOnly")]}
      />
    </Host>
  );
};