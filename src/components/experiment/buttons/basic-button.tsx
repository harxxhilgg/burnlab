import { Button, Host } from '@expo/ui/swift-ui';

export default function BasicButton() {
  return (
    <Host matchContents>
      <Button
        label="Basic Button"
        role="default"
      />
    </Host>
  );
}
