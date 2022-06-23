import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP, $ } from "../utils"

export * from "./heading"
export * from "./table"

const spanProps = GetProps("span", UTILS_MAP)

export const Span = (props: Props<typeof spanProps>) => (
  <span {...spanProps(props)} />
)
