import React from "react"
import { Container, ListGroup } from "~/ui"
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
          <ListGroup>
            <Link href="/alerts">
              <ListGroup.Link>Alerts</ListGroup.Link>
            </Link>
            <ListGroup.Link>Alerts</ListGroup.Link>
            <ListGroup.Link>Alerts</ListGroup.Link>
          </ListGroup>
        </Container>
      </$Sidebar>
      <$Body>
        <Container py3>{children}</Container>
      </$Body>
    </div>
  )
}
