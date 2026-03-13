import { Button, Host } from "@expo/ui/swift-ui";

export default function ButtonWImage() {
  return (
    <Host matchContents>
      <Button
        label="Button with Image"
        role="default"
        systemImage="apple.intelligence"
      />
    </Host >
  );
};