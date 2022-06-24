import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP } from "../utils"

const badgeProps = GetProps("span", {
  ...UTILS_MAP,
})

const itemProps = GetProps("li", {
  default: "breadcrumb-item",
  active: "active",
  ...UTILS_MAP,
})

const _Breadcrumb = ({ children, ...props }: Props<typeof badgeProps>) => (
  <nav {...badgeProps(props)} aria-label="breadcrumb">
    <ol className="breadcrumb">{children}</ol>
  </nav>
)

const Item = (props: Props<typeof itemProps>) => <li {...itemProps(props)} />

export const Breadcrumb = Object.assign(_Breadcrumb, {
  Item,
})
