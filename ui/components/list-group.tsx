import { GetProps, Props, unprefix, UTILS_MAP, VARIANT_LIST } from "../utils"

const listGroupProps = GetProps("ul", {
  default: "list-group",
  flush: "list-group-flush",
  ...UTILS_MAP,
})

const itemProps = GetProps("li", {
  default: "list-group-item",
})

const linkProps = GetProps("a", {
  default: "list-group-item",
})

function _ListGroup(props: Props<typeof listGroupProps>) {
  return <ul {...listGroupProps(props)} />
}

const Item = (props: Props<typeof itemProps>) => <li {...itemProps(props)} />
const Link = (props: Props<typeof linkProps>) => <a {...linkProps(props)} />

export const ListGroup = Object.assign(_ListGroup, { Item, Link })
