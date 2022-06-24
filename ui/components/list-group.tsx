import { $, GetProps, Props, unprefix, UTILS_MAP, VARIANT_LIST } from "../utils"

const listGroupProps = GetProps("ul", {
  default: "list-group",
  flush: "list-group-flush",
  numbered: "list-group-numbered",
  ...UTILS_MAP,
})

const ITEM_MAP = {
  active: "active",
  disabled: "disabled",
  flexCenter: "d-flex justify-content-between align-items-center",
  flexStart: "d-flex justify-content-between align-items-start",
  ...unprefix("list-group-item", VARIANT_LIST),
}

const itemProps = GetProps("li", {
  default: "list-group-item",
  ...ITEM_MAP,
})

const linkProps = GetProps("a", {
  default: "list-group-item list-group-item-action",
  ...ITEM_MAP,
})

const buttonProps = GetProps("button", {
  default: "list-group-item list-group-item-action",
  ...ITEM_MAP,
})

function _ListGroup(props: Props<typeof listGroupProps>) {
  return <ul {...listGroupProps(props)} />
}

const Item = (props: Props<typeof itemProps>) => <li {...itemProps(props)} />
const Link = (props: Props<typeof linkProps>) => <a {...linkProps(props)} />
const Button = (props: Props<typeof buttonProps>) => (
  <button {...buttonProps(props)} />
)

export const ListGroup = Object.assign(_ListGroup, { Item, Link, Button })
