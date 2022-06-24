import {
  GetProps,
  Props,
  unprefix,
  VARIANT_LIST,
  UTILS_MAP,
  $,
  mergeX_X,
} from "../utils"

const rowProps = GetProps("div", {
  default: "row",
  ...UTILS_MAP,
})

function Row(props: Props<typeof rowProps>) {
  return <div {...rowProps(props)} />
}

const colProps = GetProps("div", {
  default: "col",
  ...mergeX_X($("col"), $("1", "2", "3", "4", "5", "6")),
  ...UTILS_MAP,
})

function Col(props: Props<typeof colProps>) {
  return <div {...colProps(props)} />
}

export const Grid = { Row, Col }
