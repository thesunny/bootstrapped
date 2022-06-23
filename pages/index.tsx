import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Layout } from "~/layout"
import {
  Alert,
  Btn,
  BtnLink,
  Card,
  Container,
  Form,
  Grid,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  ListGroup,
  Span,
  Table,
} from "~/ui"

export default function Index() {
  return (
    <Layout>
      <Container>
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

        <Container>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>
          <Heading h1>Heading</Heading>
          <Heading h2>Heading</Heading>
          <Heading h3>Heading</Heading>
          <Heading h4>Heading</Heading>
          <Heading h5>Heading</Heading>
          <Heading h6>Heading</Heading>
          <Span fs1 me3>
            Size 1
          </Span>
          <Span fs2 me3>
            Size 2
          </Span>
          <Span fs3 me3>
            Size 3
          </Span>
          <Span fs4 me3>
            Size 4
          </Span>
          <Span fs5 me3>
            Size 5
          </Span>
          <Span fs6 me3>
            Size 6
          </Span>
        </Container>

        <Container my3>
          <Grid.Row>
            <Grid.Col>
              <Form.Group>
                <Form.Label>Input Text</Form.Label>
                <Form.Input defaultValue="Enter your name" />
                <Form.Caption>First and last name</Form.Caption>
              </Form.Group>
              <Form.Group>
                <Form.Label>Input Password</Form.Label>
                <Form.Input type="password" defaultValue="Secret Password" />
                <Form.Caption>Make it hard to guess</Form.Caption>
              </Form.Group>
              <Form.Group>
                <Form.Label>Textarea</Form.Label>
                <Form.Textarea defaultValue="Lorem ipsum dolar sit amet..." />
              </Form.Group>
            </Grid.Col>
            <Grid.Col></Grid.Col>
          </Grid.Row>
        </Container>

        <Container fluid my3>
          <Grid.Row>
            <Grid.Col>
              <Card>
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Subtitle mb2 textMuted>
                    Card subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
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

        <Table bordered rounded2>
          <Table.Head>
            <Table.Row>
              <Table.Td>Col 1</Table.Td>
              <Table.Td>Col 2</Table.Td>
              <Table.Td>Col 3</Table.Td>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Td>alpha</Table.Td>
              <Table.Td active>bravo</Table.Td>
              <Table.Td>charlie</Table.Td>
            </Table.Row>
            <Table.Row>
              <Table.Td>alpha</Table.Td>
              <Table.Td>bravo</Table.Td>
              <Table.Td>charlie</Table.Td>
            </Table.Row>
            <Table.Row>
              <Table.Td>alpha</Table.Td>
              <Table.Td>bravo</Table.Td>
              <Table.Td>charlie</Table.Td>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </Layout>
  )
}
