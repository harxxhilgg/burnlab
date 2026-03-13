import BasicButton from "@/components/experiment/buttons/basic-button";
import ButtonRoles from "@/components/experiment/buttons/button-roles";
import ButtonStyles from "@/components/experiment/buttons/button-styles";
import ButtonWImage from "@/components/experiment/buttons/button-w-image";
import ControlSizes from "@/components/experiment/buttons/control-sizes-button";
import CustomLabelContentButton from "@/components/experiment/buttons/custom-label-content";
import DisabledButton from "@/components/experiment/buttons/disabled-button";
import IconOnlyButton from "@/components/experiment/buttons/icon-only-button";
import TintedButton from "@/components/experiment/buttons/tinted-button";
import BasicContextMenuExample from "@/components/experiment/context-menu/basic-context-menu";
import ContextMenuWithPickerExample from "@/components/experiment/context-menu/context-menu-w-picker";
import ContextMenuWithPreviewExample from "@/components/experiment/context-menu/context-menu-w-preview";
import ContextMenuWithSectionsExample from "@/components/experiment/context-menu/context-menu-w-sections";
import ContextMenuWithImagesExample from "@/components/experiment/context-menu/context-menu-w-system-images";
import NestedContextMenuExample from "@/components/experiment/context-menu/nested-context-menu";
import BasicControlGroupExample from "@/components/experiment/control-group/basic-control-group-example";
import DatePickerExample from "@/components/experiment/date-picker/date-picker";
import DateRangePickerExample from "@/components/experiment/date-picker/date-range-picker";
import DateTimePickerExample from "@/components/experiment/date-picker/date-time-picker";
import GraphicalDatePickerExample from "@/components/experiment/date-picker/graphical-date-picker";
import TimePickerExample from "@/components/experiment/date-picker/time-picker";
import WheelDatePickerExample from "@/components/experiment/date-picker/wheel-date-picker";
import BasicConfirmationDialog from "@/components/experiment/dialog/basic-confirmation-dialog";
import DestructiveConfirmationDialogExample from "@/components/experiment/dialog/destructive-action-confirmation-dialog";
import HiddenTitleConfirmationDialogExample from "@/components/experiment/dialog/hidden-title-confirmation-dialog";
import MultiActionConfirmationDialogExample from "@/components/experiment/dialog/multi-action-confirmation-dialog";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Host, Slider } from "@expo/ui/swift-ui";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ExperimentScreen() {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}
    >
      <ThemedView style={styles.safeArea}>
        <ThemedText type="subtitle" style={styles.title}>
          Experiment
        </ThemedText>

        <ThemedView
          style={[
            styles.buttonContainer,
            {
              backgroundColor: theme.backgroundElement
            }
          ]}
        >
          <ThemedText type="semiboldtitle" style={{ color: theme.textSecondary }}>
            Buttons
          </ThemedText>

          <BasicButton />
          <ButtonWImage />
          <IconOnlyButton />
          <ButtonStyles />
          <ControlSizes />
          <ButtonRoles />
          <TintedButton />
          <DisabledButton />
          <CustomLabelContentButton />
        </ThemedView>

        <ThemedView
          style={[
            styles.buttonContainer,
            {
              backgroundColor: theme.backgroundElement
            }
          ]}
        >
          <ThemedText type="semiboldtitle" style={{ color: theme.textSecondary }}>
            Confirmation Dialog
          </ThemedText>

          <BasicConfirmationDialog />
          <DestructiveConfirmationDialogExample />
          <MultiActionConfirmationDialogExample />
          <HiddenTitleConfirmationDialogExample />
        </ThemedView>

        <ThemedView
          style={[
            styles.buttonContainer,
            {
              backgroundColor: theme.backgroundElement
            }
          ]}
        >
          <ThemedText type="semiboldtitle" style={{ color: theme.textSecondary }}>
            Context Menu
          </ThemedText>

          <BasicContextMenuExample />
          <ContextMenuWithImagesExample />
          <ContextMenuWithPreviewExample />
          <ContextMenuWithPickerExample />
          <ContextMenuWithSectionsExample />
          <NestedContextMenuExample />
        </ThemedView>

        <ThemedView
          style={[
            styles.buttonContainer,
            {
              backgroundColor: theme.backgroundElement
            }
          ]}
        >
          <ThemedText type="semiboldtitle" style={{ color: theme.textSecondary }}>
            Control Group
          </ThemedText>

          <BasicControlGroupExample />
        </ThemedView>

        <ThemedView
          style={[
            styles.buttonContainer,
            {
              backgroundColor: theme.backgroundElement
            }
          ]}
        >
          <ThemedText type="semiboldtitle" style={{ color: theme.textSecondary }}>
            Date Picker
          </ThemedText>

          <DatePickerExample />
          <TimePickerExample />
          <DateTimePickerExample />
          <DateRangePickerExample />

          <ThemedText type="default" style={{ marginTop: 20 }}>Wheel Date Picker</ThemedText>
          <WheelDatePickerExample />

          <ThemedText type="default" style={{ marginTop: 10 }}>Graphical Date Picker</ThemedText>
          <GraphicalDatePickerExample />
        </ThemedView>

        <ThemedView
          style={[
            styles.buttonContainer,
            {
              backgroundColor: theme.backgroundElement
            }
          ]}
        >
          <ThemedText type="semiboldtitle" style={{ color: theme.textSecondary }}>
            Slider
          </ThemedText>

          {/* Basic Slider */}
          <Host matchContents>
            <Slider step={0.2} />
          </Host>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    gap: Spacing.three
  },
  title: {
    textAlign: "left",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 370,
    borderRadius: 24,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.three,
    gap: Spacing.two,
  },
});