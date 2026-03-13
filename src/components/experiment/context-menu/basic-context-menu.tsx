import { Button, ContextMenu, Host } from '@expo/ui/swift-ui';

export default function BasicContextMenuExample() {
  return (
    <Host matchContents>
      <ContextMenu>
        <ContextMenu.Items>
          <Button label="Edit" onPress={() => console.log('Edit')} />
          <Button label="Delete" role="destructive" onPress={() => console.log('Delete')} />
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button label="Long press me" />
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
