import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Alert, Btn, BtnLink, Card, Container, Grid, ListGroup } from "~/ui"

export default function Index() {
  return (
    <Container style={{ maxWidth: 1200 }}>
      <h1>Hello World</h1>
      <p>Lorem ipsum dolar sit amet consecteteur.</p>
      <Btn primary>Click to Submit</Btn>
      <Btn secondary>Click to Submit</Btn>
      <Alert warning my2>
        Warning!
      </Alert>

      <Container fluid>
        <Grid.Row>
          <Grid.Col>1 of 2</Grid.Col>
          <Grid.Col>2 of 2</Grid.Col>
        </Grid.Row>
      </Container>

      <Container fluid>
        <Grid.Row>
          <Grid.Col border>1 of 2</Grid.Col>
          <Grid.Col border border5 col6>
            2 of 2
          </Grid.Col>
          <Grid.Col border>2 of 2</Grid.Col>
        </Grid.Row>
      </Container>
      <Container fluid mt3>
        <Grid.Row>
          <Grid.Col>
            <Card>
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Subtitle mb2 textMuted>
                  Card subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <BtnLink href="#" primary>
                  Go somewhere
                </BtnLink>
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col>
            <Card>
              <Card.Body>
                <Card.Title>List Group</Card.Title>
              </Card.Body>
              <ListGroup flush>
                <ListGroup.Item>An item</ListGroup.Item>
                <ListGroup.Item>A second item</ListGroup.Item>
                <ListGroup.Item>A third item</ListGroup.Item>
              </ListGroup>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </Container>
  )
}
