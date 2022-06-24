import {
  getHeadingTag,
  GetProps,
  HeadingTagProps,
  Props,
  unprefix,
  UTILS_MAP,
  VARIANT_LIST,
} from "../utils"

const cardProps = GetProps("div", {
  default: "card",
  ...UTILS_MAP,
})

const bodyProps = GetProps("div", {
  default: "card-body",
  ...UTILS_MAP,
})

const headerProps = GetProps("div", { default: "card-header", ...UTILS_MAP })
const footerProps = GetProps("div", { default: "card-footer", ...UTILS_MAP })

const titleProps = GetProps("h5", { default: "card-title", ...UTILS_MAP })
const subtitleProps = GetProps("h6", { default: "card-subtitle", ...UTILS_MAP })
const textProps = GetProps("p", { default: "card-text", ...UTILS_MAP })

function _Card(props: Props<typeof cardProps>) {
  return <div {...cardProps(props)} />
}

const Body = (props: Props<typeof bodyProps>) => <div {...bodyProps(props)} />
const Header = (props: Props<typeof headerProps>) => (
  <div {...headerProps(props)} />
)
const Footer = (props: Props<typeof footerProps>) => (
  <div {...footerProps(props)} />
)

const Title = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ...props
}: Props<typeof titleProps> & HeadingTagProps) => {
  const Tag = getHeadingTag({ h1, h2, h3, h4, h5, h6 }, "h5")
  return <Tag {...titleProps(props)} />
}

const Subtitle = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ...props
}: Props<typeof subtitleProps> & HeadingTagProps) => {
  const Tag = getHeadingTag({ h1, h2, h3, h4, h5, h6 }, "h6")
  return <Tag {...subtitleProps(props)} />
}

const Text = (props: Props<typeof textProps>) => <p {...textProps(props)} />

export const Card = Object.assign(_Card, {
  Body,
  Header,
  Footer,
  Title,
  Subtitle,
  Text,
})
