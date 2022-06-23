import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Layout } from "~/layout"
import { Alert, Card, Container, H1 } from "~/ui"

export default function Index() {
  return (
    <Layout>
      <Alert primary>Primary</Alert>
      <Alert success>Success</Alert>
      <Alert danger>Danger</Alert>
      <Alert warning>Warning</Alert>
      <Alert info>Info</Alert>
      <Alert light>Light</Alert>
      <Alert dark>Dark</Alert>
    </Layout>
  )
}
