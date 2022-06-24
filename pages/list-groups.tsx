import "bootstrap/dist/css/bootstrap.css"
// import { Btn } from "~/ui"
import { Layout } from "~/layout"
import {
  Alert,
  ListGroup,
  Card,
  Container,
  H1,
  Heading,
  Grid,
  Div,
  Badge,
} from "~/ui"

export default function Index() {
  return (
    <Layout>
      <Heading h1>List Groups</Heading>
      <Grid.Row mt4>
        <Grid.Col>
          <Heading h6>List Group Item</Heading>
          <ListGroup>
            <ListGroup.Item>An item</ListGroup.Item>
            <ListGroup.Item active>A second active item</ListGroup.Item>
            <ListGroup.Item>A third item</ListGroup.Item>
            <ListGroup.Item disabled>A fourth disabled item</ListGroup.Item>
            <ListGroup.Item>And a fifth one</ListGroup.Item>
          </ListGroup>
        </Grid.Col>
        <Grid.Col>
          <Heading h6>List Group Link</Heading>
          <ListGroup>
            <ListGroup.Link>An item</ListGroup.Link>
            <ListGroup.Link active>A second active item</ListGroup.Link>
            <ListGroup.Link>A third item</ListGroup.Link>
            <ListGroup.Link disabled>A fourth disabled item</ListGroup.Link>
            <ListGroup.Link>And a fifth one</ListGroup.Link>
          </ListGroup>
        </Grid.Col>
        <Grid.Col>
          <Heading h6>List Group button</Heading>
          <ListGroup>
            <ListGroup.Button>An item</ListGroup.Button>
            <ListGroup.Button active>A second active item</ListGroup.Button>
            <ListGroup.Button>A third item</ListGroup.Button>
            <ListGroup.Button disabled>A fourth disabled item</ListGroup.Button>
            <ListGroup.Button>And a fifth one</ListGroup.Button>
          </ListGroup>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row mt5>
        <Grid.Col>
          <Heading h6>Flush</Heading>
          <ListGroup flush>
            <ListGroup.Item>An item</ListGroup.Item>
            <ListGroup.Item active>A second active item</ListGroup.Item>
            <ListGroup.Item>A third item</ListGroup.Item>
            <ListGroup.Item disabled>A fourth disabled item</ListGroup.Item>
            <ListGroup.Item>And a fifth one</ListGroup.Item>
          </ListGroup>
        </Grid.Col>
        <Grid.Col>
          <Heading h6>Numbered</Heading>
          <ListGroup numbered>
            <ListGroup.Item>An item</ListGroup.Item>
            <ListGroup.Item active>A second active item</ListGroup.Item>
            <ListGroup.Item>A third item</ListGroup.Item>
            <ListGroup.Item disabled>A fourth disabled item</ListGroup.Item>
            <ListGroup.Item>And a fifth one</ListGroup.Item>
          </ListGroup>
        </Grid.Col>
        <Grid.Col>
          <Heading h6>Contextual Classes</Heading>
          <ListGroup>
            <ListGroup.Item primary>An item</ListGroup.Item>
            <ListGroup.Item secondary>A second active item</ListGroup.Item>
            <ListGroup.Item success>A third item</ListGroup.Item>
            <ListGroup.Item danger>A fourth disabled item</ListGroup.Item>
            <ListGroup.Item warning>And a fifth one</ListGroup.Item>
            <ListGroup.Item info>And another</ListGroup.Item>
            <ListGroup.Item light>And another</ListGroup.Item>
            <ListGroup.Item dark>And another</ListGroup.Item>
          </ListGroup>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row mt5>
        <Grid.Col>
          <Heading h6>Custom Content</Heading>
          <ListGroup>
            <ListGroup.Item flexStart>
              <Div ms2 meAuto>
                <Div bold>Subheading</Div>
                Content for list item
              </Div>
              <Badge primary roundedPill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item flexStart>
              <Div ms2 meAuto>
                <Div bold>Subheading</Div>
                Content for list item
              </Div>
              <Badge primary roundedPill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item flexStart>
              <Div ms2 meAuto>
                <Div bold>Subheading</Div>
                Content for list item
              </Div>
              <Badge primary roundedPill>
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Grid.Col>
        <Grid.Col>
          <Heading h6>With Badges</Heading>
          <ListGroup>
            <ListGroup.Item flexCenter>
              A list item
              <Badge primary roundedPill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item flexCenter>
              A second list item
              <Badge primary roundedPill>
                2
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item flexCenter>
              A thirdlist item
              <Badge primary roundedPill>
                1
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Grid.Col>
        <Grid.Col>
          {/* <Heading h6>Contextual Classes</Heading>
          <ListGroup>
            <ListGroup.Item primary>An item</ListGroup.Item>
            <ListGroup.Item secondary>A second active item</ListGroup.Item>
            <ListGroup.Item success>A third item</ListGroup.Item>
            <ListGroup.Item danger>A fourth disabled item</ListGroup.Item>
            <ListGroup.Item warning>And a fifth one</ListGroup.Item>
            <ListGroup.Item info>And another</ListGroup.Item>
            <ListGroup.Item light>And another</ListGroup.Item>
            <ListGroup.Item dark>And another</ListGroup.Item>
          </ListGroup> */}
        </Grid.Col>
      </Grid.Row>
    </Layout>
  )
}
