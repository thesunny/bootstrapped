import {
  GetProps,
  Props,
  getHeadingTag,
  HeadingTagProps,
  unprefix,
  VARIANT_LIST,
  UTILS_MAP,
  $,
} from "../utils"

const headingProps = GetProps("h1", UTILS_MAP)

export const CreateHeading = (Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  return function Heading(props: Props<typeof headingProps>) {
    return <Tag {...headingProps(props)} />
  }
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
}: Props<typeof headingProps> & HeadingTagProps) => {
  const TagName = getHeadingTag({ h1, h2, h3, h4, h5, h6 })
  return <TagName {...headingProps(props)} />
}

export const H1 = CreateHeading("h1")
export const H2 = CreateHeading("h2")
export const H3 = CreateHeading("h3")
export const H4 = CreateHeading("h4")
export const H5 = CreateHeading("h5")
export const H6 = CreateHeading("h6")
