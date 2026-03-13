import { Button, ConfirmationDialog, Host, Text } from '@expo/ui/swift-ui';
import { useState } from 'react';

export default function DestructiveConfirmationDialogExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host matchContents>
      <ConfirmationDialog
        title="Delete Item?"
        isPresented={isPresented}
        onIsPresentedChange={setIsPresented}
        titleVisibility="visible"
      >
        <ConfirmationDialog.Trigger>
          <Button label="Delete" role="destructive" onPress={() => setIsPresented(true)} />
        </ConfirmationDialog.Trigger>
        <ConfirmationDialog.Actions>
          <Button
            label="Delete"
            role="destructive"
            onPress={() => {
              console.log('Deleted');
              setIsPresented(false);
            }}
          />
          <Button label="Cancel" role="cancel" />
        </ConfirmationDialog.Actions>
        <ConfirmationDialog.Message>
          <Text>This action cannot be undone.</Text>
        </ConfirmationDialog.Message>
      </ConfirmationDialog>
    </Host>
  );
}
