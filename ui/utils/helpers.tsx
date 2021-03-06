import cx from "classnames"

/**
 * NOTE: Requires TypeScript 4.1 as it uses Template Literal Types
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types
 */

export function $<T extends string>(arg: T, ...args: T[]): T[] {
  return [arg, ...args]
}

export function unprefix<B extends string, L extends readonly string[]>(
  base: B,
  list: L
) {
  const map = {} as { [key in L[number]]: string }
  for (const item of list) {
    const key: L[number] = item
    map[key] = `${base}-${item}`
  }

  return map
}

//capitalize only the first letter of the string.
function capitalize<T extends string>(text: T): Capitalize<T> {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}` as Capitalize<T>
}

export function mergeX_X<
  A extends readonly string[],
  B extends readonly string[]
>(listA: A, listB: B) {
  const map = {} as {
    [key in `${A[number]}${Capitalize<B[number]>}`]: string
  }
  for (const itemA of listA) {
    for (const itemB of listB) {
      const key = `${itemA}${capitalize(itemB)}` as `${A[number]}${Capitalize<
        B[number]
      >}`
      map[key] = `${itemA}-${itemB}`
    }
  }
  return map
}

export function mergeXX_X<
  A extends readonly string[],
  B extends readonly string[],
  C extends readonly string[]
>(listA: A, listB: B, listC: C) {
  const map = {} as {
    [key in `${A[number]}${B[number]}${Capitalize<C[number]>}`]: string
  }
  for (const itemA of listA) {
    for (const itemB of listB) {
      for (const itemC of listC) {
        const key = `${itemA}${itemB}${capitalize(
          itemC
        )}` as `${A[number]}${B[number]}${Capitalize<C[number]>}`
        map[key] = `${itemA}${itemB}-${itemC}`
      }
    }
  }
  return map
}

type GetArgPropsFromTag<T extends keyof React.ReactHTML> =
  React.ReactHTML[T] extends React.DetailedHTMLFactory<infer T, infer U>
    ? T
    : never

type GetArgPropsFromMap<M extends Record<string, string>> = {
  [K in keyof M]?: true
}

export function GetProps<
  T extends keyof React.ReactHTML,
  M extends Record<string, string>
>(
  tag: T,
  mappings: M,
  classNameArg?: Parameters<typeof cx>[0]
): ((
  props: GetArgPropsFromTag<T> & GetArgPropsFromMap<M>
) => GetArgPropsFromTag<T>) & {
  mappings: M
} {
  function getProps(
    props: GetArgPropsFromTag<T> & GetArgPropsFromMap<M>
  ): GetArgPropsFromTag<T> {
    tag // we don't need it but we need to eat it for TypeScript
    const nextProps = {} as GetArgPropsFromTag<T>
    const classNames: string[] = []
    if (mappings["default"]) {
      classNames.push(mappings["default"])
    }
    for (const key in props) {
      const className = mappings[key] as string | undefined
      if (className) {
        classNames.push(className)
      } else {
        const _key = key as keyof GetArgPropsFromTag<T>
        nextProps[_key] = props[key] as any // we're confident this works ;)
      }
    }
    nextProps.className = cx(classNames, classNameArg, props.className)
    return nextProps
  }
  return Object.assign(getProps, { mappings })
}

export type Props<T extends (args: Record<string, string>) => unknown> =
  Parameters<T>[0]

export const VARIANT_LIST = $(
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
)

export function mapping<T extends Record<string, string>>(map: T) {
  return map
}

export type HeadingTagProps = {
  h1?: true
  h2?: true
  h3?: true
  h4?: true
  h5?: true
  h6?: true
}

export function getHeadingTag(
  { h1, h2, h3, h4, h5, h6 }: HeadingTagProps,
  defaultTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
) {
  if (h1) return "h1"
  if (h2) return "h2"
  if (h3) return "h3"
  if (h4) return "h4"
  if (h5) return "h5"
  if (h6) return "h6"
  if (defaultTag) return defaultTag
  throw new Error(`Need to provide a prop of h1, h2, h3, h4, h5, or h6`)
}
