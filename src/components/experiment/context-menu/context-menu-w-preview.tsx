import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button, ContextMenu, Host } from '@expo/ui/swift-ui';

export default function ContextMenuWithPreviewExample() {
  return (
    <Host matchContents>
      <ContextMenu>
        <ContextMenu.Items>
          <Button label="Edit" onPress={() => console.log('Edit')} />
          <Button label="Delete" role="destructive" onPress={() => console.log('Delete')} />
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button label="Long press me (Preview Contents)" />
        </ContextMenu.Trigger>
        <ContextMenu.Preview>
          <ThemedView type="backgroundElement" style={{ width: 200, height: 100, padding: 16 }}>
            <ThemedText>Preview Content</ThemedText>
          </ThemedView>
        </ContextMenu.Preview>
      </ContextMenu>
    </Host>
  );
}
