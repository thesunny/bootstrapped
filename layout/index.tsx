import React from "react"
import { Card, Container, ListGroup } from "~/ui"
import styled from "@emotion/styled"
import Link from "next/link"

const $Sidebar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
`

const $Body = styled.div`
  position: absolute;
  left: 240px;
  top: 0;
  bottom: 0;
  right: 0;
`

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <$Sidebar>
        <Container py3>
          <small>
            <Card mb3>
              <Card.Header>Components</Card.Header>
              <ListGroup flush>
                <Link href="/alerts">
                  <ListGroup.Link>Alerts</ListGroup.Link>
                </Link>
                <Link href="/badges">
                  <ListGroup.Link>Badges</ListGroup.Link>
                </Link>
                <Link href="/breadcrumbs">
                  <ListGroup.Link>Breadcrumbs</ListGroup.Link>
                </Link>
                <Link href="/cards">
                  <ListGroup.Link>Cards</ListGroup.Link>
                </Link>
                <Link href="/list-groups">
                  <ListGroup.Link>List Groups</ListGroup.Link>
                </Link>
              </ListGroup>
            </Card>
            <Card mb3>
              <Card.Header>Utilities</Card.Header>
              <ListGroup flush>
                <Link href="/colors">
                  <ListGroup.Link>Colors</ListGroup.Link>
                </Link>
                <Link href="/cards">
                  <ListGroup.Link>Cards</ListGroup.Link>
                </Link>
                <Link href="/shadows">
                  <ListGroup.Link>Shadows</ListGroup.Link>
                </Link>
              </ListGroup>
            </Card>
          </small>
        </Container>
      </$Sidebar>
      <$Body>
        <Container py3>{children}</Container>
      </$Body>
    </div>
  )
}
