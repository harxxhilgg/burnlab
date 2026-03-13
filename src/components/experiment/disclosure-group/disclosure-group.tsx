import { DisclosureGroup, Host, Text } from '@expo/ui/swift-ui';

export default function BasicDisclosureGroupExample() {
  return (
    <Host matchContents>
      <DisclosureGroup label="More Information">
        <Text>This content is revealed when the disclosure group is expanded.</Text>
      </DisclosureGroup>
    </Host>
  );
}
