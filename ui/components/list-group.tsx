import { GetProps, Props, unprefix, UTILS_MAP, VARIANT_LIST } from "../utils"

const listGroupProps = GetProps("ul", {
  default: "list-group",
  flush: "list-group-flush",
  ...UTILS_MAP,
})

function _ListGroup(props: Props<typeof listGroupProps>) {
  return <ul {...listGroupProps(props)} />
}

const itemProps = GetProps("li", {
  default: "list-group-item",
})

function Item(props: Props<typeof itemProps>) {
  return <li {...itemProps(props)} />
}

export const ListGroup = Object.assign(_ListGroup, { Item })
