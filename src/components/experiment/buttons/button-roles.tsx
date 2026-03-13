import { Button, Host, VStack } from "@expo/ui/swift-ui";

export default function ButtonRoles() {
  return (
    <Host matchContents>
      <VStack spacing={8}>
        <Button label="Default" role="default" />
        <Button label="Cancel" role="cancel" />
        <Button label="Delete" role="destructive" />
      </VStack>
    </Host>
  );
};