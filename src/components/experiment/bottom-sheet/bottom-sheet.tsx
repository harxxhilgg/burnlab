import { ThemedText } from "@/components/themed-text";
import { BottomSheet, Button, Group, Host, VStack } from "@expo/ui/swift-ui";
import { presentationDetents } from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";
import { View } from "react-native";

export default function BasicBottomSheetExample() {
  const [isPresented, setIsPresented] = useState<boolean>(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(!isPresented)} />

        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Group
            modifiers={[
              presentationDetents(['medium', { fraction: 0.3 }, { height: 200 }]),
            ]}>
            <View style={{ padding: 30 }}>
              <ThemedText type="subtitle">Hello, World!</ThemedText>
            </View>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
};