import { $, mergeX_X } from "./helpers"
const SIZE_LIST = $("25", "50", "75", "100", "auto")

export const SIZING_MAP = {
  ...mergeX_X($("w", "h"), SIZE_LIST),
  mw100: "mw-100",
  mh100: "mh-100",
  minVw100: "min-vw-100",
  minVh100: "min-vh-100",
  vw100: "vw-100",
  vh100: "vh-100",
}
