import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Layout } from "~/layout"
import { Badge, Card, Container, Div, H1, Heading } from "~/ui"

export default function Index() {
  return (
    <Layout>
      <Heading h1>Badges</Heading>
      <Div my2>
        <Badge primary me1>
          Primary
        </Badge>
        <Badge success me1>
          Success
        </Badge>
        <Badge danger me1>
          Danger
        </Badge>
        <Badge warning textDark me1>
          Warning
        </Badge>
        <Badge info textDark me1>
          Info
        </Badge>
        <Badge light textDark me1>
          Light
        </Badge>
        <Badge dark me1>
          Dark
        </Badge>
      </Div>
      <Div my2>
        <Badge roundedPill primary me1>
          Primary
        </Badge>
        <Badge roundedPill success me1>
          Success
        </Badge>
        <Badge roundedPill danger me1>
          Danger
        </Badge>
        <Badge roundedPill warning textDark me1>
          Warning
        </Badge>
        <Badge roundedPill info textDark me1>
          Info
        </Badge>
        <Badge roundedPill light textDark me1>
          Light
        </Badge>
        <Badge roundedPill dark me1>
          Dark
        </Badge>
      </Div>
    </Layout>
  )
}
