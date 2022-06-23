import { GetProps, Props, unprefix, UTILS_MAP, VARIANT_LIST } from "../utils"

const cardProps = GetProps("div", {
  default: "card",
  ...UTILS_MAP,
})

function _Card(props: Props<typeof cardProps>) {
  return <div {...cardProps(props)} />
}

const bodyProps = GetProps("div", {
  default: "card-body",
  ...UTILS_MAP,
})

function Body(props: Props<typeof bodyProps>) {
  return <div {...bodyProps(props)} />
}

const titleProps = GetProps("h5", { default: "card-title", ...UTILS_MAP })

function Title(props: Props<typeof titleProps>) {
  return <h5 {...titleProps(props)} />
}

const subtitleProps = GetProps("h6", { default: "card-subtitle", ...UTILS_MAP })

function Subtitle(props: Props<typeof subtitleProps>) {
  return <h6 {...subtitleProps(props)} />
}

const textProps = GetProps("p", { default: "card-text", ...UTILS_MAP })

function Text(props: Props<typeof textProps>) {
  return <p {...textProps(props)} />
}

export const Card = Object.assign(_Card, { Body, Title, Subtitle, Text })
