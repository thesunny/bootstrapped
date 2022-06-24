import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Layout } from "~/layout"
import { Div, P, Alert, Card, Container, H1, Heading, Grid } from "~/ui"

export default function Index() {
  return (
    <Layout>
      <Heading h1>Colors</Heading>
      <Grid.Row>
        <Grid.Col>
          <Card>
            <Card.Header>Text Colors</Card.Header>
            <Card.Body>
              <P textPrimary>Primary</P>
              <P textSuccess>Success</P>
              <P textDanger>Danger</P>
              <P textWarning bgDark>
                Warning
              </P>
              <P textInfo bgDark>
                Info
              </P>
              <P textLight bgDark>
                Light
              </P>
              <P textDark>Dark</P>
              <P textBlack50>Black 50</P>
              <P textWhite50 bgDark>
                White 50
              </P>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col>
          <Card>
            <Card.Header>Background Colors</Card.Header>
            <Card.Body>
              <Div p3 mb2 bgPrimary textWhite>
                Primary
              </Div>
              <Div p3 mb2 bgSuccess textWhite>
                Success
              </Div>
              <Div p3 mb2 bgDanger textWhite>
                Danger
              </Div>
              <Div p3 mb2 bgWarning textDark>
                Warning
              </Div>
              <Div p3 mb2 bgInfo textDark>
                Info
              </Div>
              <Div p3 mb2 bgLight textDark>
                Light
              </Div>
              <Div p3 mb2 bgDark textWhite>
                Dark
              </Div>
              <Div p3 mb2 bgBody textDark>
                Body
              </Div>
              <Div p3 mb2 bgWhite textDark>
                White
              </Div>
              <Div p3 mb2 bgTransparent textDark>
                Transparent
              </Div>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col>
          <Card>
            <Card.Header>Background Gradient</Card.Header>
            <Card.Body>
              <Div p3 mb2 bgPrimary bgGradient textWhite>
                Primary
              </Div>
              <Div p3 mb2 bgSuccess bgGradient textWhite>
                Success
              </Div>
              <Div p3 mb2 bgDanger bgGradient textWhite>
                Danger
              </Div>
              <Div p3 mb2 bgWarning bgGradient textDark>
                Warning
              </Div>
              <Div p3 mb2 bgInfo bgGradient textDark>
                Info
              </Div>
              <Div p3 mb2 bgLight bgGradient textDark>
                Light
              </Div>
              <Div p3 mb2 bgDark bgGradient textWhite>
                Dark
              </Div>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Layout>
  )
}
