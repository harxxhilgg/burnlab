import { ThemedText } from "@/components/themed-text";
import { BottomSheet, Button, Host, VStack } from "@expo/ui/swift-ui";
import { useState } from "react";

export default function BottomSheetFitsContent() {
  const [isPresented, setIsPresented] = useState<boolean>(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(!isPresented)} />

        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented} fitToContents>
          <VStack>
            <ThemedText>This sheet automatically sizes to fit its content.</ThemedText>
            <Button label="Close" role="destructive" onPress={() => setIsPresented(false)} />
          </VStack>
        </BottomSheet>
      </VStack>
    </Host>
  );
};