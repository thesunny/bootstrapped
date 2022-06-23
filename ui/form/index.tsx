import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP, $ } from "../utils"

const groupProps = GetProps("div", { default: "mb-4", ...UTILS_MAP })

const inputProps = GetProps("input", { default: "form-control", ...UTILS_MAP })

const textareaProps = GetProps("textarea", {
  default: "form-control",
  ...UTILS_MAP,
})

const labelProps = GetProps("label", {
  default: "form-label text-no-wrap",
  ...UTILS_MAP,
})

const captionProps = GetProps("div", {
  default: "mt-1 text-muted",
  ...UTILS_MAP,
})

const Group = (props: Props<typeof groupProps>) => (
  <div {...groupProps(props)} />
)

const Input = (props: Props<typeof inputProps>) => (
  <input type="text" {...inputProps(props)} />
)

const Textarea = (props: Props<typeof textareaProps>) => (
  <textarea {...textareaProps(props)} />
)

const Label = (props: Props<typeof labelProps>) => (
  <label {...labelProps(props)} />
)

const Caption = ({ children, ...props }: Props<typeof captionProps>) => (
  <div {...captionProps(props)}>
    <small>{children}</small>
  </div>
)

export const Form = { Group, Input, Textarea, Label, Caption }
