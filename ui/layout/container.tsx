import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP, $ } from "../utils"

const containerProps = GetProps("div", {
  default: "container",
  ...unprefix("container", $("sm", "md", "lg", "xl", "xxl", "fluid")),
  ...UTILS_MAP,
})

export function Container(props: Props<typeof containerProps>) {
  return <div {...containerProps(props)} />
}
