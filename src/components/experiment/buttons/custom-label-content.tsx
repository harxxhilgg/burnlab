import { ThemedText } from "@/components/themed-text";
import { Button, Host, Image, VStack } from "@expo/ui/swift-ui";

export default function CustomLabelContentButton() {
  return (
    <Host matchContents>
      <Button
        onPress={() => console.log("CustomLabelContentButton Pressed!")}>
        <VStack spacing={4}>
          <Image systemName="pi" />
          <ThemedText>Folder</ThemedText>
        </VStack>
      </Button>
    </Host>
  );
};