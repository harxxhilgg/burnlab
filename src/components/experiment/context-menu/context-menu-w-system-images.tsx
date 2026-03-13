import { Button, ContextMenu, Host } from '@expo/ui/swift-ui';

export default function ContextMenuWithImagesExample() {
  return (
    <Host matchContents>
      <ContextMenu>
        <ContextMenu.Items>
          <Button
            label="Share"
            systemImage="square.and.arrow.up"
            onPress={() => console.log('Share')}
          />
          <Button label="Favorite" systemImage="heart" onPress={() => console.log('Favorite')} />
          <Button
            label="Delete"
            systemImage="trash"
            role="destructive"
            onPress={() => console.log('Delete')}
          />
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button label="Long press me (System Image)" />
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
