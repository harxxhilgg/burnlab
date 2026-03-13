import { Button, Host } from "@expo/ui/swift-ui";
import { tint } from "@expo/ui/swift-ui/modifiers";

export default function TintedButton() {
  return (
    <Host matchContents>
      <Button
        label="Costom Color"
        modifiers={[tint("#FF6347")]}
      />
    </Host>
  );
};