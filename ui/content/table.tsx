import { GetProps, Props, unprefix, VARIANT_LIST, UTILS_MAP, $ } from "../utils"

/**
 * https://getbootstrap.com/docs/5.1/content/tables/
 */

const TABLE_VARIANT_MAP = unprefix("table", VARIANT_LIST)

const tableProps = GetProps("table", {
  default: "table",
  ...TABLE_VARIANT_MAP,
  striped: "table-striped",
  hover: "table-hover",
  bordered: "table-bordered",
  borderless: "table-borderless",
  sm: "table-sm",
  responsive: "table-responsive",
  ...UTILS_MAP,
})

const tbodyProps = GetProps("tbody", { ...UTILS_MAP })
const theadProps = GetProps("thead", { ...UTILS_MAP })

const trProps = GetProps("tr", {
  ...TABLE_VARIANT_MAP,
  ...UTILS_MAP,
  active: "table-active",
})

const tdProps = GetProps("td", {
  ...TABLE_VARIANT_MAP,
  ...UTILS_MAP,
  active: "table-active",
})

function _Table(props: Props<typeof tableProps>) {
  return <table {...tableProps(props)} />
}

function Body(props: Props<typeof tbodyProps>) {
  return <tbody {...tbodyProps(props)} />
}

function Head(props: Props<typeof theadProps>) {
  return <thead {...theadProps(props)} />
}

function Row(props: Props<typeof trProps>) {
  return <tr {...trProps(props)} />
}

function Td(props: Props<typeof tdProps>) {
  return <td {...tdProps(props)} />
}

function Th(props: Props<typeof tdProps>) {
  return <th {...tdProps(props)} />
}

export const Table = Object.assign(_Table, { Body, Head, Row, Td, Th })
