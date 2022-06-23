export * from "./helpers"

import { $, mergeX_X, mergeXX_X, mapping } from "./helpers"

/**
 * Variants
 */

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

/**
 * Utilities: Spacing
 */

export const SPACING_MAP = mergeXX_X(
  $("m", "p"),
  $("t", "b", "s", "e", "x", "y"),
  $("0", "1", "2", "3", "4", "5", "6", "7")
)

/**
 * Utilities: Borders
 */

export const BORDERS_MAP = mapping({
  ...mergeX_X($("border"), VARIANT_LIST),
  ...mergeX_X($("border"), $("1", "2", "3", "4", "5")),
  border: "border",
  ...mergeX_X(
    $("rounded"),
    $("top", "end", "bottom", "start", "circle", "pill", "0", "1", "2", "3")
  ),
  rounded: "rounded",
})

/**
 * Utilities: Text
 */

export const TEXT_MAP = mapping({
  ...mergeX_X($("text"), $("body", "muted", "white", ...VARIANT_LIST)),
  textBlack50: "text-black-50",
  textWhite50: "text-white-50",
})

export const UTILS_MAP = mapping({
  ...SPACING_MAP,
  ...BORDERS_MAP,
  ...TEXT_MAP,
})
