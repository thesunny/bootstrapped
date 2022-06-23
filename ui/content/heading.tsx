import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP, $ } from "../utils"

const headingProps = GetProps("h1", UTILS_MAP)

export const CreateHeading = (Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  return function Heading(props: Props<typeof headingProps>) {
    return <Tag {...headingProps(props)} />
  }
}

function getHeadingTag({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}: {
  h1?: true
  h2?: true
  h3?: true
  h4?: true
  h5?: true
  h6?: true
}) {
  if (h1) return "h1"
  if (h2) return "h2"
  if (h3) return "h3"
  if (h4) return "h4"
  if (h5) return "h5"
  if (h6) return "h6"
  throw new Error(`Need to provide a prop of h1, h2, h3, h4, h5, or h6`)
}

/**
 * Preferred calling method because we can change the heading level without
 * having to change the closing tag.
 */
export const Heading = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ...props
}: Props<typeof headingProps> & {
  h1?: true
  h2?: true
  h3?: true
  h4?: true
  h5?: true
  h6?: true
}) => {
  const TagName = getHeadingTag({ h1, h2, h3, h4, h5, h6 })
  return <TagName {...headingProps(props)} />
}

export const H1 = CreateHeading("h1")
export const H2 = CreateHeading("h2")
export const H3 = CreateHeading("h3")
export const H4 = CreateHeading("h4")
export const H5 = CreateHeading("h5")
export const H6 = CreateHeading("h6")
