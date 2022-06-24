import "bootstrap/dist/css/bootstrap.css"
import { Layout } from "~/layout"
import { Card, Div, Heading } from "~/ui"

export default function Index() {
  return (
    <Layout>
      <Heading h1 mb4>
        Shadows
      </Heading>
      <Card>
        <Card.Header>Shadows</Card.Header>
        <Card.Body>
          <Div shadowNone p3 mb4 bgLight rounded>
            No Shadow
          </Div>
          <Div shadowSm p3 mb4 bgBody rounded>
            Small Shadow
          </Div>
          <Div shadow p3 mb4 bgBody rounded>
            Regular Shadow
          </Div>
          <Div shadowLg p3 mb4 bgBody rounded>
            Large Shadow
          </Div>
        </Card.Body>
      </Card>
    </Layout>
  )
}
