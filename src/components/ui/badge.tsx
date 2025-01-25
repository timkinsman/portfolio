import { theme } from "@nayhoo/ui";

type BadgeProps = {
  label: string;
};

// TODO: port over to nayhoo/ui
export const Badge = ({ label }: BadgeProps) => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.violetA.violetA3,
        borderRadius: theme.radii.full,
        color: theme.semanticColors.primary,
        whiteSpace: "nowrap",

        height: theme.sizes[4],
        paddingLeft: theme.space[1],
        paddingRight: theme.space[1],
        fontSize: theme.fontSizes[1],
      }}
    >
      {label}
    </div>
  );
};
