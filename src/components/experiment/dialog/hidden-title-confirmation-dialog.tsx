import { Button, ConfirmationDialog, Host, Text } from '@expo/ui/swift-ui';
import { useState } from 'react';

export default function HiddenTitleConfirmationDialogExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host matchContents>
      <ConfirmationDialog
        title="Hidden Title"
        isPresented={isPresented}
        onIsPresentedChange={setIsPresented}
        titleVisibility="hidden"
      >
        <ConfirmationDialog.Trigger>
          <Button label="Hidden Title" onPress={() => setIsPresented(true)} />
        </ConfirmationDialog.Trigger>
        <ConfirmationDialog.Actions>
          <Button label="OK" onPress={() => setIsPresented(false)} />
          <Button label="Cancel" role="cancel" />
        </ConfirmationDialog.Actions>
        <ConfirmationDialog.Message>
          <Text>Only the message and actions are visible.</Text>
        </ConfirmationDialog.Message>
      </ConfirmationDialog>
    </Host>
  );
}
