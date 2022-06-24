import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Layout } from "~/layout"
import { BtnLink, ListGroup, Card, Grid, Container, Heading } from "~/ui"

export default function Index() {
  return (
    <Layout>
      <Heading h1>Cards</Heading>
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
      {/* Title and Subtitle */}
      <Grid.Row my3>
        <Grid.Col>
          <Card>
            <Card.Header>Title</Card.Header>
            <Card.Body>
              <Card.Title>Default Title</Card.Title>
              <Card.Title h1>Title 1</Card.Title>
              <Card.Title h2>Title 2</Card.Title>
              <Card.Title h3>Title 3</Card.Title>
              <Card.Title h4>Title 4</Card.Title>
              <Card.Title h5>Title 5</Card.Title>
              <Card.Title h6>Title 6</Card.Title>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col>
          <Card>
            <Card.Header>Subtitle</Card.Header>
            <Card.Body>
              <Card.Subtitle>Default Subtitle</Card.Subtitle>
              <Card.Subtitle h1>Title 1</Card.Subtitle>
              <Card.Subtitle h2>Title 2</Card.Subtitle>
              <Card.Subtitle h3>Title 3</Card.Subtitle>
              <Card.Subtitle h4>Title 4</Card.Subtitle>
              <Card.Subtitle h5>Title 5</Card.Subtitle>
              <Card.Subtitle h6>Title 6</Card.Subtitle>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
      {/* Header and Footer */}
      <Grid.Row my3>
        <Grid.Col>
          <Card textCenter>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title h5>Special title treatment</Card.Title>
              <Card.Text>With supporting text below</Card.Text>
              <BtnLink primary href="#">
                Go somewhere
              </BtnLink>
            </Card.Body>
            <Card.Footer textMuted>2 days ago</Card.Footer>
          </Card>
        </Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </Layout>
  )
}
