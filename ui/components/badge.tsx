import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP } from "../utils"

const badgeProps = GetProps("span", {
  default: "badge",
  ...unprefix("bg", VARIANT_LIST),
  ...UTILS_MAP,
  roundedPill: "rounded-pill",
})

export const Badge = (props: Props<typeof badgeProps>) => (
  <div {...badgeProps(props)} />
)
