export {}
// import cx from "classnames"
// import React from "react"
// import { Simplify } from "type-fest"
// import { AssertType } from "@thesunny/assert-type"
// import pick from "just-pick"
// import { SPACING_MAP } from "./class-names"

// const ButtonMap = {
//   default: "btn",
//   primary: "btn-primary",
//   success: "btn-success",
//   danger: "btn-danger",
//   warning: "btn-warning",
//   info: "btn-info",
//   light: "btn-light",
//   dark: "btn-dark",
//   link: "btn-link",
//   xs: "btn-xs",
//   sm: "btn-sm",
// }

// const BUTTON = [
//   "btn",
//   "btn-primary",
//   "btn-success",
//   "btn-danger",
//   "btn-warning",
//   "btn-info",
//   "btn-light",
//   "btn-dark",
//   "btn-link",
//   "btn-xs",
//   "btn-sm",
// ] as const

// const TEXT_COLORS = [
//   "text-primary",
//   "text-secondary",
//   "text-success",
//   "text-danger",
// ] as const

// const TestButtonMap = {
//   primary: "btn-primary",
//   success: "btn-success",
// }

// const TestButtonList = ["text-white", "text-dark"] as const

// type GetPropsFromTag<T extends keyof React.ReactHTML> =
//   React.ReactHTML["button"] extends React.DetailedHTMLFactory<infer T, infer U>
//     ? T
//     : never

// type GetPropsFromMap<M extends Record<string, string>> = {
//   [K in keyof M]?: true
// }

// type GetPropsFromList<L extends readonly string[]> = {
//   [K in L[number]]?: true
// }

// type GetPropsFromAll<
//   T extends keyof React.ReactHTML,
//   M extends Record<string, string> = Record<string, never>,
//   L extends readonly string[] = []
// > = GetPropsFromTag<T> & GetPropsFromMap<M> & GetPropsFromList<L>

// type TestButtonPropsFromTag = GetPropsFromTag<"button">
// type TestButtonPropsFromMap = GetPropsFromMap<typeof TestButtonMap>
// type TestButtonPropsFromList = GetPropsFromList<typeof TestButtonList>
// type TestButtonPropsUnion = TestButtonPropsFromTag &
//   TestButtonPropsFromMap &
//   TestButtonPropsFromList

// type TestButtonProps = GetPropsFromAll<
//   "button",
//   typeof TestButtonMap,
//   typeof TestButtonList
// >

// AssertType.Equal<TestButtonPropsUnion, TestButtonProps>(true)

// function GetProps<
//   T extends keyof React.ReactHTML,
//   M extends Record<string, string>,
//   L extends readonly string[]
// >(
//   tag: T,
//   map: M,
//   list: L
// ): (props: GetPropsFromAll<T, M, L>) => GetPropsFromTag<T> {
//   return function getProps(
//     props: GetPropsFromTag<T> & GetPropsFromMap<M> & GetPropsFromList<L>
//   ): GetPropsFromTag<T> {
//     tag // we don't need it but we need to eat it for TypeScript
//     const nextProps: GetPropsFromTag<T> = {}
//     const classNames: string[] = []
//     if (map["default"]) {
//       classNames.push(map["default"])
//     }
//     for (const key in props) {
//       if (list.includes(key)) {
//         classNames.push(key)
//         continue
//       }
//       const foundClassName = map[key] as string | undefined
//       if (foundClassName) {
//         classNames.push(foundClassName)
//         continue
//       }
//       nextProps[key as keyof GetPropsFromTag<T>] = props[key]
//     }
//     nextProps.className = cx(classNames, props.className)
//     console.log(nextProps)
//     console.log(SPACING_MAP)
//     return nextProps
//   } as (props: GetPropsFromAll<T, M, L>) => GetPropsFromTag<T>
// }

// const getButtonProps = GetProps("button", {}, [...TEXT_COLORS, ...BUTTON])

// export function Btn(props: Parameters<typeof getButtonProps>[0]) {
//   return <button {...getButtonProps(props)} />
// }
