import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP } from "../utils"

const alertProps = GetProps("div", {
  default: "alert",
  ...unprefix("alert", VARIANT_LIST),
  ...UTILS_MAP,
})

export function Alert(props: Props<typeof alertProps>) {
  return <div {...alertProps(props)} />
}
