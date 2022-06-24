export * from "./helpers"

import { VARIANT_LIST, $, mergeX_X, mergeXX_X, mapping } from "./helpers"
import { SIZING_MAP } from "./sizing"
import { TEXT_MAP } from "./text"

/**
 * Utilities: Spacing
 */

const LIST_1_5 = $("0", "1", "2", "3", "4", "5", "auto")

export const SPACING_MAP = {
  ...mergeX_X($("m", "p"), LIST_1_5),
  ...mergeXX_X($("m", "p"), $("t", "b", "s", "e", "x", "y"), LIST_1_5),
}

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

export const BG_MAP = mapping({
  ...mergeX_X(
    $("bg"),
    $("body", "white", "transparent", "gradient", ...VARIANT_LIST)
  ),
})

export const SHADOW_MAP = mapping({
  shadowNone: "shadow-none",
  shadowSm: "shadow-sm",
  shadow: "shadow",
  shadowLg: "shadow-lg",
})

export const UTILS_MAP = mapping({
  ...BG_MAP,
  ...SPACING_MAP,
  ...BORDERS_MAP,
  ...SHADOW_MAP,
  ...SIZING_MAP,
  ...TEXT_MAP,
})
