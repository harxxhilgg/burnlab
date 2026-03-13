import { Button, ControlGroup, Host, Menu } from '@expo/ui/swift-ui';

export default function BasicControlGroupExample() {
  return (
    <Host matchContents>
      <Menu label="Options" systemImage="ellipsis.circle">
        <ControlGroup>
          <Button systemImage="plus" label="Add" onPress={() => console.log('Add')} />
          <Button systemImage="star" label="Favorite" onPress={() => console.log('Favorite')} />
          <Button
            systemImage="square.and.arrow.up"
            label="Share"
            onPress={() => console.log('Share')}
          />
        </ControlGroup>
        <Button label="Other Action" onPress={() => console.log('Other')} />
      </Menu>
    </Host>
  );
}
