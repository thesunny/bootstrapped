import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP, $ } from "../utils"

export * from "./heading"
export * from "./table"

const pProps = GetProps("p", UTILS_MAP)
const spanProps = GetProps("span", UTILS_MAP)
const divProps = GetProps("div", UTILS_MAP)

export const P = (props: Props<typeof pProps>) => <p {...pProps(props)} />

export const Span = (props: Props<typeof spanProps>) => (
  <span {...spanProps(props)} />
)

export const Div = (props: Props<typeof divProps>) => (
  <div {...divProps(props)} />
)
