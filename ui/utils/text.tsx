export * from "./helpers"

import { VARIANT_LIST, $, mergeX_X, mapping } from "./helpers"

/**
 * Utilities: Text
 */

export const TEXT_MAP = mapping({
  ...mergeX_X($("text"), $("body", "muted", "white", ...VARIANT_LIST)),
  textBlack50: "text-black-50",
  textWhite50: "text-white-50",
  // text alignment
  textStart: "text-start",
  textCenter: "text-center",
  textEnd: "text-end",
  // text wrapping and overflow
  textWrap: "text-wrap",
  textNowrap: "text-nowrap",
  // word break
  textBreak: "text-break",
  // text transform
  textLowercase: "text-lowercase",
  textUppercase: "text-uppercase",
  textCapitalize: "text-capitalize",
  // font size
  ...mergeX_X($("fs"), $("1", "2", "3", "4", "5", "6")),
  // font weight and italics
  fwbold: "fw-bold",
  fwBolder: "fw-bolder",
  fwWeight: "fw-normal",
  fwLight: "fw-light",
  fwLighter: "fw-lighter",
  fstItalic: "fst-italic",
  fstStyle: "fst-normal",
  textReset: "text-reset",
  // line height
  lh1: "lh-1",
  lhSm: "lh-sm",
  lhBase: "lh-base",
  lhLg: "lh-lg",
  // monospace
  fontMonospace: "font-monospace",
  // text decoration
  textDeocrationUnderline: "text-decoration-underline",
  textDeocrationLineThrough: "text-decoration-line-through",
  // shortcuts
  bold: "fw-bold",
  italic: "fst-italic",
  monospace: "font-monospace",
  underline: "text-decoration-underline",
})
