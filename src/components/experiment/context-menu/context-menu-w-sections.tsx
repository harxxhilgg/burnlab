import { Button, ContextMenu, Divider, Host, Section } from '@expo/ui/swift-ui';

export default function ContextMenuWithSectionsExample() {
  return (
    <Host matchContents>
      <ContextMenu>
        <ContextMenu.Items>
          <Section title="Actions">
            <Button label="Edit" onPress={() => console.log('Edit')} />
            <Button label="Duplicate" onPress={() => console.log('Duplicate')} />
          </Section>
          <Divider />
          <Button label="Delete" role="destructive" onPress={() => console.log('Delete')} />
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button label="Long press me (Sections)" />
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
