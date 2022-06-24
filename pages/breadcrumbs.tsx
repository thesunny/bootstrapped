import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Layout } from "~/layout"
import { Breadcrumb, Alert, Card, Container, H1 } from "~/ui"

export default function Index() {
  return (
    <Layout>
      <H1>Breadcrumbs</H1>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Library</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </Layout>
  )
}
