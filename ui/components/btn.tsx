import { $, GetProps, Props, unprefix, UTILS_MAP, VARIANT_LIST } from "../utils"

const BUTTON_MAP = unprefix("btn", $("sm", "lg", ...VARIANT_LIST))

const btnProps = GetProps("button", {
  default: "btn",
  ...BUTTON_MAP,
  ...UTILS_MAP,
})

export function Btn(props: Props<typeof btnProps>) {
  return <button type="button" {...btnProps(props)} />
}

const btnLinkProps = GetProps("a", {
  default: "btn",
  ...BUTTON_MAP,
  ...UTILS_MAP,
})

export function BtnLink(props: Props<typeof btnLinkProps>) {
  return <a {...btnLinkProps(props)} />
}
