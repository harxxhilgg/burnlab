import { Button, ContextMenu, Host } from '@expo/ui/swift-ui';

export default function NestedContextMenuExample() {
  return (
    <Host matchContents>
      <ContextMenu>
        <ContextMenu.Items>
          <Button label="Action" onPress={() => console.log('Action')} />
          <ContextMenu>
            <ContextMenu.Items>
              <Button label="Sub Action 1" onPress={() => console.log('Sub 1')} />
              <Button label="Sub Action 2" onPress={() => console.log('Sub 2')} />
            </ContextMenu.Items>
            <ContextMenu.Trigger>
              <Button label="More Options" />
            </ContextMenu.Trigger>
          </ContextMenu>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button label="Long press me (Nested Context Menu)" />
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
