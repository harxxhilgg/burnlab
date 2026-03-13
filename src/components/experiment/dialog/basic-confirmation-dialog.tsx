import { Button, ConfirmationDialog, Host } from "@expo/ui/swift-ui";
import { useState } from "react";

export default function BasicConfirmationDialog() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host matchContents>
      <ConfirmationDialog
        title="Are you sure?"
        isPresented={isPresented}
        onIsPresentedChange={setIsPresented}
        titleVisibility="visible"
      >
        <ConfirmationDialog.Trigger>
          <Button label="Show Dialog" onPress={() => setIsPresented(true)} />
        </ConfirmationDialog.Trigger>
        <ConfirmationDialog.Actions>
          <Button label="Confirm" onPress={() => setIsPresented(false)} />
          <Button label="Cancel" role="cancel" />
        </ConfirmationDialog.Actions>
      </ConfirmationDialog>
    </Host>
  );
};